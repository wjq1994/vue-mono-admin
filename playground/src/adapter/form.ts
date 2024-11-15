import type {
  SdFormSchema as FormSchema,
  SdFormProps,
} from '@sd/common-ui';

import type { ComponentType } from './component';

import { setupSdForm, useSdForm as useForm, z } from '@sd/common-ui';
import { $t } from '@sd/locales';

setupSdForm<ComponentType>({
  config: {
    // ant design vue组件库默认都是 v-model:value
    baseModelPropName: 'value',
    // 一些组件是 v-model:checked 或者 v-model:fileList
    modelPropNameMap: {
      Checkbox: 'checked',
      Radio: 'checked',
      Switch: 'checked',
      Upload: 'fileList',
    },
  },
  defineRules: {
    // 输入项目必填国际化适配
    required: (value, _params, ctx) => {
      if (value === undefined || value === null || value.length === 0) {
        return $t('ui.formRules.required', [ctx.label]);
      }
      return true;
    },
    // 选择项目必填国际化适配
    selectRequired: (value, _params, ctx) => {
      if (value === undefined || value === null) {
        return $t('ui.formRules.selectRequired', [ctx.label]);
      }
      return true;
    },
  },
});

const useSdForm = useForm<ComponentType>;

export { useSdForm, z };
export type SdFormSchema = FormSchema<ComponentType>;
export type { SdFormProps };
