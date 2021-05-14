import Header from "./Header";
import Navigation from "./Navigation";
import Offert from './Offert';
import Gallery from './Gallery';
import Video from './Video';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Offert/>
       <Video/>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default HomePage;
