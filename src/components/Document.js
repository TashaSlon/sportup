import Header from './Header';
import Footer from './Footer.js';
import Terms from './Terms';
import Policy from './Policy';

export default function Document(props) {

  return (
    <>
        <Header onOpenMenu={props.onOpenMenu} type='document' doc={props.type === 'terms' ? 'Terms & Conditions' : 'Privacy-policy'} handleLanguage={props.handleLanguage}/>
        <main className="document">
          {props.type === 'terms' ? <Terms /> : <Policy />}
        </main>
        <Footer/>
    </>
  );
};