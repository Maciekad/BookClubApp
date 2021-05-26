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
        <div style={{ margin: "30px" }}>
          <div className="col-12 mx-4 my-4">
            <Link
              to="/books"
              style={{ textDecoration: "none", color: "#343c46" }}
            >
              <i className="fas fa-chevron-left"></i>
              <span className="font-weight-bold ml-1">
                &nbsp;Return to books list
              </span>
            </Link>
          </div>
          <div className="row mx-2 my-4">
            <div className="col-2 mx-3">
              {book.volumeInfo && book.volumeInfo.imageLinks ? (
                <img
                  className="shadow rounded"
                  width="230px"
                  height="350px"
                  src={book.volumeInfo.imageLinks.thumbnail}
                />
              ) : (
                <img
                  className="rounded"
                  width="230px"
                  height="350px"
                  src="https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"
                />
              )}
            </div>
            <div className="col-8 mx-5">
              {book.volumeInfo && <h3>{book.volumeInfo.title}</h3>}
              {book.volumeInfo && <h6>{book.volumeInfo.authors}</h6>}
              {book.volumeInfo && book.volumeInfo.description ? (
                <p className="description mt-3">
                  {book.volumeInfo.description
                    .toString()
                    .replace(/(<([^>]+)>)/gi, "")}
                </p>
              ) : (
                <p className="description mt-3">Brak opisu</p>
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

          <hr></hr>

          <div className="col-7 mx-5">
            <h3 className="mb-4">Szczegóły</h3>
            <p>
              <b>Wydawca: </b>
              {book.volumeInfo && (
                <p>
                  {book.volumeInfo.publisher} ({book.volumeInfo.publishedDate})
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
    );
}

export default BookDetails;