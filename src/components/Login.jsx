import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/remote");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };
  return (
    <div>
      <body className="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container-xl px-4">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header">
                        <h3 className="fw-light my-5 ">Login</h3>
                        <img src="assets/img/logo/mrt.png" className="mt-4" alt="" width={130} height={65} />
                      </div>
                      <div className="card-body">
                        <form onSubmit={Auth}>
                          {isError && (
                            <p className="bg-danger rounded text-center m-1 shadow text-white">{message}</p>
                          )}
                          <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">
                              Username
                            </label>
                            <input
                              className="form-control"
                              id="inputEmailAddress"
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Enter username address"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label className="small mb-1" for="inputPassword">
                              Password
                            </label>
                            <input
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="********"
                              required
                            />
                          </div>

                          {/* <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="rememberPasswordCheck"
                                type="checkbox"
                                value=""
                              />
                              <label className="form-check-label" for="rememberPasswordCheck">
                                Remember password
                              </label>
                            </div>
                          </div> */}

                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small" href="/forgot-password">
                              Forgot Password?
                            </a>
                            <button type="submit" className="btn btn-primary">
                              {isLoading ? "Loading.." : "Login"}
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center">
                        <div className="small">
                          <a href="/register">Need an account? Sign up!</a>
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
                    <a href="#!">Privacy Policy</a>
                    &middot;
                    <a href="#!">Terms &amp; Conditions</a>
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
    </div>
  );
};

export default Login;
