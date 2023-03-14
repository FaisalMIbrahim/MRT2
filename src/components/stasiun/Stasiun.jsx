import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsPeople, BsPerson, BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const Stasiun = () => {
  const [stasiuns, setStasiuns] = useState("");

  useEffect(() => {
    getStasiuns();
  });
  const getStasiuns = async () => {
    const response = await axios.get("http://localhost:5000/stasiun");
    // console.log(response);
    setStasiuns(response.data);
  };

  const deleteStasiun = async (stasiunsId) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }
    await axios
      .delete(`http://localhost:5000/stasiun/delete/${stasiunsId}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        getStasiuns();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.msg,
          icon: "error",
        });
      });
  };
  return (
    <div>
      {/* <!-- Main Content --> */}
      <div className="main-content">
        <section className="section pt-3">
          <div className="section-header shadow">
            <h1>Stasiun List</h1>
          </div>
          <div className="card">
            <div class="card-body p-0">
              <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                  <h1 class="page-header-title p-3">
                    <BsPeople className="mb-2 mr-1" />
                    Stasiun List
                  </h1>
                </div>
                <div class="col-12 col-xl-auto mb-3 p-4">
                  <Link className="btn btn-light text-primary mr-2 mb-3" to={"/user"}>
                    <BsPerson className="mr-1" />
                    User Manage
                  </Link>
                  <Link className="btn btn-light text-primary mr-2 mb-3" to={"/stasiunsAdd"}>
                    <BsPerson className="mr-1" />
                    Create New Stasiun
                  </Link>
                </div>
              </div>
              <hr />
              <div className="container p-3 ">
                <div class="table-responsive rounded">
                  <table class="table table-striped" id="sortable-table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Kode Stasiun</th>
                        <th>Nama Stasiun</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stasiuns &&
                        stasiuns.map((stasiun, index) => (
                          <tr key={stasiun.id}>
                            <td>{index + 1}</td>
                            <td>{stasiun.kode_stasiun}</td>
                            <td>{stasiun.nama_stasiun}</td>
                            {/* <td>{stasiun.createdAt}</td> */}
                            <td>
                              <Link to={`/${stasiun.id}`} className="btn btn-info mr-1 p-1">
                                <BsPencilSquare />
                              </Link>

                              <button
                                onClick={() => deleteStasiun(stasiun.id)}
                                className="btn btn-danger p-1"
                              >
                                <BsTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stasiun;
