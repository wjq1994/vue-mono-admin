<script lang="ts" setup>
import { SdSpinner } from '@sd-core/shadcn-ui';

import { useContentSpinner } from './use-content-spinner';

defineOptions({ name: 'LayoutContentSpinner' });

const { spinning } = useContentSpinner();
</script>
<template>
  <SdSpinner :spinning="spinning" />
</template>
