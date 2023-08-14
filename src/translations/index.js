//import { createI18n } from 'vue-i18n';
import { createI18n } from 'vue-i18n'
import kk from './kk.json';
import ru from './ru.json';
import en from './en.json';
import tr from './tr.json';

const i18n = createI18n({
  locale: localStorage.getItem('cuisi.kz_lang') || 'en', //import.meta.env.VITE_DEFAULT_LOCALE, 
	fallbackLocale:'en',
  messages: {
    kk,
		ru,
    en,
    tr,
  },
  allowComposition: true, 
})

export default i18n;