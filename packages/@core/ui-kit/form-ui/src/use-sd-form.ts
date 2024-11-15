import type {
  BaseFormComponentType,
  ExtendedFormApi,
  SdFormProps,
} from './types';

import { defineComponent, h, isReactive, onBeforeUnmount, watch } from 'vue';

import { useStore } from '@sd-core/shared/store';

import { FormApi } from './form-api';
import SdUseForm from './sd-use-form.vue';

export function useSdForm<
  T extends BaseFormComponentType = BaseFormComponentType,
>(options: SdFormProps<T>) {
  const IS_REACTIVE = isReactive(options);
  const api = new FormApi(options);
  const extendedApi: ExtendedFormApi = api as never;
  extendedApi.useStore = (selector) => {
    return useStore(api.store, selector);
  };

  const Form = defineComponent(
    (props: SdFormProps, { attrs, slots }) => {
      onBeforeUnmount(() => {
        api.unmount();
      });
      api.setState({ ...props, ...attrs });
      return () =>
        h(SdUseForm, { ...props, ...attrs, formApi: extendedApi }, slots);
    },
    {
      inheritAttrs: false,
      name: 'SdUseForm',
    },
  );
  // Add reactivity support
  if (IS_REACTIVE) {
    watch(
      () => options.schema,
      () => {
        api.setState({ schema: options.schema });
      },
      { immediate: true },
    );
  }

  return [Form, extendedApi] as const;
}
