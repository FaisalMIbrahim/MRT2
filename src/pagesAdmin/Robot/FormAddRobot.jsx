import React, { useEffect } from "react";
import Topbar from "../../admin/Topbar";
import Sidebar from "../../admin/Sidebar";
import Footer from "../../admin/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMe } from "../../features/authSlice";
import AddRobot from "../../components/Robot/AddRobot";
import Swal from "sweetalert2";

const FormAddRobot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        text: "Mohon Login ke Akun Anda!",
        icon: "info",
      });
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div id="app">
      <div className="main-wrapper">
        <Topbar />
        <Sidebar />
        {/* <!-- Main Content --> */}
        <AddRobot />
        <Footer />
      </div>
    </div>
  );
};

export default FormAddRobot;
