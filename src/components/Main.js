import Header from './Header';
import Service from './Service';
import Types from './Types';
import Footer from './Footer.js';

export default function Main() {

  return (
    <>
        <Header />
        <main className="content">
          <Service />
          <Types />
        </main>
        <Footer/>
    </>
  );
};
