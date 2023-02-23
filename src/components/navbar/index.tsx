const Navbrar = () => {
  return (
    <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container navbar-bg">
            <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" data-target="#itech_main_menu" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-left"></span>
                    <span className="icon-right"></span>
                </button>
            </div>
            <div className="logo">
                <a href="index.html"><img src="img/logo.png" alt="img"/></a>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
                <a className="search-bar-btn" href="#">
                    <i className="fa fa-search"></i>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="itech_main_menu">
                <ul className="navbar-nav menu-open text-lg-end">
                    <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                            <li><a href="index-1.html">Home 01</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                            <li><a href="index-3.html">Home 03</a></li>
                            <li><a href="index-4.html">Home 04</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service Single</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="case-study-details.html">Case Study Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop align-self-center">
                <a className="navbar-phone" href="tel:">
                    <span className="icon">
                        <img src="img/icon/1.png" alt="img"/>
                    </span>
                    <span>Need help?</span>
                    <h5>(808) 555-0111</h5>
                </a>
            </div>
        </div>
    </nav>
  )
}

export {Navbrar}