import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials2 = () => {
  return (
    <div
      className="testimonial-area pd-top-120 pd-bottom-90"
      style={{ backgroundImage: "url('img/bg/11.png')" }}
    >
      <div className="container">
        <div className="section-title">
          <h6 className="sub-title">TESTIMONIAL</h6>
          <h2 className="title">Advanced Engine Services</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 2000,
          }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="item">
              <div className="single-testimonial-inner style-1 text-center">
                <h5>Devon Lane</h5>
                <p className="designation mb-3">Marketing Coordinator</p>
                <div className="icon mb-2">
                  <img src="img/icon/25.png" alt="img" />
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC
                </p>
                <div className="ratting-inner mt-4">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="thumb">
                  <img src="img/testimonial/1.png" alt="img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="single-testimonial-inner style-1 text-center">
                <h5>Devon Lane</h5>
                <p className="designation mb-3">Marketing Coordinator</p>
                <div className="icon mb-2">
                  <img src="img/icon/25.png" alt="img" />
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC
                </p>
                <div className="ratting-inner mt-4">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="thumb">
                  <img src="img/testimonial/2.png" alt="img" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="single-testimonial-inner style-1 text-center">
                <h5>Devon Lane</h5>
                <p className="designation mb-3">Marketing Coordinator</p>
                <div className="icon mb-2">
                  <img src="img/icon/25.png" alt="img" />
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC
                </p>
                <div className="ratting-inner mt-4">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="thumb">
                  <img src="img/testimonial/3.png" alt="img" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="single-testimonial-inner style-1 text-center">
                <h5>Devon Lane</h5>
                <p className="designation mb-3">Marketing Coordinator</p>
                <div className="icon mb-2">
                  <img src="img/icon/25.png" alt="img" />
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC
                </p>
                <div className="ratting-inner mt-4">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="thumb">
                  <img src="img/testimonial/1.png" alt="img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export { Testimonials2 };
