
const Navigation = () => {
  return (
    <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark shadow">
                <div>
                    <h5 className="mt-1 navbar-brand text-light"><i className="text-light mr-2 fa-lg fas fa-book-open"></i>Book
                        Club</h5>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link bg-light text-dark rounded" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="border border-light rounded px-3" placeholder="Search..." />
                        <i className="fas fa-search text-light ml-2 mt-1"></i>
                    </form>
                </div>
            </nav>
        </div>
  );
};

export default Navigation;
