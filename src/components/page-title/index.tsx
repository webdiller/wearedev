const PageTitle = () => {
  return (
    <div
      className="breadcrumb-area bg-cover"
      style={{ background: "url('img/bg/7.png')" }}
    >
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="page-title">Service</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="page-list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {PageTitle};
