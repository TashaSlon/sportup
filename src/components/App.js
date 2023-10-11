import { useState, useEffect } from 'react';
import { OpenMenuPopup } from "./OpenMenuPopup";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Document from './Document';
import { TranslationContext, translations } from '../contexts/translation/translationContext';
import { getCountry } from '../utils/CountryApi';

function App() {
  const [isOpenMenuPopupOpen, setIsOpenMenuPopupOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('lang'));

  useEffect(() => {
    console.log(language);
    if (language === null) {
      checkCountry();
    }
  }, []);

  useEffect(()=> {
    console.log(language);
  }, [language]);

  function checkCountry() {
    getCountry()
    .then((res) => {
      const lang = (res.country_code2 === 'RU')||(res.country_code2 === 'BY')||(res.country_code2 === 'KZ') ? 'ru' : 'en';
      console.log(language);
      setLanguage(lang);
      localStorage.setItem('lang', lang);
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleOpenMenuClick() {
    setIsOpenMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsOpenMenuPopupOpen(false);
  }

  function handleLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  }

  return (
    <TranslationContext.Provider value={translations[language===null? 'en' : language]}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main onOpenMenu={handleOpenMenuClick} handleLanguage={handleLanguage}/>} />
          <Route path="/terms-conditions" element={<Document onOpenMenu={handleOpenMenuClick} type="terms" handleLanguage={handleLanguage}/>} />
          <Route path="/privacy-policy" element={<Document onOpenMenu={handleOpenMenuClick} type="policy" handleLanguage={handleLanguage}/>} />
          <Route path="/delete-account" element={<Document onOpenMenu={handleOpenMenuClick} type="delete-account" handleLanguage={handleLanguage}/>} />
        </Routes>
        <OpenMenuPopup isOpenPopup={isOpenMenuPopupOpen} onClose={closeAllPopups} />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
