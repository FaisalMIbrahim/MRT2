import React, { useEffect } from "react";
import Topbar from "../../admin/Topbar";
import Sidebar from "../../admin/Sidebar";
import Footer from "../../admin/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMe } from "../../features/authSlice";
import EditRobot from "../../components/Robot/EditRobot";
import Swal from "sweetalert2";

const FormEditRobot = () => {
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
        <EditRobot />
        <Footer />
      </div>
    </div>
  );
};

export default FormEditRobot;
