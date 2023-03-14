import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgetPassword from "./components/ForgetPassword";
import User from "./pagesAdmin/User/User";
import UserEdit from "./pagesAdmin/User/UserEdit";
import UserAdd from "./pagesAdmin/User/UserAdd";
import Remote from "./pagesAdmin/Remote/Remote";
import Control1 from "./pagesAdmin/control/Control1";
import Controll from "./pagesAdmin/Controll/Controll";
import PageStasiun from "./pagesAdmin/stasiun/PageStasiun";
import FormAddStasiun from "./pagesAdmin/stasiun/FormAddStasiun";
import FormEditStasiun from "./pagesAdmin/stasiun/FormEditStasiun";
import RobotList from "./pagesAdmin/Robot/RobotList";
import FormAddRobot from "./pagesAdmin/Robot/FormAddRobot";
import FormEditRobot from "./pagesAdmin/Robot/FormEditRobot";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/user" element={<User />} />
          <Route path="/useradd" element={<UserAdd />} />
          <Route path="/user/:id" element={<UserEdit />} />
          <Route path="/stasiuns" element={<PageStasiun />} />
          <Route path="/stasiunsAdd" element={<FormAddStasiun />} />
          <Route path="/:id" element={<FormEditStasiun />} />
          <Route path="/remote" element={<Remote />} />
          <Route path="/control" element={<Controll />} />
          <Route path="/control1" element={<Control1 />} />
          <Route path="/robot" element={<RobotList />} />
          <Route path="/robot/edit/:id" element={<FormEditRobot />} />
          <Route path="/addrobot" element={<FormAddRobot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
