import { useState, useEffect } from 'react';
import { OpenMenuPopup } from "./OpenMenuPopup";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Document from './Document';
import { textRu } from '../translation/ru';
import { textEn } from '../translation/en';
import { getCountry } from '../utils/CountryApi';

function App() {
  const [isOpenMenuPopupOpen, setIsOpenMenuPopupOpen] = useState(false);
  const [language, setLanguage] = useState('none');

  useEffect(() => {
    const text = localStorage.getItem('text');
    if ((language === 'none') && (text === null)) {
      checkCountry();
    }
  }, []);

  function checkCountry() {
    getCountry()
    .then((res) => {
      setLanguage(res.country_code2);
      const text = (res.country_code2 === 'RU')||(res.country_code2 === 'BY')||(res.country_code2 === 'KZ') ? textRu : textEn;
      localStorage.setItem('text', JSON.stringify(text));
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
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main onOpenMenu={handleOpenMenuClick} handleLanguage={handleLanguage}/>} />
        <Route path="/terms-conditions" element={<Document onOpenMenu={handleOpenMenuClick} type="terms" handleLanguage={handleLanguage}/>} />
        <Route path="/privacy-policy" element={<Document onOpenMenu={handleOpenMenuClick} type="policy" handleLanguage={handleLanguage}/>} />
        <Route path="/delete-account" element={<Document onOpenMenu={handleOpenMenuClick} type="delete-account" handleLanguage={handleLanguage}/>} />
      </Routes>
      <OpenMenuPopup isOpen={isOpenMenuPopupOpen} onClose={closeAllPopups} />
    </div>

  );
}

export default App;
