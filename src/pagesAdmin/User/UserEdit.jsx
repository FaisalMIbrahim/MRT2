import React, { useEffect } from "react";
import Topbar from "../../admin/Topbar";
import Sidebar from "../../admin/Sidebar";
import Footer from "../../admin/Footer";
import UserEdit from "../../components/User/UserEdit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getMe } from "../../features/authSlice";
import Swal from "sweetalert2";

const User = () => {
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
        <UserEdit />
        <Footer />
      </div>
    </div>
  );
};

export default User;
