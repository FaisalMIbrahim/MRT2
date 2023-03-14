import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormUserAdd = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfpassword] = useState("");
  const [email, setEmail] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [stasiunId, setStasiunId] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getStasiun();
  });

  const getStasiun = async () => {
    const response = await axios.get("http://localhost:5000/stasiun");
    // console.log(response);

    setData(response.data);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/users", {
          nama: nama,
          username: username,
          password: password,
          confPassword: confPassword,
          email: email,
          no_telp: no_telp,
          stasiunId: stasiunId,
          role: role,
        })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
        });

      navigate("/user");
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
    <div>
      <div className="main-content">
        <section className="section pt-3">
          <div className="section-header shadow">
            <h1>Add User</h1>
          </div>

          <div className="section-body">
            <div className="card">
              <div className="card-body">
                <h2>Add User</h2>
                <hr />

                <form onSubmit={saveUser}>
                  {Object.keys(msg).length > 0 && (
                    <div>
                      <p className="has-text-centered bg-danger text-white text-center p-3 rounded shadow">
                        {msg}
                      </p>
                    </div>
                  )}
                  {/* <p className="has-text-centered bg-danger text-white text-center p-3" >{msg}</p> */}
                  <div className="container-xl px-4 mt-4">
                    <div className="row">
                      {/* <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                          <div className="card-header">Profile Picture</div>
                          <div className="card-body text-center">
                            <img
                              className="img-account-profile rounded-circle mb-2"
                              src="assets/img/illustrations/profiles/profile-1.png"
                              alt=""
                            />

                            <div className="small font-italic text-muted mb-4">
                              JPG or PNG no larger than 5 MB
                            </div>

                            <button className="btn btn-primary" type="button">
                              Upload new image
                            </button>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-xl-8">
                        <div className="card mb-4">
                          <div className="card-header">Account Details</div>
                          <div className="card-body">
                            <div className="mb-3">
                              <label className="small mb-1">Nama Lengkap</label>
                              <input
                                className="form-control"
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Masukan Nama Lengkap"
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
                                placeholder="Masukan Username"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label className="small mb-1">Password</label>
                              <input
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label className="small mb-1">Confirm Password</label>
                              <input
                                className="form-control"
                                type="password"
                                value={confPassword}
                                onChange={(e) => setConfpassword(e.target.value)}
                                placeholder="********"
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
                                placeholder="nama@example.com"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label className="small mb-1">No Handphone</label>
                              <input
                                className="form-control"
                                type="text"
                                value={no_telp}
                                onChange={(e) => setNo_telp(e.target.value)}
                                placeholder="Masukan No Handphone"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label className="small mb-1">Stasiun</label>
                              <select
                                className="form-select"
                                value={stasiunId}
                                onChange={(e) => setStasiunId(e.target.value)}
                              >
                                <option selected>Pilih Stasiun : </option>
                                {/* <option selected disabled>
                                  Select a Grup:
                                </option> */}

                                {data.map((d, i) => (
                                  <option value={d.id}>
                                    {d.kode_stasiun} - {d.nama_stasiun}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="small mb-1">Role</label>
                              <select
                                className="form-select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                              >
                                <option>Pilih Role :</option>

                                <option value="admin">Admin</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="station_manager">Station Manager</option>
                                <option value="user">User</option>
                              </select>
                            </div>
                            <a className="btn btn-info mr-3" href="/user">
                              Back
                            </a>
                            <button className="btn btn-primary" type="submit">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormUserAdd;
