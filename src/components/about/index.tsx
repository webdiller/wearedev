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
              <h6 className="sub-title">О нас</h6>
              <h2 className="title">
                Продвижение <span>за пределы</span> ваших ожиданий
              </h2>
              <p className="content mb-2">
                Мы - ваша цифровая агентство, которая разрабатывает веб-сайты и
                веб-приложения, помогая нашим клиентам расти и развиваться в
                онлайн-мире.
              </p>
              <p className="content mb-2">
                Наша команда состоит из экспертов в области дизайна, разработки
                и маркетинга, которые готовы помочь вам создать уникальный
                веб-сайт, отражающий вашу компанию и ее ценности.
              </p>
              <p className="content mb-2">
                Наш подход к работе базируется на индивидуальном подходе к
                каждому клиенту. Мы внимательно слушаем ваши потребности и на
                основе этого разрабатываем стратегию, которая наилучшим образом
                соответствует вашим целям.
              </p>
              <p className="content mb-2">
                Мы гордимся своей работой и уверены в том, что наш опыт и знания
                помогут вам достичь успеха в онлайн-мире.
              </p>
              <p className="content mb-2">
                Если вы хотите связаться с нами, нажмите кнопку &quot;Связаться с
                нами&quot; или отправьте нам сообщение через форму обратной связи на
                нашем сайте. Мы будем рады помочь вам в любых вопросах,
                связанных с веб-разработкой.
              </p>
              <a className="btn btn-border-base" href="about.html">
                Начать работать с нами
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
                delay: 2000,
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
