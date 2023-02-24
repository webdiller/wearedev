import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <div className="about-area bg-gradient-gray pd-top-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow animated fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="about-thumb-inner mb-4 mb-lg-0">
              <img className="main-img" src="img/about/11.png" alt="img" />
            </div>
          </div>
          <div
            className="col-lg-6 wow animated fadeInRight"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="section-title mb-0">
              <h6 className="sub-title">ABOUT US</h6>
              <h2 className="title">
                Advancing <span>Beyond</span> Your Expectations
              </h2>
              <p className="content mb-4">
                You can access SaaS applications through a web browser or mobile
                app, as long as you have an internet connection.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="single-list-inner style-check style-heading style-check mb-3">
                    <li>
                      <i className="fas fa-check-circle"></i> Mistakes To Avoid
                      to the dum
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Your Startup
                      industry stan
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="single-list-inner style-check style-heading style-check mb-3">
                    <li>
                      <i className="fas fa-check-circle"></i> Mistakes To Avoid
                      to the dum
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Your Startup
                      industry stan
                    </li>
                  </ul>
                </div>
              </div>
              <p className="content">
                SaaS providers typically invest heavily in security measures to
                protect customer data, such as encryption and multi-factor
                authentication. However, it is important to research and choose
                a reputable provider and also to ensure that
              </p>
              <a className="btn btn-border-base" href="about.html">
                Discover More <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-base client-border-radius p-xl-5 p-3 mt-5">
          <div className="client-slide">
            <Swiper
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000
              }}
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/1.svg" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/2.svg" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/3.svg" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/4.svg" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/5.svg" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <img src="img/client/6.svg" alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
