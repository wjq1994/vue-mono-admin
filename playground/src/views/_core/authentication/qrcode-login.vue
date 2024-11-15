<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@sd/common-ui';
import { LOGIN_PATH } from '@sd/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
