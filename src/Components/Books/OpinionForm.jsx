import StarRating from "./StarRating";

const OpinionForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-3">
        <StarRating rating={props.opinion.rating} handleRatingChange={props.handleRatingChange}/>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="nameInput"
          name="author"
          placeholder="Your name"
          value={props.opinion.author}
          onChange={props.changeHandler}
        />
      </div>
      <div className="form-group mt-2">
        <textarea
          className="form-control"
          id="commentTextArea"
          name="description"
          rows="4"
          placeholder="Add a comment"
          value={props.opinion.description}
          onChange={props.changeHandler}
        ></textarea>
      </div>
      <button type="submit" className="button mt-3">
        Zatwierdź
      </button>
    </form>
  );
}

export default OpinionForm;