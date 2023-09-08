import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/main-logo.png";
import login_bg from "../../assets/login_bg.jpg";

import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function LoginPage(props) {
  const { loginState } = props;
  const ref = useRef();
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [screenSize, setScreensize] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handlerScreenSize = () => {
      setScreensize(window.innerWidth > 960);
    };
    window.addEventListener("resize", handlerScreenSize);

    return () => {
      window.removeEventListener("resize", handlerScreenSize);
    };
  });

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect (()=> {
    loginState && setIsOpen(true);
  }, [loginState, screenSize])


  const handlerInputTyping = (event) => {
    if (event.target.value.length === 5) {
      ref.current.disabled = true;
    } else {
      ref.current.disabled = false;
    }
  }

  return (
    <>
      <div className="login-page">
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2> */}

          <AiOutlineClose onClick={closeModal} className="close-btn-icon" />

          <div className="login-container">
            <div className="login-section1">
              <img src={logo} alt="" />
              <h2 className="login-title">Login/Signup</h2>
              <p className="login-info">
                Get a personalized experience, and access all your music
              </p>
              <input
                type="text"
                placeholder="Enter Email or Mobile Number"
                className="user-id"
                onChange={handlerInputTyping}
                
              />
              <button className="login-btn" ref={ref} >Continue</button>
              <div className="line-break">
                <p className="empty-line"></p>
                <p className="empty-line-content"> Or continue with </p>
                <p className="empty-line"></p>
              </div>
              <button className="login-btn google-btn">
                <FcGoogle className="google-icon" /> Google
              </button>
            </div>

            {screenSize && (
              <div className="login-section2">
                <img src={login_bg} alt="" />
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default LoginPage;
