import { globals } from "../../../public/globals";

const ServiceArea = () => {
  return (
    <div className="service-area bg-relative pd-top-120">
      <div className="container">
        <div className="row">
          {globals.services.map(({ title, description, items }, indx) => {
            return (
              <div key={indx} className="col-lg-4 col-md-6">
                <div className="single-service-inner text-center">
                  <div className="thumb">
                    <img src="img/service-icon/1.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <a href="service-details.html">{title}</a>
                    </h5>
                    <p>{description}</p>
                    <a
                      className="btn btn-border-base"
                      href="service-details.html"
                    >
                      Touch More
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

export { ServiceArea };
