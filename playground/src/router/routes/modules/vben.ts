import type { RouteRecordRaw } from 'vue-router';

import {
  VBEN_ANT_PREVIEW_URL,

  VBEN_LOGO_URL,
  VBEN_NAIVE_PREVIEW_URL,
} from '@sd/constants';
import { SvgAntdvLogoIcon } from '@sd/icons';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      badgeType: 'dot',
      icon: VBEN_LOGO_URL,
      order: 9999,
      title: $t('demos.sd.title'),
    },
    name: 'SdProject',
    path: '/sd-admin',
    children: [
      {
        name: 'SdAbout',
        path: '/sd-admin/about',
        component: () => import('#/views/_core/about/index.vue'),
        meta: {
          icon: 'lucide:copyright',
          title: $t('demos.sd.about'),
        },
      },
      {
        name: 'SdDocument',
        path: '/sd-admin/document',
        component: IFrameView,
        meta: {
          icon: 'lucide:book-open-text',

          title: $t('demos.sd.document'),
        },
      },
      {
        name: 'SdGithub',
        path: '/sd-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: "",
          title: 'Github',
        },
      },
      {
        name: 'SdAntdv',
        path: '/sd-admin/antdv',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: SvgAntdvLogoIcon,
          link: VBEN_ANT_PREVIEW_URL,
          title: $t('demos.sd.antdv'),
        },
      },
      {
        name: 'SdNaive',
        path: '/sd-admin/naive',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:naiveui',
          link: VBEN_NAIVE_PREVIEW_URL,
          title: $t('demos.sd.naive-ui'),
        },
      },
      {
        name: 'SdElementPlus',
        path: '/sd-admin/ele',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:element',
          link: "",
          title: $t('demos.sd.element-plus'),
        },
      },
    ],
  },
];

export default routes;
