import { useState } from 'react';
import './books.css';

const BooksPage = () => {

    const [books, setBooks] = useState([
        {title: '', author: ''},
        {title: '', author: ''}
    ]);

    return (
      <div class="col-12 mt-2">
        <div class="row">
          <div class="col-2 mr-5 mt-5 border-right">
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
          <div class="col-9 mt-4 mb-4">
            <h3>Sprawdź najnowsze książki</h3>
            <hr />
            <div class="row">
              {books.map((book) => (
                <div class="col mb-4">
                  <div class="card shadow-sm">
                    <div class="card-header">
                      <img
                        class="rounded"
                        width="100%"
                        height="250px"
                        src="https://images.unsplash.com/photo-1619060303466-f59b9e35e2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Pożeganie z bronią</h5>
                      <p class="card-text">Ernest Hemingway</p>
                      <a class="button" href="#" role="button">
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
    );
}

export default BooksPage;