import { createContext } from 'react';
import { textRu } from './ru';
import { textEn } from './en';

export const translations = {
  en: textEn,
  ru: textRu,
};

export const TranslationContext = createContext(translations.en); 