import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Navigation from "../Shared/Navigation";
import './books.css';
import Opinion from "./Opinion";
import OpinionForm from "./OpinionForm";

const BookDetails = () => {
    let { id } = useParams();
    const [book, setBook] = useState({});
    const [opinions, setOpinions] = useState([
      { bookId: "", author: "Tomasz Kowal", description: "Do dupy", date: "20 stycznia 2020", rating: 4 },
      { bookId: "", author: "Pablo Hernandez", description: "Hola", date: "19 grudnia 2020", rating: 2 },
    ]);
    const [opinion, setOpinion] = useState({
      bookId: "",
      author: "",
      description: "",
      date: "",
      rating: 1,
    });
    const [showLess, setShowMore] = useState(false);
    const showMore = () => {
      setShowMore(!showLess);
    }
    useEffect(() => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((res) => {
          const book = res.data;
          setBook(book);
        })
        .catch((err) => console.log(err));
  }, []);

    const handleRatingChange = (rating) => {
      setOpinion((prevOpinion) => ({ ...prevOpinion, ["rating"]: rating }));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setOpinions(oldOpinions => [...oldOpinions, opinion])
    }

    const changeHandler = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setOpinion((prevOpinion) => ({ ...prevOpinion, [name]: value }));
    }


    const calculateAverageRating = () => {
      let sum = 0;
      let result = 0;
      for(let i = 0; i<opinions.length; i++){
        sum += opinions[i].rating
      }

      result = sum/opinions.length;

      return Math.round(result*10)/10;
    }

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
          <div className="row mx-2 my-5">
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
                <p className={showLess ? "mt-3" : "description mt-3"}>
                  {book.volumeInfo.description
                    .toString()
                    .replace(/(<([^>]+)>)/gi, "")}
                </p>
              ) : (
                <p className="description mt-3">Brak opisu</p>
              )}
              <button className="button" onClick={showMore}>
                {showLess ? "Hide" : "Show more"}
              </button>
              <button className="button">Dodaj do ulubionych</button>
            </div>
          </div>

          <hr></hr>

          <div className="col-7 mx-5 mb-5">
            <h3 className="mb-4">Szczegóły</h3>
            <div>
              <b>Wydawca: </b>
              {book.volumeInfo && (
                <p>
                  {book.volumeInfo.publisher} ({book.volumeInfo.publishedDate})
                </p>
              )}
            </div>
            <div>
              <b>Język: </b>
              {book.volumeInfo && <p>{book.volumeInfo.language}</p>}
            </div>
            <div>
              <b>Mięka oprawa: </b>
              {book.volumeInfo && <p>{book.volumeInfo.pageCount} str.</p>}
            </div>
            <div>
              <b>Kategoria: </b>
              {book.volumeInfo && <p>{book.volumeInfo.categories}</p>}
            </div>
          </div>

          <hr></hr>

          <div className="container">
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-6">
                  <h3 className="mb-4">Opinie użytkowników</h3>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={calculateAverageRating()}
                        />
                        <FaStar
                          className="star"
                          color={
                            ratingValue <= calculateAverageRating()
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          size={20}
                        />
                      </label>
                    );
                  })}
                  <span className="ml-1">
                    &nbsp; {calculateAverageRating()}/5
                  </span>
                  <p className="mt-2">{opinions.length} opinie</p>
                  <h3 className="mt-2">Oceń książkę</h3>
                  <p className="mb-3">Podziel się swoją opinią z innymi</p>
                  <OpinionForm
                    handleRatingChange={handleRatingChange}
                    opinion={opinion}
                    handleSubmit={handleSubmit}
                    changeHandler={changeHandler}
                  />
                </div>
                <div className="col-4 mx-5">
                  <h3 className="mb-4">Ostatnie opinie</h3>
                  {opinions.map((op) => (
                    <Opinion opinion={op} />
                  ))}

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BookDetails;