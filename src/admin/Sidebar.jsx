import React from "react";
import "../index.css";
import { FiCpu } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="pt-3 pb-3">
            <div className="sidebar-brand pb-5 pt-3">
              <a href="#">
                <img src="assets/img/logo/mrt.png" className="mx-2" width={150} />
              </a>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
              <a href="#">
                <img src="assets/img/logo/icon2.png" className="mx-2 pt-2" width={30} />
              </a>
            </div>
          </div>
          <hr />
          <ul className="sidebar-menu pb-5 mb-5 pt-5">
            <li>
              <a className="nav-link" href="/remote">
                <FiServer className="mr-1" /> <span>Remote</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/control">
                <FiCpu className="mr-1" /> <span>Dashboard Control</span>
              </a>
            </li>
            {user && user.role == "admin" && (
              <li>
                <a className="nav-link" href="/user">
                  <BsPeople className="mr-1" /> <span>User Management</span>
                </a>
              </li>
            )}
            {user && user.role == "admin" && (
              <li>
                <a className="nav-link" href="/robot">
                  <FiTarget className="mr-1" /> <span>Robot Management</span>
                </a>
              </li>
            )}
            {user && user.role == "super_admin" && (
              <li>
                <a className="nav-link" href="/user">
                  <BsPeople className="mr-1" /> <span>User Management</span>
                </a>
              </li>
            )}
            {user && user.role == "super_admin" && (
              <li>
                <a className="nav-link" href="/robot">
                  <FiTarget className="mr-1" /> <span>Robot Management</span>
                </a>
              </li>
            )}
            {/* <li className="nav-item dropdown">
             
              <div>
                <a href="#" className="nav-link has-dropdown">
                  <BsPeople className="mr-1" /> <span>User Management</span>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="nav-link" href="/user">
                      UserList
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="/user/add">
                      AddUser
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="/user/edit">
                      EditUser
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="/grup">
                      GroupsList
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* 
            <li className="nav-item dropdown pb-5">
              <a href="#" className="nav-link has-dropdown">
                <FiTarget className="mr-1" /> <span>Robot Management</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="nav-link" href="#">
                    Robot List
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Edit Robot
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Add Robot
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="sidenav-footer  bg-light mt-4 pt-5">
            <div className="text-center pb-5">
              <img src="assets/img/logo/sari-tr.PNG" className="mx-1" alt="sari-logo" width={60} />
              <img src="assets/img/logo/lifetech2.png" className="" alt="lifetech-logo" width={65} />
              <img src="assets/img/logo/gunadarma-tr.png" className="mx-2" alt="gunadarma-logo" width={50} />
              <div>
                <img src="assets/img/logo/inovasi.png" className="mb-2" alt="brin-logo" width={65} />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
