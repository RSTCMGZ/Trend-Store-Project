/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./Offcanvas.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Offcanvas;
