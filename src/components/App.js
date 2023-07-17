import { useState } from 'react';
import { OpenMenuPopup } from "./OpenMenuPopup";
import React from 'react';
import Main from './Main';

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
      <Main onOpenMenu={handleOpenMenuClick}/>
      <OpenMenuPopup isOpen={isOpenMenuPopupOpen} onClose={closeAllPopups} />
    </div>

  );
}

export default App;
