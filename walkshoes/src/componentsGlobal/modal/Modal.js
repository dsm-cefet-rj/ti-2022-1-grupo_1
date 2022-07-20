import React from "react";
import "./Modal.css";
import qrCode from "../../assets/QrCodePix.jpg.jpeg";

function Modal({ setOpenModal }) {
  return (
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Scaneie o código abaixo</h1>
        </div>
        <div className="body">
        <img src={qrCode} alt="qrCode" />
        </div>
        <div className="footer">
        </div>
      </div>
  );
}

export default Modal;