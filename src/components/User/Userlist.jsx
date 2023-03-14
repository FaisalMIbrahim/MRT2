import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsPersonPlus, BsTrash } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    // console.log(response);
    setUsers(response.data);
  };
  // const deleteUser = async (userId) => {
  //   await axios.delete(`http://localhost:5000/users/${userId}`);
  //   getUsers();
  // };
  const deleteUser = async (userId) => {
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
      .delete(`http://localhost:5000/users/${userId}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        getUsers();
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
            <h1>Userlist</h1>
          </div>
          <div className="card">
            <div class="card-body p-0">
              <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                  <h1 class="page-header-title p-3">
                    <BsPerson className="mb-2" />
                    Users List
                  </h1>
                </div>
                <div class="col-12 col-xl-auto mb-3 p-4">
                  <a class="btn btn-light text-primary mr-2 " href="/stasiuns">
                    <BsPeople className="mr-1" />
                    Manage Stasiuns
                  </a>
                  <a class="btn btn-light text-primary" href="/useradd">
                    <BsPersonPlus className="mr-1" />
                    Add New User
                  </a>
                </div>
              </div>
              <hr />
              <div className="container p-3">
                <div class="table-responsive rounded">
                  <table class="table table-striped" id="sortable-table">
                    <thead>
                      <tr className="text-center">
                        <th>No</th>
                        <th>User</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>No Handphone</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.nama}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.no_telp}</td>
                          <td className="text-center">
                            {user.role == "super_admin" ? (
                              <small class="badge badge-primary p-2 rounded-pill">Super Admin</small>
                            ) : (
                              ""
                            )}
                            {user.role == "admin" ? (
                              <smal class="badge badge-info p-2 rounded-pill">Admin</smal>
                            ) : (
                              ""
                            )}
                            {user.role == "supervisor" ? (
                              <small class="badge badge-secondary p-2 rounded-pill">Supervisor</small>
                            ) : (
                              ""
                            )}
                            {user.role == "station_manager" ? (
                              <small class="badge badge-success p-2 rounded-pill">Station Manager</small>
                            ) : (
                              ""
                            )}
                            {user.role == "user" ? (
                              <small class="badge badge-warning p-2 rounded-pill ">User</small>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="pl-3">
                            <a href={`/user/${user.id}`} className="btn btn-info p-1 mr-1">
                              <BsPencilSquare />
                            </a>
                            <button onClick={() => deleteUser(user.id)} className="btn btn-danger p-1">
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

export default Userlist;
