import { useState } from 'react';
import { OpenMenuPopup } from "./OpenMenuPopup";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Document from './Document';


function App() {
  const [isOpenMenuPopupOpen, setIsOpenMenuPopupOpen] = useState(false);

  function handleOpenMenuClick() {
    setIsOpenMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsOpenMenuPopupOpen(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main onOpenMenu={handleOpenMenuClick}/>} />
        <Route path="/terms-conditions" element={<Document onOpenMenu={handleOpenMenuClick} type="terms"/>} />
        <Route path="/privacy-policy" element={<Document onOpenMenu={handleOpenMenuClick} type="policy"/>} />
      </Routes>
      <OpenMenuPopup isOpen={isOpenMenuPopupOpen} onClose={closeAllPopups} />
    </div>

  );
}

export default App;
