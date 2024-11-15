<script setup lang="ts">
import type { SupportedLanguagesType } from '@sd/locales';

import { SUPPORT_LANGUAGES } from '@sd/constants';
import { Languages } from '@sd/icons';
import { loadLocaleMessages } from '@sd/locales';
import { preferences, updatePreferences } from '@sd/preferences';
import { SdDropdownRadioMenu, SdIconButton } from '@sd-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string) {
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <SdDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <SdIconButton>
        <Languages class="text-foreground size-4" />
      </SdIconButton>
    </SdDropdownRadioMenu>
  </div>
</template>
