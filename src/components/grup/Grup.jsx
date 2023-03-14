import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Footer from "../../admin/Footer";
import { BsPencilSquare, BsPeople, BsPerson, BsPlusLg, BsTrash } from "react-icons/bs";
import axios from "axios";

import { Form, FormControl, Modal, Button } from "react-bootstrap";

const Grup = () => {
  const [name, setName] = useState("");
  const [grupId, setGerupId] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

  const [grups, setGrups] = useState([]);
  const navigate = useNavigate();

  const saveGrups = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/grups", {
          name: name,
        })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
        });
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

  useEffect(() => {
    getGrups();
  });
  const getGrups = async () => {
    const response = await axios.get("http://localhost:5000/grups");
    // console.log(response);
    setGrups(response.data);
  };

  useEffect(() => {
    const getGrupById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/grups/${id}`);
        // console.log(response);
        setGerupId(response.data.grupId);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getGrupById();
  }, [id]);

  const deleteGrup = async (grupsId) => {
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
      .delete(`http://localhost:5000/grups/${grupsId}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        getGrups();
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
            <h1>Grup List</h1>
          </div>
          <div className="card">
            <div class="card-body p-0">
              <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                  <h1 class="page-header-title p-3">
                    <BsPeople className="mb-2 mr-1" />
                    Grup List
                  </h1>
                </div>
                <div class="col-12 col-xl-auto mb-3 p-4">
                  <Link className="btn btn-light text-primary mr-2 mb-3" to={"/user"}>
                    <BsPerson className="mr-1" />
                    User Manage
                  </Link>
                  <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                  </Button>

                  <button
                    type="button"
                    className="btn btn-light text-primary mr-3 mb-3"
                    data-toggle="modal"
                    data-target="#exampleModal7"
                  >
                    <BsPlusLg className="mr-1" />
                    Create New Groups
                  </button>
                </div>
              </div>
              <hr />
              <div className="container p-3 ">
                <div class="table-responsive rounded">
                  <table class="table table-striped" id="sortable-table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Grup Name</th>
                        <th>Created Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grups.map((grup, index) => (
                        <tr key={grup.uuid}>
                          <td>{index + 1}</td>
                          <td>{grup.name}</td>
                          <td>{grup.createdAt}</td>
                          <td>
                            {/* <Link to={`/grups/edit/${grup.uuid}`} className="btn btn-info mr-1 p-1">
                              <BsPencilSquare />
                            </Link> */}
                            <button
                              href={`/grup/${grup.uuid}`}
                              type="button"
                              class="btn btn-info mr-1 p-1"
                              onClick={handleShow2}
                            >
                              <BsPencilSquare />
                            </button>

                            <button onClick={() => deleteGrup(grup.uuid)} className="btn btn-danger p-1">
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline onSubmit={saveGrups}>
            <FormControl
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Grups"
              className="mr-sm-2"
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline onSubmit={saveGrups}>
            <FormControl
              type="text"
              value={grupId}
              onChange={(e) => setGerupId(e.target.value)}
              placeholder="Grups"
              className="mr-sm-2"
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/*   Modal Edit Grup */}
      {/* <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Groups
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <p className="text-center bg-danger rounded shadow">{msg}</p>
              <div className="modal-body">
                <div className="mb-0">
                  <label className="mb-1 small text-muted" for="formGroupName">
                    Group Name
                  </label>
                  <input
                    className="form-control"
                    id="formGroupName"
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="Masukan Grup.."
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger-soft text-danger" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary-soft text-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* last modal */}

      {/* <!-- Modal ADD Grup --> */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Groups
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={saveGrups}>
              <p className="text-center bg-danger rounded shadow">{msg}</p>
              <div className="modal-body">
                <div className="mb-0">
                  <label className="mb-1 small text-muted" for="formGroupName">
                    Group Name
                  </label>
                  <input
                    className="form-control"
                    id="formGroupName"
                    type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Masukan Grup.."
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger-soft text-danger" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary-soft text-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* last Modal */}
      <Footer />
    </div>
  );
};

export default Grup;
