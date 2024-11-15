import type {
  BaseFormComponentType,
  FormCommonConfig,
  SdFormAdapterOptions,
} from './types';

import type { Component } from 'vue';
import { h } from 'vue';

import {
  SdButton,
  SdCheckbox,
  Input as SdInput,
  SdInputPassword,
  SdPinInput,
  SdSelect,
} from '@sd-core/shadcn-ui';
import { globalShareState } from '@sd-core/shared/global-state';

import { defineRule } from 'vee-validate';

const DEFAULT_MODEL_PROP_NAME = 'modelValue';

export const DEFAULT_FORM_COMMON_CONFIG: FormCommonConfig = {};

export const COMPONENT_MAP: Record<BaseFormComponentType, Component> = {
  DefaultButton: h(SdButton, { size: 'sm', variant: 'outline' }),
  PrimaryButton: h(SdButton, { size: 'sm', variant: 'default' }),
  SdCheckbox,
  SdInput,
  SdInputPassword,
  SdPinInput,
  SdSelect,
};

export const COMPONENT_BIND_EVENT_MAP: Partial<
  Record<BaseFormComponentType, string>
> = {
  SdCheckbox: 'checked',
};

export function setupSdForm<
  T extends BaseFormComponentType = BaseFormComponentType,
>(options: SdFormAdapterOptions<T>) {
  const { config, defineRules } = options;

  const { disabledOnChangeListener = false, emptyStateValue = undefined } =
    (config || {}) as FormCommonConfig;

  Object.assign(DEFAULT_FORM_COMMON_CONFIG, {
    disabledOnChangeListener,
    emptyStateValue,
  });

  if (defineRules) {
    for (const key of Object.keys(defineRules)) {
      defineRule(key, defineRules[key as never]);
    }
  }

  const baseModelPropName =
    config?.baseModelPropName ?? DEFAULT_MODEL_PROP_NAME;
  const modelPropNameMap = config?.modelPropNameMap as
    | Record<BaseFormComponentType, string>
    | undefined;

  const components = globalShareState.getComponents();

  for (const component of Object.keys(components)) {
    const key = component as BaseFormComponentType;
    COMPONENT_MAP[key] = components[component as never];

    if (baseModelPropName !== DEFAULT_MODEL_PROP_NAME) {
      COMPONENT_BIND_EVENT_MAP[key] = baseModelPropName;
    }

    // 覆盖特殊组件的modelPropName
    if (modelPropNameMap && modelPropNameMap[key]) {
      COMPONENT_BIND_EVENT_MAP[key] = modelPropNameMap[key];
    }
  }
}
