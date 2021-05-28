const Offert = () => {
  return (
    <div className="offert mt-5 pt-5">
      <div className="col-12">
        <div className="row">
          <figure className="figure col-12 col-lg-4 text-center">
            <img
              className="border rounded-circle shadow"
              src="images/Roznorodnosc.png"
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
              src="images/pisanie.png"
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
              src="images/ulubione.png"
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