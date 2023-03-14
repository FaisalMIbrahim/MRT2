import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <body className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container-xl px-4">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header justify-content-center">
                      <h3 className="fw-light my-4">Password Recovery</h3>
                    </div>
                    <div className="card-body">
                      <div className="small mb-3 text-muted">
                        Enter your email address and we will send you a link to reset your password.
                      </div>

                      <form>
                        <div className="mb-3">
                          <label className="small mb-1" for="inputEmailAddress">
                            Email
                          </label>
                          <input
                            className="form-control"
                            id="inputEmailAddress"
                            type="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email address"
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to={"/"}>
                            Return to login
                          </Link>
                          <button type="submit" className="btn btn-primary">
                            Reset Password
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <div className="small">
                        <Link to={"/register"}>Need an account? Sign up!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer className="footer-admin mt-auto footer-dark">
            <div className="container-xl px-4">
              <div className="row">
                <div className="col-md-6 small">Copyright &copy; SARI Teknologi 2022</div>
                <div className="col-md-6 text-md-end small">
                  <Link to={"#!"}>Privacy Policy</Link>
                  &middot;
                  <Link to={"#!"}>Terms &amp; Conditions</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      <script src="js/scripts.js"></script>
    </body>
  );
};

export default ForgetPassword;
