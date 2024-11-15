<script lang="ts" setup>
import { Settings } from '@sd/icons';
import { SdIconButton } from '@sd-core/shadcn-ui';

import Preferences from './preferences.vue';

const emit = defineEmits<{ clearPreferencesAndLogout: [] }>();

function clearPreferencesAndLogout() {
  emit('clearPreferencesAndLogout');
}
</script>
<template>
  <Preferences @clear-preferences-and-logout="clearPreferencesAndLogout">
    <SdIconButton>
      <Settings class="text-foreground size-4" />
    </SdIconButton>
  </Preferences>
</template>
