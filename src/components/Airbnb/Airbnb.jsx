import "./Airbnb.css";
import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";
import data from "./data";

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
