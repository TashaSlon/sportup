import Header from './Header';
import Service from './Service';
import Types from './Types';
import Subscription from './Subscription';
import Footer from './Footer.js';

export default function Main(props) {

  return (
    <>
        <Header onOpenMenu={props.onOpenMenu} onOpenLogin={props.onOpenLogin} type='main' handleLanguage={props.handleLanguage} />
        <main className="content">
          <Service />
          <Types />
          <Subscription />
        </main>
        <Footer/>
    </>
  );
};
