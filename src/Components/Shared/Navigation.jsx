import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    const handleSearchInput = (e) => {
      setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText){
            history.push({pathname: `/books`, search: `?title=${searchText}`});
        }
    }


  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark shadow">
        <div>
          <h5 className="mt-1 navbar-brand text-light">
            <i className="text-light mx-2 fa-lg fas fa-book-open"></i>Book Club
          </h5>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="col-12 col-lg-6 d-flex justify-content-lg-end my-2 my-lg-0">
            <input
              value={searchText}
              onChange={handleSearchInput}
              className="border border-light rounded  mx-2"
              placeholder="Search..."
            />
            <button onClick={handleSearchSubmit}>
              <i className="fas fa-search text-light mt-1"></i>
            </button>
          </form>
          <ul className="mx-2 col-5 d-flex justify-content-end navbar-nav">
            <li className="nav-item">
              <Link className="nav-link bg-light text-dark rounded" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link">Sign In</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
