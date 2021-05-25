const SearchForm = () => {

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    const handleSearchInput = (e) => {
      setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText){
            history.push({pathname: `/books`, search: `?title=${searchText}`});          
        }
    }


  return (
    <form className="col-12 col-lg-6 d-flex justify-content-lg-end my-2 my-lg-0">
      <input
        value={searchText}
        onChange={handleSearchInput}
        className="border border-light rounded  mx-2"
        placeholder="Search..."
      />
      <button onClick={handleSearchSubmit}>
        <i className="fas fa-search text-light mt-1"></i>
      </button>
    </form>
  );
};

export default SearchForm;
