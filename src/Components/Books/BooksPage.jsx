import { useEffect, useState, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Book from './Book';
import './books.css';

const PER_PAGE = 12;
const apiKey = "AIzaSyDnHPh0GQWRkyWnMr2CeJI1ZV5M1xcGNNQ";

const BooksPage = () => {
    const location = useLocation();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([])
    const [categories, setCategories] = useState(
      ["Biographies", "Business", "Computer & Tech", "Cooking", "Entertainment", "Health & Fitness", "History", "Fiction", "Sports", "Travel"]
      );
    
    const [currentPage, setCurrentPage] = useState(0);

    const [authors, setAuthors] = useState(
      ["Olga Tokarczuk","Ernest Hemingway", "J.K Rowling", "Blanka Lipińska"]
    )

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(data.length / PER_PAGE);

    useEffect(() => {
      fetchData();
    }, [currentPage, location.search]);

    const fetchData = () => {

      const search = location.search;
      const params = new URLSearchParams(search);
      let title = params.get('title');
      let category = params.get('category');
      let author = params.get('author');

      let url = "https://www.googleapis.com/books/v1/volumes?q=javascript&orderBy=newest&key="+apiKey+"&maxResults=40";

      if(title){
          url = "https://www.googleapis.com/books/v1/volumes?q="+title+"&orderBy=newest&key="+apiKey+"&maxResults=40";
      }else if(author){
        url = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"+author+"&orderBy=newest&key="+apiKey+"&maxResults=40";
      }else if(category){
        url = "https://www.googleapis.com/books/v1/volumes?q=subject:"+category+"&orderBy=newest&key="+apiKey+"&maxResults=40";
      }

      axios.get(url)
      .then(data => {
        const books = data.data.items;
        const currentData = books.slice(offset, offset+PER_PAGE).map((book) => (
          <Book book={book} />
        ));

        setData(books)
        setDisplayedData(currentData)
      })

    }

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      window.scrollTo(0, 0);
      setCurrentPage(selectedPage);
  };

    return (
      <div>
        <Navigation/>
        <div className="col-12 mt-2">
          <div className="row m-auto">
            <div className="col-2 mt-5">
              <div>
                <ul>
                  <h6>Kategorie</h6>
                  {categories.map((category) => (
                    <li>
                      <button onClick={() => {
                        history.push({pathname: `/books`,search: `?category=${category}`});
                        setCurrentPage(0);
                        }}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                <ul>
                  <h6>Autor</h6>
                  {authors.map((author) => (
                    <li>
                      <button onClick={() =>{ 
                        history.push({search: `?author=${author}`});
                        setCurrentPage(0);
                        }}>
                        {author}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-9 mt-4 mb-4">
              <h3>Sprawdź najnowsze książki</h3>
              <hr />
              <div className="row">
                {displayedData}
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  forcePage={currentPage}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default BooksPage;