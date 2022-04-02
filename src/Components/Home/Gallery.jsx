
const Gallery = () => {
    return(
        <div className="gallery mt-5 position-relative mb-5 pb-5">
            <h3 className="text-center text-dark">Zdjęcia naszych czytelników</h3>
            <h5 className="text-center text-secondary mb-5">Pokaż nam jak czytasz</h5>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="https://thumbs.dreamstime.com/b/bookworm-cheerful-black-teen-girl-reading-paper-book-resting-home-smiling-to-camera-little-reader-sitting-floor-leaning-213885683.jpg"
                            alt="First slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="https://img3.stockfresh.com/files/d/dolgachov/m/64/8546825_stock-photo-student-boy-reading-book-or-textbook-at-home.jpg"
                             alt="First slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-1" src="https://us.123rf.com/450wm/carballo/carballo1801/carballo180100374/93884160-preadolescent-child-studying-with-books-in-the-home-room.jpg?ver=6"
                             alt="First slide"/>
                    </div>
                    <div className="carousel-item col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://thelanguagenerds.com/wp-content/uploads/2019/11/20582720811_556f21da0b_b.jpg" alt="Second slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oZijg2eX-nlp3xZIrCnPizG6PZhkhYpMpw&usqp=CAU" alt="Second slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://miro.medium.com/max/12480/0*X4XNCWsvTqW2D_kA" alt="Second slide"/>
                    </div>
                    <div className="carousel-item col-12 text-center">
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://us.123rf.com/450wm/carballo/carballo1801/carballo180100374/93884160-preadolescent-child-studying-with-books-in-the-home-room.jpg?ver=6" alt="Third slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://img3.stockfresh.com/files/d/dolgachov/m/64/8546825_stock-photo-student-boy-reading-book-or-textbook-at-home.jpg" alt="Third slide"/>
                        <img className="border rounded d-inline col-4 col-lg-3 p-2" src="https://thumbs.dreamstime.com/b/bookworm-cheerful-black-teen-girl-reading-paper-book-resting-home-smiling-to-camera-little-reader-sitting-floor-leaning-213885683.jpg" alt="Third slide"/>
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