import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import HomePage from './Components/Home/HomePage';
import BooksPage from './Components/Books/BooksPage';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
