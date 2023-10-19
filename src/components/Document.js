import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';
import Header from './Header';
import Footer from './Footer.js';
import Terms from './Terms';
import Policy from './Policy';
import Delete from './Delete';

export default function Document(props) {
  const text = useContext(TranslationContext);

  function chooseDocument (type) {
    switch(type) {
      case 'terms':
        return {
          name: 'Terms & Conditions',
          doc: <Terms />
        };
      case 'policy':
        return {
          name: 'Privacy-policy',
          doc: <Policy />
        };
      case 'delete-account':
        return {
          name: text.deleteTitle,
          doc: <Delete />
        };
      default:
        return {
          name: 'Terms & Conditions',
          doc: <Terms />
        };
    }
  }
  

  return (
    <>
        <Header onOpenMenu={props.onOpenMenu} type='document' doc={chooseDocument(props.type).name} handleLanguage={props.handleLanguage}/>
        <main className="document">
          {chooseDocument(props.type).doc}
        </main>
        <Footer/>
    </>
  );
};