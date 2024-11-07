import "../components/Airbnb/Airbnb.css";
import Card from "../components/Airbnb/Card";
import Hero from "../components/Airbnb/Hero";
import Navbar from "../components/Airbnb/Navbar";
import data from "../components/Airbnb/data";

export default function Airbnb() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
