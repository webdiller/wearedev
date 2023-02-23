const Services = () => {
  return (
    <div className="service-area bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center">
                        <h6 className="sub-title">CREATIVE SERVICES</h6>
                        <h2 className="title">Best Destination To Get Your Own <span>Application</span> Developed</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-service-inner style-3">
                        <div className="thumb">
                            <img src="img/service-icon/1.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5><a href="service-details.html">Only the best</a></h5>
                            <p>You can access SaaS applications through a web browser or mobile app, as long as you have an internet connection</p>
                            <a className="read-more-text" href="service-details.html">Touch More <i className="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-service-inner style-3">
                        <div className="thumb">
                            <img src="img/service-icon/2.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5><a href="service-details.html">Focusing on details</a></h5>
                            <p>You can access SaaS applications through a web browser or mobile app, as long as you have an internet connection</p>
                            <a className="read-more-text" href="service-details.html">Touch More <i className="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-service-inner style-3">
                        <div className="thumb">
                            <img src="img/service-icon/3.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5><a href="service-details.html">No flaws here</a></h5>
                            <p>You can access SaaS applications through a web browser or mobile app, as long as you have an internet connection</p>
                            <a className="read-more-text" href="service-details.html">Touch More <i className="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export {Services}