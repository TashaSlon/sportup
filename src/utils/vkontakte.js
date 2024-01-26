import * as VKID from '@vkid/sdk';
 
VKID.Config.set({
  app: 51839658, // Идентификатор приложения.
  redirectUrl: 'https://localhost', // Адрес для перехода после авторизации.
});

export const handleVKClick = () => {
    // Открытие авторизации.
    VKID.Auth.login()
};

/*import { Config, Connect, ConnectEvents } from '@vkontakte/superappkit';

Config.init({
  appId: 8165035, // Идентификатор приложения
});


export const oneTapButton = Connect.buttonOneTapAuth({
  // Обязательный параметр в который нужно добавить обработчик событий приходящих из SDK
  callback: function(e) {
      const type = e.type;
      if (!type) {
          return false;
      }
      // eslint-disable-next-line default-case
      switch (type) {
          case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS: // = 'VKSDKOneTapAuthLoginSuccess'
              console.log('LOGIN_SUCCESS',e);
              return false
          // Для этих событий нужно открыть полноценный VK ID чтобы
          // пользователь дорегистрировался или подтвердил телефон
          case ConnectEvents.OneTapAuthEventsSDK.FULL_AUTH_NEEDED: //  = 'VKSDKOneTapAuthFullAuthNeeded'
              console.log('FULL_AUTH_NEEDED',e);
              return false
          case ConnectEvents.OneTapAuthEventsSDK.PHONE_VALIDATION_NEEDED: // = 'VKSDKOneTapAuthPhoneValidationNeeded'
              console.log('PHONE_VALIDATION_NEEDED',e);
              return false
          case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN: // = 'VKSDKButtonOneTapAuthShowLogin'
              console.log('SHOW_LOGIN',e);
              return false
              //return Connect.redirectAuth({ url: 'http://localhost', state: 'local'}); // url - строка с url, на который будет произведён редирект после авторизации.
          // state - состояние вашего приложение или любая произвольная строка, которая будет добавлена к url после авторизации.
          // Пользователь перешел по кнопке "Войти другим способом"
          case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN_OPTIONS: // = 'VKSDKButtonOneTapAuthShowLoginOptions'
              // Параметр url: ссылка для перехода после авторизации. Должен иметь https схему. Обязательный параметр.
              console.log('SHOW_LOGIN_OPTIONS',e);
              return false
              //return Connect.redirectAuth({ url: 'http://localhost' });
      }

      return false;
  },
  // Не обязательный параметр с настройками отображения OneTap
  options: {
      showAlternativeLogin: true, // Отображение кнопки "Войти другим способом"
      displayMode: 'name_phone', // Режим отображения кнопки 'default' | 'name_phone' | 'phone_name'
      buttonStyles: {
          borderRadius: 10, // Радиус скругления кнопок
      }
  },
});


// Получить iframe можно с помощью метода getFrame()



// Удалить iframe можно с помощью OneTapButton.destroy();

*/