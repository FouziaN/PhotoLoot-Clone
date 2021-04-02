import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en from './en';
import de from './de';
import it from './it'
import nl from './nl'
import pl from './pl'
import cs from './cs'

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}

i18n.fallbacks = true;
i18n.translations = {
  en, de,it,nl,pl,cs
};

export function strings(name: string, params = {}) {
  return i18n.t(name, params);
}
export default i18n;