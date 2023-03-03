import { globals } from "../../../public/globals";

const Services = () => {
  return (
    <div className="service-area bg-relative pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center">
              <h6 className="sub-title">Наши услуги</h6>
              <h2 className="title">
                Мы предоставляем следующие услуги
                <span> для вашего бизнеса</span>
              </h2>
              <p className="description">
                Мы предоставляем широкий спектр услуг по веб-разработке и
                продвижению сайтов. Наша команда профессионалов поможет вам
                создать уникальный сайт, который будет привлекать новых клиентов
                и укреплять вашу позицию на рынке. Мы предлагаем услуги по
                SEO-оптимизации, контекстной рекламе, анализу конкурентов и
                многому другому.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {globals.services.map(({ title, description, items }, indx) => {
            return (
              <div key={indx} className="col-lg-4 col-md-6">
                <div className="single-service-inner style-3">
                  <div className="thumb">
                    <img src="img/service-icon/1.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <a href="service-details.html">{title}</a>
                    </h5>
                    <p>{description}</p>
                    <ul>
                      {items.map(({ title }, indx) => {
                        return <li key={indx}>{title}</li>;
                      })}
                    </ul>
                    <a className="read-more-text" href="service-details.html">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Services };
