import type { ClassType, DeepPartial } from '@sd/types';
import type { SdFormProps } from '@sd-core/form-ui';
import type {
  VxeGridListeners,
  VxeGridProps as VxeTableGridProps,
  VxeUIExport,
} from 'vxe-table';

import type { VxeGridApi } from './api';

import type { Ref } from 'vue';

import { useSdForm } from '@sd-core/form-ui';

export interface VxePaginationInfo {
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface VxeGridProps {
  /**
   * 标题
   */
  tableTitle?: string;
  /**
   * 标题帮助
   */
  tableTitleHelp?: string;
  /**
   * 组件class
   */
  class?: ClassType;
  /**
   * vxe-grid class
   */
  gridClass?: ClassType;
  /**
   * vxe-grid 配置
   */
  gridOptions?: DeepPartial<VxeTableGridProps>;
  /**
   * vxe-grid 事件
   */
  gridEvents?: DeepPartial<VxeGridListeners>;
  /**
   * 表单配置
   */
  formOptions?: SdFormProps;
}

export type ExtendedVxeGridApi = {
  useStore: <T = NoInfer<VxeGridProps>>(
    selector?: (state: NoInfer<VxeGridProps>) => T,
  ) => Readonly<Ref<T>>;
} & VxeGridApi;

export interface SetupVxeTable {
  configVxeTable: (ui: VxeUIExport) => void;
  useSdForm: typeof useSdForm;
}
