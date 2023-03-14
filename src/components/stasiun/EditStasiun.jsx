import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditStasiun = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [kode_stasiun, setKodestasiun] = useState([]);
  const [nama_stasiun, setNamastasiun] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getStasiunsById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/stasiun/${id}`);
        // console.log(response);
        setKodestasiun(response.data.kode_stasiun);
        setNamastasiun(response.data.nama_stasiun);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getStasiunsById();
  }, [id]);

  const updateStasiun = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(`http://localhost:5000/stasiun/edit/${id}`, {
          kode_stasiun: kode_stasiun,
          nama_stasiun: nama_stasiun,
        })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
        });

      navigate("/stasiuns");
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
            <h1>Add Stasiun</h1>
          </div>

          <div className="section-body">
            <div className="card">
              <div className="card-body">
                <h2>Add Stasiun</h2>
                <hr />

                <form onSubmit={updateStasiun}>
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
                      <div className="col-xl-8">
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="mb-3">
                              <label className="small mb-1">Kode Stasiun</label>
                              <input
                                className="form-control"
                                type="text"
                                value={kode_stasiun}
                                onChange={(e) => setKodestasiun(e.target.value)}
                                placeholder="Masukan Kode Stasiun"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label className="small mb-1">Nama Stasiun</label>
                              <input
                                className="form-control"
                                type="text"
                                value={nama_stasiun}
                                onChange={(e) => setNamastasiun(e.target.value)}
                                placeholder="Masukan Nama Stasiun"
                                required
                              />
                            </div>

                            <a className="btn btn-info mr-3" href="/stasiuns">
                              Back
                            </a>
                            <button className="btn btn-primary" type="submit">
                              Update
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

export default EditStasiun;
