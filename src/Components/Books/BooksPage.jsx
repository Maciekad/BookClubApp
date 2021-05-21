import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Book from './Book';
import './books.css';

const PER_PAGE = 12;
const apiKey = "AIzaSyDnHPh0GQWRkyWnMr2CeJI1ZV5M1xcGNNQ";

const BooksPage = () => {

    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([])
    const [categories, setCategories] = useState(
      ["Biographies", "Business", "Computer & Tech", "Cooking", "Entertainment", "Health & Fitness", "History", "Fiction", "Sports", "Travel"]
      );
    
    const [filter, setFilter] = useState({
      currentPage: 0,
      category: "",
      author: ""
    });


    const [authors, setAuthors] = useState(
      ["Olga Tokarczuk","Ernest Hemingway", "J.K Rowling", "Blanka Lipińska"]
    )

    const offset = filter.currentPage * PER_PAGE;
    const pageCount = Math.ceil(data.length / PER_PAGE);

    useEffect(() => {
      fetchData();
    }, [filter]);

    const fetchData = () => {

      let url = "https://www.googleapis.com/books/v1/volumes?q=javascript&orderBy=newest&key="+apiKey+"&maxResults=40";

      if(filter.author !== ""){
        url = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"+filter.author+"&orderBy=newest&key="+apiKey+"&maxResults=40";
      }else if(filter.category !== ""){
        url = "https://www.googleapis.com/books/v1/volumes?q=subject:"+filter.category+"&orderBy=newest&key="+apiKey+"&maxResults=40";
      }

      axios.get(url)
      .then(data => {
        const books = data.data.items.filter(item => item.language !== "pl");
        const currentData = books.slice(offset, offset+PER_PAGE).map((book) => (
          <Book book={book} />
        ));
        console.log(currentData)
        setData(books)
        setDisplayedData(currentData)
      })

    }

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setFilter({currentPage: selectedPage, category: filter.category, author: filter.author})
  };

    return (
      <div>
        <Navigation />
        <div className="col-12 mt-2">
          <div className="row m-auto">
            <div className="col-2 mt-5">
              <div>
                <ul>
                  <h6>Nowe wydania</h6>
                  <li>
                    <button>Ostatnie 90 dni</button>
                  </li>
                  <li>
                    <button>Ostatnie 30 dni</button>
                  </li>
                </ul>
                <ul>
                  <h6>Kategorie</h6>
                  {categories.map((category) => (
                    <li>
                      <button onClick={() => setFilter({currentPage: 0, category: category,  author: ""})}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                <ul>
                  <h6>Autor</h6>
                  {authors.map((author) => (
                    <li>
                      <button onClick={() => setFilter({currentPage: 0, category: "",  author: author})}>
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