
const Gallery = () => {
    return(
        <div className="gallery mt-5 position-relative mb-5 pb-5">
            <h3 className="text-center text-dark">Zdjęcia naszych czytelników</h3>
            <h5 className="text-center text-secondary mb-5">Pokaż nam jak czytasz</h5>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="images/6.jpg"
                            alt="First slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="images/7.jpg"
                             alt="First slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="images/8.jpg"
                             alt="First slide"/>
                    </div>
                    <div className="carousel-item col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/1.jpg" alt="Second slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/2.jpg" alt="Second slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/3.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/4.jpg" alt="Third slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/5.jpg" alt="Third slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="images/6.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="bg-secondary p-3 border rounded carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="bg-secondary p-3 border rounded carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

export default Gallery;