import Card from "../components/Travel/Card";
import Header from "../components/Travel/Header";
import "../components/Travel/Travel.css";
import data from "../components/Travel/data";

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
