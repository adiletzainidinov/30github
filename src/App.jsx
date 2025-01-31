import Header from './components/header/Header.jsx';
import AboutUmra from './components/about-umra/AboutUmra.jsx';
import Home from './components/home/Home.jsx';
import Price from './components/price/Price.jsx';
import VideoUmra from './components/video-umra/VideoUmra.jsx';
import Contackts from './components/contackts/Contackts.jsx';
import Documents from './components/documents/Documents.jsx';
import Hadis from './components/hadis/Hadis.jsx';
import Questions from './components/questions/Questions.jsx';
import Review from './components/review/Review.jsx';
import QuiteWithPost from './components/quite-with-post/QuiteWithPost.jsx';
import FooterContacts from './components/footer-contacts/FooterContacts.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutUmra />
      <VideoUmra />
      <Price />
      <Contackts />
      <Documents />
      <Hadis />
      <Questions />
      <Review />
      {/* <ReveivWidthVideo/> */}
      <QuiteWithPost />
      <FooterContacts/>
      <Footer/>
    </>
  );
};

export default App;
