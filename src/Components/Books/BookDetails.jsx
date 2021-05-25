import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
    let { id } = useParams();
    return (
      <div>
        <div className="container ml-5 mt-4">
          <div className="col-12"></div>
          <Link to="/books">
            <i className="fas fa-chevron-left"></i>
            <span className="font-weight-bold ml-1">Return to books list</span>
          </Link>
        </div>
        { id }
      </div>
    );
}

export default BookDetails;