import Card from "./Card";
import Header from "./Header";
import "./Travel.css";
import data from "./data";

export default function Travel() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="app">
      <Header />
      <main className="main">{cards}</main>
    </div>
  );
}
