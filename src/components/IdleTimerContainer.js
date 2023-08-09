import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function IdleTimerContainer() {
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const [isLoggedIn, setIsLoggedId] = useState(true);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const onIdle = () => {
    setmodalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };
  const stayActive = () => {
    setmodalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("user is active");
  };
  const logOut = () => {
    setmodalIsOpen(false);
    setIsLoggedId(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("user has logged out");
  };
  return (
    <div>
      {isLoggedIn ? <h2>Hello Hridoy</h2> : <h2>hello guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You,ve been idle for a while</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}
