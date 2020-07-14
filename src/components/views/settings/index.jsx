import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import SettingItem from 'components/molecules/setting-item';
import LanguageSelector from 'components/molecules/language-selector';

export const Settings = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <SettingItem label={t('settings:languageLabel')} value={<LanguageSelector />} testID="language-selector-label" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
