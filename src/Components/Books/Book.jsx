import { useHistory } from "react-router";


const Book = ({ book }) => {
  const history = useHistory();
  console.log(book)
    return(
    <div key={book.id} className="col-12 col-md-6 col-lg-3 d-flex justify-content-end justify-content-lg-start mb-4">
      <div className="card shadow-sm" style={{ width: "13rem"}}>
        <div className="card-header">
          {book.volumeInfo.imageLinks ?  <img className="rounded" width="100%" height="250px" src={book.volumeInfo.imageLinks.thumbnail} /> : 
          <img className="rounded" width="100%" height="250px" src="https://capitalbook.com.pl/environment/cache/images/500_500_productGfx_4056/Jerzy-Robert-Nowak-Andrzej-Duda-biografia-prawdziwa_842_1200.jpg"/>}
          
        </div>
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{book.volumeInfo.authors}</p>
          <button className="button" onClick={() => {
            history.push({pathname: `/${book.volumeInfo.title}`});
          }}>
            Sprawdź
          </button>
        </div>
      </div>
    </div>
    )
}

export default Book;