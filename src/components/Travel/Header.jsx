import globe from "../../assets/globe.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={globe} alt="logo" className="header--logo" />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  );
};

export default Header;
