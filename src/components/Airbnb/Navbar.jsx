import logo from "../../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav-logo" />
    </nav>
  );
}
