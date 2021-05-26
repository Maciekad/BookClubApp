import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Navigation from "../Shared/Navigation";
import './books.css';

const BookDetails = () => {
    let { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
          .then((res) => {
            const book = res.data;
            console.log(book);
            setBook(book);
          })
          .catch((err) => console.log(err));
    }, []);


    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <Link
                to="/books"
                style={{ textDecoration: "none", color: "#343c46" }}
              >
                <i className="fas fa-chevron-left"></i>
                <span className="font-weight-bold ml-1">
                  Return to books list
                </span>
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              {book.volumeInfo && book.volumeInfo.thumbnail ? (
                <img
                  className="shadow rounded"
                  width="100%"
                  height="350px"
                  src={book.volumeInfo.imageLinks.thumbnail}
                />
              ) : (
                <img
                  className="rounded"
                  width="100%"
                  height="350px"
                  src="https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"
                />
              )}
            </div>
            <div className="col-9">
              {book.volumeInfo && <h3>{book.volumeInfo.title}</h3>}
              {book.volumeInfo && <h6>{book.volumeInfo.authors}</h6>}
              {book.volumeInfo && (
                <p className="description mt-3">
                  {book.volumeInfo.description}
                </p>
              )}
              <a
                className="button"
                href="../BookDetailsPage/bookDetails.html"
                role="button"
              >
                Dodaj do ulubionych
              </a>
            </div>
          </div>
          {id}
          <hr></hr>
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Szczegóły</h3>
              <p>
                <b>Wydawca: </b>
                {book.volumeInfo && (
                  <p>
                    {book.volumeInfo.publisher} ({book.volumeInfo.publishedDate}
                    )
                  </p>
                )}
              </p>
              <p>
                <b>Język: </b>
                {book.volumeInfo && <p>{book.volumeInfo.language}</p>}
              </p>
              <p>
                <b>Mięka oprawa: </b>
                {book.volumeInfo && <p>{book.volumeInfo.pageCount} str.</p>}
              </p>
              <p>
                <b>Kategoria: </b>
                {book.volumeInfo && <p>{book.volumeInfo.categories}</p>}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BookDetails;