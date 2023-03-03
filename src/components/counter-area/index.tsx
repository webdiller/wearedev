const CounterArea = () => {
  return (
    <div className="counter-area bg-base pd-top-110 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-counter-inner style-2 text-center">
              <div className="thumb">
                <img src="img/icon/27.svg" alt="img" />
              </div>
              <h2 className="text-white mt-3 mb-2">
                <span className="counter">10</span>+
              </h2>
              <p className="text-white">Разработчиков</p>
            </div>
          </div>
          {/* TODO: Придумать контент */}
          <div className="col-lg-3 col-md-6">
            <div className="single-counter-inner style-2 text-center">
              <div className="thumb">
                <img src="img/icon/28.svg" alt="img" />
              </div>
              <h2 className="text-white mt-3 mb-2">
                <span className="counter">25</span>k+
              </h2>
              <p className="text-white">Winning award</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-counter-inner style-2 text-center">
              <div className="thumb">
                <img src="img/icon/29.svg" alt="img" />
              </div>
              <h2 className="text-white mt-3 mb-2">
                <span className="counter">100</span>+
              </h2>
              <p className="text-white">Выполненных проектов</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-counter-inner style-2 text-center">
              <div className="thumb">
                <img src="img/icon/30.svg" alt="img" />
              </div>
              <h2 className="text-white mt-3 mb-2">
                <span className="counter">50</span>+
              </h2>
              <p className="text-white">Отзывов от клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CounterArea };
