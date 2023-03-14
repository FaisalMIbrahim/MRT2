import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li className="pt-3">
              <a href="#" data-toggle="sidebar" className="nav-link nav-link-lg hover">
                <i className="fas fa-bars text-muted"></i>
              </a>
            </li>

            <li className="pt-2" data-toggle="sidebar">
              <img alt="image" src="/assets/img/logo/mrt.png" width={170} />
            </li>
          </ul>
        </form>
        <ul className="navbar-nav navbar-right p-4">
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img
                alt="image"
                src="/assets/admin/assets/img/avatar/avatar-1.png"
                className="rounded-circle mr-1"
              />
              <div className="d-sm-none d-lg-inline-block text-dark pt-2">
                <h4>
                  Hi, <strong>{user && user.nama}</strong>{" "}
                </h4>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <div className="dropdown-divider"></div>
              <button onClick={logout} className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Topbar;
