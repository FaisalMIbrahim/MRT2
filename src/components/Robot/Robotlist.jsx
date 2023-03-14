import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsPersonPlus, BsTrash } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";

const Robotlist = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots();
  });

  const getRobots = async () => {
    const response = await axios.get("http://localhost:5000/robot");
    // console.log(response);
    setRobots(response.data);
  };
  // const deleteUser = async (userId) => {
  //   await axios.delete(`http://localhost:5000/users/${userId}`);
  //   getUsers();
  // };
  const deleteRobot = async (robotId) => {
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
      .delete(`http://localhost:5000/robot/delete/${robotId}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        // getRobots();
        console.log(getRobots());
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
            <h1>Robotlist</h1>
          </div>
          <div className="card">
            <div class="card-body p-0">
              <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                  <h1 class="page-header-title p-3">
                    <BsPerson className="mb-2" />
                    Robot List
                  </h1>
                </div>
                <div class="col-12 col-xl-auto mb-3 p-4">
                  <a class="btn btn-light text-primary" href="/addrobot">
                    <BsPersonPlus className="mr-1" />
                    Add New Robot
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
                        <th>Robot Id</th>
                        <th>Status</th>
                        <th>In Use</th>
                        <th>Station</th>
                        <th>System State</th>
                        <th>Inverter State</th>
                        <th>Emergency State</th>
                        <th>State Modified By</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {robots.map((robot, index) => (
                        <tr key={robot.id}>
                          <td>{index + 1}</td>
                          <td>{robot.id_robot}</td>
                          <td>
                            {robot.status == "Active" ? (
                              <small class="badge badge-success p-2 rounded-pill">Active</small>
                            ) : (
                              ""
                            )}
                            {robot.status == "Maintenance" ? (
                              <small class="badge badge-danger p-2 rounded-pill">Maintenance</small>
                            ) : (
                              ""
                            )}
                            {robot.status == "Inactive" ? (
                              <small class="badge badge-secondary p-2 rounded-pill">inactive</small>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            {robot.in_use == "No" ? <small class="badge badge-danger p-2">NO</small> : ""}
                            {robot.in_use == "Yes" ? <small class="badge badge-success p-2">YES</small> : ""}
                          </td>
                          <td>{robot.station}</td>
                          <td>
                            {robot.system_state == "Off" ? (
                              <small class="badge badge-danger p-2 ">OFF</small>
                            ) : (
                              ""
                            )}
                            {robot.system_state == "On" ? (
                              <small class="badge badge-success p-2 ">ON</small>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            {robot.inverter_state == "Off" ? (
                              <small class="badge badge-danger p-2 ">OFF</small>
                            ) : (
                              ""
                            )}
                            {robot.inverter_state == "On" ? (
                              <small class="badge badge-success p-2 ">ON</small>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            {robot.emergency_state == "Off" ? (
                              <small class="badge badge-danger p-2 ">OFF</small>
                            ) : (
                              ""
                            )}
                            {robot.emergency_state == "On" ? (
                              <small class="badge badge-success p-2 ">ON</small>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            {robot.state_modified_by == "Robot" ? (
                              <small class="badge badge-info p-2 ">Robot</small>
                            ) : (
                              ""
                            )}
                            {robot.state_modified_by == "Web" ? (
                              <small class="badge badge-success p-2 ">WEB</small>
                            ) : (
                              ""
                            )}
                          </td>

                          <td className="pl-3">
                            <a href={`/robot/edit/${robot.id}`} className="btn btn-info p-1 mr-1">
                              <BsPencilSquare />
                            </a>
                            <button onClick={() => deleteRobot(robot.id)} className="btn btn-danger p-1">
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

export default Robotlist;
