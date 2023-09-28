import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/main-logo.png";
import login_bg from "../../assets/login_bg.jpg";

import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
Modal.setAppElement("#root");


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

  const [singingToggle, setSingingToggle] = useState("Sign Up")

  const handleTogglerSigning = () => {
    setSingingToggle(singingToggle==="Sign Up"?"Log In":"Sign Up");
  }


  useEffect(() => {
    const handlerScreenSize = () => {
      setScreensize(window.innerWidth > 960);
    };
    window.addEventListener("resize", handlerScreenSize);

    return () => {
      window.removeEventListener("resize", handlerScreenSize);
    };
  });

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    loginState ? setIsOpen(true) : setIsOpen(false);
  }, [loginState, screenSize]);

  const [inputTypingDataName, setInputTypingDataName] = useState("");
  const [inputTypingDataEmail, setInputTypingDataEmail] = useState("");
  const [inputTypingDataPassword, setInputTypingDataPassword] = useState("");

  const handlerInputTypingName = (event) => {
    setInputTypingDataName(event.target.value);
  };
  const handlerInputTypingEmail = (event) => {
    setInputTypingDataEmail(event.target.value);
  };
  const handlerInputTypingPassword = (event) => {
    setInputTypingDataPassword(event.target.value);
  };

  const [userSigning, setUserSinging] = useState(0);

  const handleUserSiginig = () => {
    setUserSinging(prev => prev + 1)
  }

  // #region ------------------Log in -----------------
  const [loginStateOfFetch, setLoginState] = useState("success");
  const [token, setToken] = useState("");

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "ghmumg9x1zid");
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name: `${inputTypingDataName}`,
      email: `${inputTypingDataEmail}`,
      password: `${inputTypingDataPassword}`,
      appType: "music",
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoginState(result.status);
        if (result.status == "success") {
          setToken(result.token);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

    if (loginStateOfFetch === "fail") {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        email: `${inputTypingDataEmail}`,
        password: `${inputTypingDataPassword}`,
        appType: "music",
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setLoginState(result.status);
          if (result.status == "success") {
            setToken(result.token);
          }
          console.log("result from fetch", result);
        })
        .catch((error) => console.log("error", error));
    }
    console.log("token", token);
  }, [userSigning]);

  // #endregion -------------------------

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
              {singingToggle === "Log In" ?
              (<input
                type="text"
                placeholder="User Name"
                className="user-id"
                onChange={handlerInputTypingName}
              />) : ("")
              }
              <input
                type="email"
                placeholder="Enter Email"
                className="user-id"
                onChange={handlerInputTypingEmail}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="user-id"
                onChange={handlerInputTypingPassword}
              />
              <button className="login-btn" ref={ref} onClick={handleUserSiginig}>
                Continue
              </button>
              <div className="line-break">
                <p className="empty-line"></p>
                <p className="empty-line-content"> Or continue with </p>
                <p className="empty-line"></p>
              </div>
              <button
              onClick={handleTogglerSigning}
              className="login-btn google-btn">                
                {singingToggle}
              </button>
              {/* <button className="login-btn google-btn">
                <FcGoogle className="google-icon" /> Google
              </button> */}
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
