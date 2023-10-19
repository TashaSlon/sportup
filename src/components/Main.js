import Header from './Header';
import Service from './Service';
import Types from './Types';
import Footer from './Footer.js';

export default function Main(props) {

  return (
    <>
        <Header onOpenMenu={props.onOpenMenu} type='main' handleLanguage={props.handleLanguage}/>
        <main className="content">
          <Service />
          <Types />
        </main>
        <Footer/>
    </>
  );
};
