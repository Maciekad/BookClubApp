import Header from "./HomePage/Header";
import Navigation from "./Shared/Navigation";
import Offert from './HomePage/Offert';
import Gallery from './HomePage/Gallery';
import Video from './HomePage/Video';
import Footer from './Shared/Footer';

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
