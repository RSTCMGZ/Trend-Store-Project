/* eslint-disable react/prop-types */
import "./Offcanvas.css";

// eslint-disable-next-line no-unused-vars
const Offcanvas = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Offcanvas;
