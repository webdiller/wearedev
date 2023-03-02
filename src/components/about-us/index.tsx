const AboutUs = () => {
  return (
    <>
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-thumb-inner pe-xl-5 me-xl-5">
                <img
                  className="animate-img-1 top_image_bounce"
                  src="img/about/2.png"
                  alt="img"
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="img/banner/5.svg"
                  alt="img"
                />
                <img className="main-img" src="img/about/1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  IT is a critical component of <span>modern</span> businesses
                </h2>
                <p className="content mb-4 mb-xl-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Loreaim Ipsum has been the
                  industry&apos;s standard dummy
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Ambition</h5>
                        <p>
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Ambition</h5>
                        <p>
                          Lorem is Ipsum is simply is design iomyi is text Lorem
                          Ipsum is simply is our busi designer is our country.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="faq-area faq-area-margin-top bg-cover pd-top-120 pd-bottom-110"
        style={{ backgroundImage: "url('img/bg/3.png')" }}
      >
        <div className="container">
          <div className="row pd-top-120">
            <div className="col-lg-5 order-lg-last">
              <div className="about-thumb-inner pt-lg-3">
                <img className="main-img" src="img/about/4.png" alt="img" />
                <img
                  className="animate-img-bottom-right top_image_bounce"
                  src="img/about/5.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">SOME FAQ&apos;S</h6>
                <h2 className="title">
                  Creating <span>digital</span> masterpieces
                </h2>
                <p className="content">
                  It is a long established fact that a reader will be distr
                  acted bioiiy the end gail designa readable content of a page
                  when looking.
                </p>
              </div>
              <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      &apos;lorem ipsum&apos; will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How long does it take for you to complete a project?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      &apos;lorem ipsum&apos; will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How much does it cost to work with your agency?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      &apos;lorem ipsum&apos; will uncover
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-area bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">MEET OUR EXPERTS</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="img/team/1.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <a href="case-study-details.html">Devon Lane</a>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="img/team/2.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <a href="case-study-details.html">Darrell Steward</a>
                  </h5>
                  <p>It Department</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="img/team/3.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <a href="case-study-details.html">Bessie Cooper</a>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="counter-area bg-relative bg-cover pd-top-110 pd-bottom-100"
        style={{ backgroundImage: "url('img/bg/5.png');" }}
      >
        <div className="container pd-bottom-90">
          <div className="row">
            <div className="col-lg-3">
              <div className="single-counter-inner">
                <div className="thumb">
                  <img src="img/icon/5.svg" alt="img" />
                </div>
                <h2 className="text-white mt-4 mb-2">
                  <span className="counter">200</span>+
                </h2>
                <p className="text-white">Team member</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-counter-inner">
                <div className="thumb">
                  <img src="img/icon/6.svg" alt="img" />
                </div>
                <h2 className="text-white mt-4 mb-2">
                  <span className="counter">10</span>k+
                </h2>
                <p className="text-white">Team member</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-counter-inner">
                <div className="thumb">
                  <img src="img/icon/7.svg" alt="img" />
                </div>
                <h2 className="text-white mt-4 mb-2">
                  <span className="counter">200</span>+
                </h2>
                <p className="text-white">Team member</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-counter-inner">
                <div className="thumb">
                  <img src="img/icon/8.svg" alt="img" />
                </div>
                <h2 className="text-white mt-4 mb-2">
                  <span className="counter">200</span>+
                </h2>
                <p className="text-white">Team member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div className="col-lg-8">
                <img className="w-100" src="img/bg/4.png" alt="img" />
              </div>
              <div className="col-lg-4">
                <div className="section-title mb-0">
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <p className="content">
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Subject" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <a
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          href="#"
                        >
                          Submit now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
            <h2 className="title">
              World <span>Best Step</span> Our It Process
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/9.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Work 01</p>
                  <h5 className="mb-3">Software Research</h5>
                  <p className="content">
                    Research ipsum dolor sit consec tetur sed diam in the
                    aliquam tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/10.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Work 02</p>
                  <h5 className="mb-3">Create Programs</h5>
                  <p className="content">
                    Create ipsum dolor sit consec tetur sed diam in the aliquam
                    tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/11.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Work 03</p>
                  <h5 className="mb-3">Develope Software</h5>
                  <p className="content">
                    Develope ipsum dolor sit consec tetur sed diam in the
                    aliquam tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="img/icon/12.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Work 04</p>
                  <h5 className="mb-3">Shop software</h5>
                  <p className="content">
                    Shop ipsum dolor sit consec tetur Malesuada sed diam in the
                    aliquam tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AboutUs };
