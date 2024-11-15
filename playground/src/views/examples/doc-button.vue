<script lang="ts" setup>
import { openWindow } from '@sd/utils';

import { Button } from 'ant-design-vue';

const props = defineProps<{ path: string }>();

function handleClick() {

}
</script>

<template>
  <Button @click="handleClick">查看组件文档</Button>
</template>
