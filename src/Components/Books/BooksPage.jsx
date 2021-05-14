import { useState } from 'react';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import './books.css';

const BooksPage = () => {

    const [books, setBooks] = useState([
        {number: 1, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', img: "https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
        {number: 2, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', img: "https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
        {number: 3, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', img: "https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
        {number: 4, title: 'Pożegnanie z bronią', author: 'Ernest Hemingway', img: "https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
    ]);

    return (
      <div>
        <Navigation />
        <div className="col-12 mt-2">
          <div className="row m-auto">
            <div className="col-2 mr-5 mt-5 border-right">
              <div>
                <ul>
                  <h6>Nowe wydania</h6>
                  <li>
                    <a href="#">Ostatnie 90 dni</a>
                  </li>
                  <li>
                    <a href="#">Ostatnie 30 dni</a>
                  </li>
                </ul>
                <ul>
                  <h6>Kategorie</h6>
                  <li>
                    <a href="#">Beletrystyka</a>
                  </li>
                  <li>
                    <a href="#">Biografie i pamiętniki</a>
                  </li>
                  <li>
                    <a href="#">Biznes i ekonomia</a>
                  </li>
                  <li>
                    <a href="#">Romanse</a>
                  </li>
                  <li>
                    <a href="#">Obyczajowe</a>
                  </li>
                </ul>
                <ul>
                  <h6>Autor</h6>
                  <li>
                    <input type="checkbox" /> Ernest Hemingway
                  </li>
                  <li>
                    <input type="checkbox" /> J.K Rowling
                  </li>
                  <li>
                    <input type="checkbox" /> Alicja Pawlak
                  </li>
                  <li>
                    <input type="checkbox" /> Janek Kowal
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 mt-4 mb-4">
              <h3>Sprawdź najnowsze książki</h3>
              <hr />
              <div className="row">
                {books.map((book) => (
                  <div key={book.number} className="col mb-4">
                    <div className="card shadow-sm">
                      <div className="card-header">
                        <img
                          className="rounded"
                          width="100%"
                          height="250px"
                          src={book.img}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.author}</p>
                        <a className="button" href="#" role="button">
                          Sprawdź
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default BooksPage;