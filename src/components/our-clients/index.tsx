import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurClients = () => {
  return (
    <div className="about-area bg-gray pt-5 pb-5">
      <div className="container">
        <div className="client-slider">
          <Swiper
            modules={[Autoplay]}
            speed={1000}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/7.svg" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/8.svg" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/9.svg" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/11.svg" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/8.svg" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumb">
                <img src="img/client/9.svg" alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
