import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import HomePage from './Components/Home/HomePage';
import BooksPage from './Components/Books/BooksPage';
import BookDetails from "./Components/Books/BookDetails";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/:id" children={<BookDetails/>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
