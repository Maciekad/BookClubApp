const Offert = () => {
  return (
    <div className="offert mt-5 pt-5">
      <div className="col-12">
        <div className="row">
          <figure className="figure col-12 col-lg-4 text-center">
            <img
              className="border rounded-circle shadow"
              src="https://thumbs.dreamstime.com/b/bookworm-cheerful-black-teen-girl-reading-paper-book-resting-home-smiling-to-camera-little-reader-sitting-floor-leaning-213885683.jpg"
              width="200px"
              height="200px"
            />
            <figcaption className="figure-caption text-center mt-3">
              <h4>Każdy znajdzie coś dla siebie</h4>
            </figcaption>
            <figcaption className="figure-caption text-center px-4">
              Recenzje każdej podkategorii! Lubisz kryminały, sensację, a może
              jesteś fanem science-fiction? Wszystko to znajdziesz w jednym
              miejscu - Book Club.
            </figcaption>
          </figure>
          <figure className="figure col-12 col-lg-4 text-center">
            <img
              className="border rounded-circle shadow"
              src="https://img3.stockfresh.com/files/d/dolgachov/m/64/8546825_stock-photo-student-boy-reading-book-or-textbook-at-home.jpg"
              width="200px"
              height="200px"
            />
            <figcaption className="figure-caption text-center mt-3">
              <h4>Recenzuj z nami</h4>
            </figcaption>
            <figcaption className="figure-caption text-center px-4">
              Liczy się każda opinia. Podobała Ci się książka? A może była to
              żenada? Nie krępuj się tylko pisz całą prawdę!
            </figcaption>
          </figure>
          <figure className="figure col-12 col-lg-4 text-center">
            <img
              className="border rounded-circle shadow"
              src="https://us.123rf.com/450wm/carballo/carballo1801/carballo180100374/93884160-preadolescent-child-studying-with-books-in-the-home-room.jpg?ver=6"
              width="200px"
              height="200px"
            />
            <figcaption className="figure-caption text-center mt-3">
              <h4>Dodaj do ulubionych</h4>
            </figcaption>
            <figcaption className="figure-caption text-center px-4">
              Książka jest świetna? Dodaj ją do listy ulubionych, żeby znajomi
              mogli widzieć co Ci w duszy gra!
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Offert;