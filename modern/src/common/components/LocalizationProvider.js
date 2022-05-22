import React, { createContext, useContext, useMemo } from 'react';

import af from 'traccar-web/web/l10n/af.json';
import ar from 'traccar-web/web/l10n/ar.json';
import az from 'traccar-web/web/l10n/az.json';
import bg from 'traccar-web/web/l10n/bg.json';
import bn from 'traccar-web/web/l10n/bn.json';
import cs from 'traccar-web/web/l10n/cs.json';
import da from 'traccar-web/web/l10n/da.json';
import de from 'traccar-web/web/l10n/de.json';
import el from 'traccar-web/web/l10n/el.json';
import en from 'traccar-web/web/l10n/en.json';
import es from 'traccar-web/web/l10n/es.json';
import fa from 'traccar-web/web/l10n/fa.json';
import fi from 'traccar-web/web/l10n/fi.json';
import fr from 'traccar-web/web/l10n/fr.json';
import he from 'traccar-web/web/l10n/he.json';
import hi from 'traccar-web/web/l10n/hi.json';
import hr from 'traccar-web/web/l10n/hr.json';
import hu from 'traccar-web/web/l10n/hu.json';
import id from 'traccar-web/web/l10n/id.json';
import it from 'traccar-web/web/l10n/it.json';
import ja from 'traccar-web/web/l10n/ja.json';
import ka from 'traccar-web/web/l10n/ka.json';
import kk from 'traccar-web/web/l10n/kk.json';
import km from 'traccar-web/web/l10n/km.json';
import ko from 'traccar-web/web/l10n/ko.json';
import lo from 'traccar-web/web/l10n/lo.json';
import lt from 'traccar-web/web/l10n/lt.json';
import lv from 'traccar-web/web/l10n/lv.json';
import ml from 'traccar-web/web/l10n/ml.json';
import mn from 'traccar-web/web/l10n/mn.json';
import ms from 'traccar-web/web/l10n/ms.json';
import nb from 'traccar-web/web/l10n/nb.json';
import ne from 'traccar-web/web/l10n/ne.json';
import nl from 'traccar-web/web/l10n/nl.json';
import nn from 'traccar-web/web/l10n/nn.json';
import pl from 'traccar-web/web/l10n/pl.json';
import pt from 'traccar-web/web/l10n/pt.json';
import ptBR from 'traccar-web/web/l10n/pt_BR.json';
import ro from 'traccar-web/web/l10n/ro.json';
import ru from 'traccar-web/web/l10n/ru.json';
import si from 'traccar-web/web/l10n/si.json';
import sk from 'traccar-web/web/l10n/sk.json';
import sl from 'traccar-web/web/l10n/sl.json';
import sq from 'traccar-web/web/l10n/sq.json';
import sr from 'traccar-web/web/l10n/sr.json';
import sv from 'traccar-web/web/l10n/sv.json';
import ta from 'traccar-web/web/l10n/ta.json';
import th from 'traccar-web/web/l10n/th.json';
import tr from 'traccar-web/web/l10n/tr.json';
import uk from 'traccar-web/web/l10n/uk.json';
import uz from 'traccar-web/web/l10n/uz.json';
import vi from 'traccar-web/web/l10n/vi.json';
import zh from 'traccar-web/web/l10n/zh.json';
import zhTW from 'traccar-web/web/l10n/zh_TW.json';
import usePersistedState from '../util/usePersistedState';

const languages = {
  af: { data: af, name: 'Afrikaans' },
  ar: { data: ar, name: 'العربية' },
  az: { data: az, name: 'Azərbaycanca' },
  bg: { data: bg, name: 'Български' },
  bn: { data: bn, name: 'বাংলা' },
  cs: { data: cs, name: 'Čeština' },
  de: { data: de, name: 'Deutsch' },
  da: { data: da, name: 'Dansk' },
  el: { data: el, name: 'Ελληνικά' },
  en: { data: en, name: 'English' },
  es: { data: es, name: 'Español' },
  fa: { data: fa, name: 'فارسی' },
  fi: { data: fi, name: 'Suomi' },
  fr: { data: fr, name: 'Français' },
  he: { data: he, name: 'עברית' },
  hi: { data: hi, name: 'हिन्दी' },
  hr: { data: hr, name: 'Hrvatski' },
  hu: { data: hu, name: 'Magyar' },
  id: { data: id, name: 'Bahasa Indonesia' },
  it: { data: it, name: 'Italiano' },
  ja: { data: ja, name: '日本語' },
  ka: { data: ka, name: 'ქართული' },
  kk: { data: kk, name: 'Қазақша' },
  ko: { data: ko, name: '한국어' },
  km: { data: km, name: 'ភាសាខ្មែរ' },
  lo: { data: lo, name: 'ລາວ' },
  lt: { data: lt, name: 'Lietuvių' },
  lv: { data: lv, name: 'Latviešu' },
  ml: { data: ml, name: 'മലയാളം' },
  mn: { data: mn, name: 'Монгол хэл' },
  ms: { data: ms, name: 'بهاس ملايو' },
  nb: { data: nb, name: 'Norsk bokmål' },
  ne: { data: ne, name: 'नेपाली' },
  nl: { data: nl, name: 'Nederlands' },
  nn: { data: nn, name: 'Norsk nynorsk' },
  pl: { data: pl, name: 'Polski' },
  pt: { data: pt, name: 'Português' },
  ptBR: { data: ptBR, name: 'Português (Brasil)' },
  ro: { data: ro, name: 'Română' },
  ru: { data: ru, name: 'Русский' },
  si: { data: si, name: 'සිංහල' },
  sk: { data: sk, name: 'Slovenčina' },
  sl: { data: sl, name: 'Slovenščina' },
  sq: { data: sq, name: 'Shqipëria' },
  sr: { data: sr, name: 'Srpski' },
  sv: { data: sv, name: 'Svenska' },
  ta: { data: ta, name: 'தமிழ்' },
  th: { data: th, name: 'ไทย' },
  tr: { data: tr, name: 'Türkçe' },
  uk: { data: uk, name: 'Українська' },
  uz: { data: uz, name: 'Oʻzbekcha' },
  vi: { data: vi, name: 'Tiếng Việt' },
  zh: { data: zh, name: '中文' },
  zhTW: { data: zhTW, name: '中文 (Taiwan)' },
};

const getDefaultLanguage = () => {
  const browserLanguages = window.navigator.languages ? window.navigator.languages.slice() : [];
  const browserLanguage = window.navigator.userLanguage || window.navigator.language;
  browserLanguages.push(browserLanguage);
  browserLanguages.push(browserLanguage.substring(0, 2));

  for (let i = 0; i < browserLanguages.length; i += 1) {
    let language = browserLanguages[i].replace('-', '');
    if (language in languages) {
      return language;
    }
    if (language.length > 2) {
      language = language.substring(0, 2);
      if (language in languages) {
        return language;
      }
    }
  }
  return 'en';
};

const LocalizationContext = createContext({
  languages,
  language: 'en',
  setLanguage: () => {},
});

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = usePersistedState('language', getDefaultLanguage());

  const value = useMemo(() => ({ languages, language, setLanguage }), [languages, language, setLanguage]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);

export const useTranslation = () => {
  const context = useContext(LocalizationContext);
  const { data } = context.languages[context.language];
  return useMemo(() => (key) => data[key], [data]);
};

export const useTranslationKeys = (predicate) => {
  const context = useContext(LocalizationContext);
  const { data } = context.languages[context.language];
  return Object.keys(data).filter(predicate);
};
