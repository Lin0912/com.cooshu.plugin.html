import div from './div/config';

import zh from './locales/zh-CN';
import en from './locales/en-US';

export const config = {
  name: '@html plugins',
  version: '0.0.1',

  pluginConfigs: {
    name: '导航',
    children: {
      div,
    },
  },
  locale: {
    zh: zh,
    en: en,
  },
};