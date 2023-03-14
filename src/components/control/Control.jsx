import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../admin/Footer";
import Iframe from "react-iframe";
const Control = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  function closeItem() {
    setActive(true);
  }
  function openItem() {
    setActive(false);
  }

  // const handleClose = () => setShow(true);
  // const handleShow = () => setShow(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     window.open("https://clb.daily.co/room1");
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
      {/* <!-- Main Content --> */}
      <div className="main-content">
        <section className="section pt-3">
          <div className="section-header shadow">
            <h1>Dashboard Control</h1>
          </div>

          <div className="card">
            <div className="card-body">
              <h2>Dashboard Control</h2>
              <hr />

              <div className="row">
                <div id="call-frame-container">
                  <button className="btn btn-info pl-3 pr-3" onClick={closeItem}>
                    Open
                  </button>

                  <button className="btn btn-light shadow ml-3" onClick={openItem}>
                    CLose
                  </button>
                  <br />
                </div>
                <br />
              </div>
              <br />
              <div className="row">
                <div id="call-frame-container">
                  <div className="">
                    {active ? (
                      <div className="card">
                        <div className="card-body">
                          <Iframe
                            url="https://clb.daily.co/room1"
                            width="640px"
                            height="320px"
                            id=""
                            className=""
                            display="block"
                            position="relative"
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Control;
