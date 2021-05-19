import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Book from './Book';
import './books.css';

const PER_PAGE = 10;

const BooksPage = () => {

    const [books, setBooks] = useState([
        {number: 1, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', category: "Obyczajowe", img: "https://cdn-lubimyczytac.pl/upload/books/50000/50776/352x500.jpg"},
        {number: 2, title: 'Harry Potter i Więznień Azkabanu', author: 'J.K Rowling', category: "Fantastyka",  img: "https://kbimages1-a.akamaihd.net/82b4eff1-fbcf-44ed-952c-1c9e21198d10/1200/1200/False/harry-potter-i-wiezien-azkabanu.jpg"},
        {number: 3, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', category: "Obyczajowe",  img: "https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
        {number: 4, title: 'Andrzej Duda', author: 'Janek Kowal', category: "Biografie", img: "https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"},
    ]);
    const [data, setData] = useState([]);
    const [displayedData, setDisplayedData] = useState([])
    const [categories, setCategories] = useState(
      ["Beletrystyka", "Biografie i pamiętniki", "Biznes i ekonomia", "Fantastyka", "Romanse", "Obyczajowe"]
      );
    
    const [filter, setFilter] = useState({
      currentPage: 0,
      category: "",
      author: ""
    });


    const [authors, setAuthors] = useState(
      ["Alicja Pawlak","Ernest Hemingway", "J.K Rowling", "Janek Kowal"]
    )

    const offset = filter.currentPage * PER_PAGE;
    const pageCount = Math.ceil(data.length / PER_PAGE);

    useEffect(() => {
      fetchData();
    }, [filter]);

    const fetchData = () => {
      currentPageData();
    }

    const currentPageData = () => {

      let filteredData = [...books]

      if (categories.includes(filter.category)) {      
        filteredData = books.filter((book) => book.category === filter.category)
      } else if (authors.includes(filter.author)) {
        filteredData = books.filter((book) => book.author === filter.author);
      }
 
      const currentData = filteredData.slice(offset, offset+PER_PAGE).map((book) => (
        <Book book={book} />
      ));

      
      setData(filteredData);
      setDisplayedData(currentData);
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