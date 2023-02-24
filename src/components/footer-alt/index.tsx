const FooterAlt = () => {
  return (
    <footer className="footer-area bg-black mt-0 pd-top-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="widget widget_about">
              <div className="thumb">
                <img src="img/logo2.png" alt="img" />
              </div>
              <div className="details">
                <p>
                  Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                </p>
                <ul className="social-media">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 offset-xl-2 col-md-6 ps-xl-5">
            <div className="widget widget_nav_menu">
              <h4 className="widget-title">Our Service</h4>
              <ul>
                <li>
                  <a href="service.html">
                    <i className="fas fa-chevron-right"></i> Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    <i className="fas fa-chevron-right"></i> Video Editing
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    <i className="fas fa-chevron-right"></i> Pc Repairs{" "}
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    <i className="fas fa-chevron-right"></i> Web Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 offset-xl-1 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Our Service</h4>
              <div className="details">
                <p>
                  Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                </p>
                <div className="subscribe mt-4">
                  <input type="text" placeholder="E-mail" />
                  <button>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-gray-black">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p>© Yoursitename 2023 | All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-lg-end">
              <a href="#">Trams & Condition</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {FooterAlt};
