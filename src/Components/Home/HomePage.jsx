import Header from "./Header";
import Navigation from "../Shared/Navigation";
import Offert from './Offert';
import Gallery from './Gallery';
import Video from './Video';
import Footer from '../Shared/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Offert/>
       <Video/>
      <Gallery/>
    </div>
  );
};

export default HomePage;
