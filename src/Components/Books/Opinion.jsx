import { FaStar } from 'react-icons/fa';

const Opinion = ({ opinion }) => {
    return (
      <div className="mb-3">
        <div className="mb-1">
          <i className="mr-2 fas fa-user"></i>&nbsp; {opinion.author}
        </div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={opinion.rating}
              />
              <FaStar
                className="star"
                color={ratingValue <= opinion.rating ? "#ffc107" : "#e4e5e9"}
                size={20}
              />
            </label>
          );
        })}
        <span className="ml-1"> &nbsp;{opinion.description}</span>
        <div className="mt-1">
          <small>Opinia napisana dnia {opinion.date}</small>
        </div>
      </div>
    );
}

export default Opinion;