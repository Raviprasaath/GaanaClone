import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/main-logo.png";
import login_bg from "../../assets/login_bg.jpg";

import { useSelector, useDispatch } from "react-redux";

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
  // #region ------------ screen size control ---------
  const { loginState } = props;

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

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    loginState ? setIsOpen(true) : setIsOpen(false);
  }, [loginState, screenSize]);

  // #endregion ------------ screen size control ---------

  // #region ------------ user sign control ------------

  const [logStatus, setLogStatus] = useState("Sign Up");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userNameChecking, setUserNameChecking] = useState(false);
  const [emailChecking, setEmailChecking] = useState(false);
  const [passwordChecking, setPasswordChecking] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  console.log("logStatus", logStatus);

  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    if (logStatus === "Sign Up") {
      if (userNameChecking && emailChecking && passwordChecking) {
        setBtnDisable(false);
      }
    } else {
      if (emailChecking && passwordChecking) {
        setBtnDisable(false);
      }
    }
  }, [userNameChecking, emailChecking, passwordChecking, logStatus]);

  const handlerUserNameEntry = (e) => {
    setUserName(e.target.value);
    setUserNameChecking(isValidUserName(e.target.value));
  };
  const handlerEmailEntry = (e) => {
    setEmail(e.target.value);
    setEmailChecking(isValidEmail(e.target.value));
  };
  const handlerPasswordEntry = (e) => {
    setPassword(e.target.value);
    setPasswordChecking(isValidPassword(e.target.value));
  };

  const isValidUserName = (value) => {
    return /^[A-Za-z0-9_]+$/.test(value);
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidPassword = (value) => {
    return value.length >= 8;
  };

  const handlerToggleLogging = () => {
    clearInput();
    setLogStatus(logStatus === "Sign Up" ? "Log In" : "Sign Up");
  };

  const handlerLogOut = () => {
    window.location.reload();
  };

  const clearInput = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setUserNameChecking(false);
    setEmailChecking(false);
    setPasswordChecking(false);
    setBtnDisable(true);
    setNewPassword("");
    setCurrentPassword("");
  };

  const handlerPasswordCurrent = (e) => {
    setCurrentPassword(e.target.value);
  };
  const handlerNewPassword = (e) => {
    setNewPassword(e.target.value);
  };



  // #endregion

  // #region ------------- Fetching ---------------

  const [successStatus, setSuccessStatus] = useState("fail");
  const [token, setToken] = useState("");
  const [fetching, setFetching] = useState(0);

  const [userNameFromFetch, setUserNameFromFetch] = useState("");
  const [passwordFromFetch, setPasswordFromFetch] = useState("");
  const [messageFromFetch, setMessageFromFetch] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("fail");

  const handlerStartFetch = () => {
    setFetching((prev) => prev + 1);
  };
  const handlerUpdatePassword = () => {
    setTimeout(()=> {
      clearInput()
    }, 3000)
    setFetching((prev) => prev + 1);
  };
  // useEffect(() => {
  //   if (successStatus === "success") {
  //     setTimeout(() => {
  //       setIsOpen(false);
  //     }, [10000]);
  //   }
  // }, [successStatus]);

  useEffect(() => {
    if (successStatus === "fail" && logStatus === "Sign Up") {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        name: `${userName}`,
        email: `${email}`,
        password: `${password}`,
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
          setSuccessStatus(result.status);
          setMessageFromFetch(result.message);
          setUserNameFromFetch(result.data.user.name);
          setPasswordFromFetch(result.data.password);
          console.log("signup ", result);
          if (result.status == "success") {
            setToken(result.token);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }

    // -------------LOG IN--------------------
    else if (successStatus === "fail" && logStatus === "Log In") {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        email: `${email}`,
        password: `${password}`,
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
          setSuccessStatus(result.status);
          setMessageFromFetch(result.message);
          setUserNameFromFetch(result.data.name);
          setPasswordFromFetch(result.data.password);
          console.log("login ", result);
          if (result.status == "success") {
            setToken(result.token);
          }
        })
        .catch((error) => console.log("error", error));
    } else if (successStatus === "success") {
      let myHeaders = new Headers();
      myHeaders.append("projectID", "ghmumg9x1zid");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let raw = JSON.stringify({
        name: `${userName}`,
        email: `${email}`,
        passwordCurrent: `${currentPassword}`,
        password: `${newPassword}`,
        appType: "music",
      });

      let requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setPasswordStatus(result.status);
          setMessageFromFetch(result.message);
          setUserNameFromFetch(result.data.name);
          setPasswordFromFetch(result.data.password);
          console.log("login ", result, 
          "result status", result.status,
          );
          if (result.status == "success") {
            setToken(result.token);
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, [fetching]);

  //  #endregion ---------------------------------

  console.log("successStatus", successStatus);

  return (
    <>
      <div className="login-page">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AiOutlineClose onClick={closeModal} className="close-btn-icon" />
          <div className="login-container">
            <div className="login-section1">
              <img src={logo} alt="" />
              <h2 className="login-title">
                {successStatus === "fail" && <div>Login/Signup</div>}
                {successStatus === "success" && (
                  <div>
                    Hi {userNameFromFetch}
                    <div style={{ textAlign: "center" }}>Welcome</div>
                  </div>
                )}
              </h2>
              <p className="login-info">
                Get a personalized experience, and access all your music
              </p>
              {successStatus === "fail" && logStatus === "Sign Up" && (
                <>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="user-id"
                    value={userName}
                    onChange={handlerUserNameEntry}
                  />
                  {!userNameChecking && (
                    <p className="error-messages">
                      Please Enter Correct Details
                    </p>
                  )}
                </>
              )}
              {successStatus === "success" && (
                <>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="user-id"
                    value={currentPassword}
                    onChange={handlerPasswordCurrent}
                  />
                  {!userNameChecking && (
                    <p className="error-messages">
                      Please Enter Correct Details
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="New Password"
                    className="user-id"
                    value={newPassword}
                    onChange={handlerNewPassword}
                  />
                  {!userNameChecking && (
                    <p className="error-messages">
                      Please Enter Correct Details
                    </p>
                  )}
                  <button
                    onClick={handlerUpdatePassword}
                    className="login-btn google-btn"
                  >
                    Update Password
                  </button>
                  {newPassword.length > 0 && passwordStatus === "success" && (
                    <p className="success-message">Password Updated</p>
                  )}
                  {successStatus === "fail" && (
                    <p className="success-message">Password Not Matching</p>
                  )}

                </>
              )}

              {successStatus === "fail" && (
                <>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="user-id"
                    value={email}
                    onChange={handlerEmailEntry}
                  />
                  {!emailChecking && (
                    <p className="error-messages">
                      Please Enter Valid Email Id
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="user-id"
                    value={password}
                    onChange={handlerPasswordEntry}
                  />
                  {!passwordChecking && (
                    <p className="error-messages">
                      Password should contains minimum 8 Characters
                    </p>
                  )}
                  <button
                    className="login-btn"
                    disabled={btnDisable}
                    onClick={handlerStartFetch}
                  >
                    Continue {logStatus === "Sign Up" ? "Sign Up" : "Log In"}
                  </button>

                  {password.length > 0 &&
                    successStatus === "fail" &&
                    logStatus === "Log In" && (
                      <p className="error-messages">
                        {messageFromFetch === "Incorrect EmailId or Password"
                          ? "Incorrect EmailId or Password"
                          : ""}
                      </p>
                    )}
                  {password.length > 0 &&
                    successStatus === "fail" &&
                    logStatus === "Sign Up" && (
                      <p className="error-messages">
                        {messageFromFetch === "Incorrect EmailId or Password"
                          ? "Incorrect EmailId or Password"
                          : messageFromFetch === "User already exists"
                          ? "User already exists"
                          : ""}
                      </p>
                    )}

                  {successStatus === "success" && (
                    <p className="success-message">Success</p>
                  )}
                </>
              )}

              <div className="line-break">
                <p className="empty-line"></p>
                {successStatus === "fail" && (
                  <p className="empty-line-content"> Or continue with </p>
                )}
                {successStatus === "success" && (
                  <p className="empty-line-content"> Thanks for visiting </p>
                )}
                <p className="empty-line"></p>
              </div>

              {successStatus === "fail" && (
                <button
                  onClick={handlerToggleLogging}
                  className="login-btn google-btn"
                >
                  {logStatus === "Sign Up" ? "Log In" : "Sign Up"}
                </button>
              )}
              {successStatus === "success" && (
                <button
                  onClick={handlerLogOut}
                  className="login-btn google-btn"
                >
                  Log Out
                </button>
              )}
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
