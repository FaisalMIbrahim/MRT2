import React from "react";
import Footer from "../../admin/Footer";

const Remote1 = () => {
  return (
    <div>
      {/* <!-- Main Content --> */}
      <div className="main-content">
        <section className="section pt-3">
          <div className="section-header shadow">
            <h1>Remote</h1>
          </div>

          <div className="card">
            <div className="card-body">
              <h2>Remote</h2>
              <hr />
              <div className="row">
                <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
                  <a className="d-block lift rounded overflow-hidden mb-2" href="dashboard-control.html">
                    <img className="img-fluid " src="./assets/img/logo/marti-3.png" alt="..." />
                  </a>
                  <div className="text-center small">RS-01</div>

                  <div className="text-center">
                    <a
                      id="btnRS"
                      className="btn btn-success p-1  "
                      href="/control"
                      // onclick="window.location.href='dashboard-control.html'"
                    >
                      Remote
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
                  <a className="d-block lift rounded overflow-hidden mb-2" href="dashboard-control.html">
                    <img className="img-fluid " src="./assets/img/logo/marti-3.png" alt="..." />
                  </a>
                  <div className="text-center small">RS-02</div>

                  <div className="text-center">
                    <a
                      id="btnRS"
                      className="btn btn-success p-1  "
                      href="/control"
                      // onclick="window.location.href='dashboard-control.html'"
                    >
                      Remote
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
                  <a className="d-block lift rounded overflow-hidden mb-2" href="dashboard-control.html">
                    <img className="img-fluid " src="./assets/img/logo/marti-3.png" alt="..." />
                  </a>
                  <div className="text-center small">RS-03</div>

                  <div className="text-center">
                    <a
                      id="btnRS"
                      className="btn btn-success p-1  "
                      href="/control"
                      // onclick="window.location.href='dashboard-control.html'"
                    >
                      Remote
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
                  <a className="d-block lift rounded overflow-hidden mb-2" href="dashboard-control.html">
                    <img className="img-fluid " src="./assets/img/logo/marti-3.png" alt="..." />
                  </a>
                  <div className="text-center small">RS-04</div>

                  <div className="text-center">
                    <a
                      id="btnRS"
                      className="btn btn-success p-1  "
                      href="/control"
                      // onclick="window.location.href='dashboard-control.html'"
                    >
                      Remote
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 mb-4">
                  <a className="d-block lift rounded overflow-hidden mb-2" href="dashboard-control.html">
                    <img className="img-fluid " src="./assets/img/logo/marti-3.png" alt="..." />
                  </a>
                  <div className="text-center small">RS-05</div>

                  <div className="text-center">
                    <a
                      id="btnRS"
                      className="btn btn-success p-1  "
                      href="/control"
                      // onclick="window.location.href='dashboard-control.html'"
                    >
                      Remote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Remote1;
