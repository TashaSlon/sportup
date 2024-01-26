import { useState, useEffect, useRef } from 'react';
import { OpenMenuPopup } from "./OpenMenuPopup.js";
import LoginPopup from "./LoginPopup.js";
import VKPopup from "./VKPopup.js";
import { Route, Routes, Navigate, useNavigate  } from 'react-router-dom';
import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Main from './Main.js';
import Document from './Document.js';
import Profile from './Profile.js';
import { TranslationContext, translations } from '../contexts/translation/translationContext.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { getCountry } from '../utils/CountryApi.js';
import { api } from '../utils/Api.js';
import { logout } from '../utils/auth.js';
import ProtectedRouteElement from './ProtectedRoute.js';
import { authorize } from '../utils/firebase.js';

import { checkUser } from '../utils/madlemon.js';

function App() {
  const [isOpenMenuPopupOpen, setIsOpenMenuPopupOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenVKPopup, setIsOpenVKPopup] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('lang'));
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const navigate = useNavigate();

  function tokenCheck() {
    if (window.location.search) {
      const authVK = JSON.parse(decodeURIComponent(window.location.search).substring(9));
      setCurrentUser({
        token: authVK.token,
        name: authVK.user.first_name + ' ' + authVK.user.last_name,
        photo: authVK.user.avatar
      });
      setLoggedIn(true);
      closeAllPopups();
    }
    
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          token: user.accessToken,
          name: user.displayName,
          photo: user.photoURL
        });
        setLoggedIn(true);
        closeAllPopups();
        console.log(user);
      } else {
        setCurrentUser({});
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    tokenCheck();
    if (loggedIn){
      console.log(currentUser);
      /* api.getUserInfo()
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err => console.log(`Ошибка.....: ${err}`)) */
    }},[loggedIn]); 

  useEffect(() => {
    if (language === null) {
      checkCountry();
    }
  }, []);

  function checkCountry() {
    getCountry()
    .then((res) => {
      const lang = (res.country_code2 === 'RU')||(res.country_code2 === 'BY')||(res.country_code2 === 'KZ') ? 'ru' : 'en';
      setLanguage(lang);
      localStorage.setItem('lang', lang);
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleOpenMenuPopup() {
    setIsOpenMenuPopupOpen(true);
  }

  function handleOpenLoginPopup() {
    setIsOpenPopup(true);
}

  function closeAllPopups() {
    setIsOpenMenuPopupOpen(false);
    setIsOpenPopup(false);
    setIsOpenVKPopup(false);
  }

  function handleLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  }

  function handleLoginGoogle() {
    authorize()
      .then((data) => {
          console.log(data);
          setLoggedIn(true);
          navigate('/', {replace: true});
      })
      .catch(err => {
        setStatus(false);
        handleInfoTooltipClick(err);
      });
  }

  function handleLoginVK() {
    setIsOpenPopup(false);
    setIsOpenVKPopup(true);
  };

  function signOut(){
    logout()
    .then((res) => {
      setLoggedIn(false);
      navigate('/sign-in', {replace: true});
    })
    .catch(err => {
      setStatus(false);
      handleInfoTooltipClick(err);
    });
  }

  function handleInfoTooltipClick(res) {
    if(res.data) {
      setStatus(true);
    }
    setIsInfoTooltipOpen(true);
  };

  return (
    <TranslationContext.Provider value={language === null ? translations.en : translations[language]}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main onOpenMenu={handleOpenMenuPopup} onOpenLogin={handleOpenLoginPopup} handleLanguage={handleLanguage} />} />
            <Route path="/terms-conditions" element={<Document onOpenMenu={handleOpenMenuPopup} type="terms" handleLanguage={handleLanguage}/>} />
            <Route path="/privacy-policy" element={<Document onOpenMenu={handleOpenMenuPopup} type="policy" handleLanguage={handleLanguage}/>} />
            <Route path="/delete-account" element={<Document onOpenMenu={handleOpenMenuPopup} type="delete-account" handleLanguage={handleLanguage}/>} />
            <Route path="/" element={<ProtectedRouteElement element={Profile} />} />
          </Routes>
          <OpenMenuPopup isOpenPopup={isOpenMenuPopupOpen} onClose={closeAllPopups} />
          <LoginPopup isOpenPopup={isOpenPopup} onClose={closeAllPopups} handleLoginGoogle={handleLoginGoogle} handleLoginVK={handleLoginVK} />
          <VKPopup isOpenPopup={isOpenVKPopup} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </TranslationContext.Provider>
  );
}

export default App;
