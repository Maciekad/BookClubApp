const Footer = () => {
  return (
    <div className="position-relative footer col-12">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="col-3 mt-5">
            <p>
              <a href="index.html" className="text-light">
                Home
              </a>
            </p>
            <p>Books</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Contact Us</p>
          </div>
          <div class="col-3 mt-5">
            <p>Blog</p>
            <p>Search</p>
            <p>T & Cs</p>
            <p>Privacy</p>
            <p>Community</p>
          </div>
        </div>
        <div className="col-5 offset-1 mt-5">
          <p>Get our newsletter</p>
          <input
            className="p-1 border rounded"
            type="text"
            placeholder="Enter your email"
          />
          <button className="btn btn-light p-1 mb-1">Subscribe</button>
          <div className="row pt-4">
            <i className="px-3 fab fa-facebook-square"></i>
            <i className="pr-3 fab fa-instagram"></i>
            <i className="pr-3 fab fa-twitter"></i>
            <i className="pr-3 fab fa-snapchat-ghost"></i>
            <i className="pr-3 fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;