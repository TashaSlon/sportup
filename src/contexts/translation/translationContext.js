import { createContext } from 'react';
import { textRu } from './ru';
import { textEn } from './en';

export const TranslationContext = createContext();

export const translations = {
  en: textEn,
  ru: textRu,
}; 