export default function Header(props) {
  return (
    <>
      <div className="w3-top">
        <div style={{ backgroundColor: '#f8f8ff' }} className="w3-bar w3-card" id="myNavbar">
          <a href="#!" className="w3-bar-item-logo my-icon bolder">CS</a>
          <div className="w3-right w3-hide-small">
            <a href="#!" className="w3-bar-item w3-button" onClick={props.toggleLogin}>Login</a>
            <a href="#!" className="w3-bar-item w3-button" onClick={props.toggleContact}>Contact</a>
          </div>
          <a href="#!" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={props.handleOpen}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </>
  );
}