import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfpassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/register", {
          name: name,
          username: username,
          email: email,
          password: password,
          confPassword: confPassword,
        })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
        });

      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        Swal.fire({
          text: error.data.msg,
          icon: "error",
        });
      }
    }
  };

  return (
    <body className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container-xl px-4">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header justify-content-center">
                      <h3 className="fw-light my-4">Create Account</h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={Register}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="mb-3">
                          <label className="small mb-1">Nama Lengkap</label>
                          <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukan Nama Lengkap..."
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="small mb-1">Username</label>
                          <input
                            className="form-control"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Masukan Username..."
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="small mb-1">Email</label>
                          <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukan Email..."
                            required
                          />
                        </div>
                        <div className="row gx-3">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="small mb-1">Password</label>
                              <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="*******"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="small mb-1">Confirm Password</label>
                              <input
                                className="form-control"
                                type="password"
                                value={confPassword}
                                onChange={(e) => setConfpassword(e.target.value)}
                                placeholder="*******"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                          Create Account
                        </button>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <div className="small">
                        <a href="/">Have an account? Go to login</a>
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
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
};

export default Register;
