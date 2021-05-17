

const Book = ({ book }) => {
    return(
    <div key={book.number} className="col-12 col-md-6 col-lg-3 d-flex justify-content-end justify-content-lg-start mb-4">
      <div className="card shadow-sm" style={{ width: "15rem" }}>
        <div className="card-header">
          <img className="rounded" width="100%" height="250px" src={book.img} />
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
    )
}

export default Book;