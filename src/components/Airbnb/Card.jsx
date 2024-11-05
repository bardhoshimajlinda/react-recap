import KatieImg from "../../assets/katie-zaferes.png";
import BikeImg from "../../assets/mountain-bike.png";
import StarIcon from "../../assets/star.png";
import WeddingImg from "../../assets/wedding-photography.png";

export default function Card({
  coverImg,
  stats,
  location,
  title,
  price,
  openSpots,
}) {
  const imageMap = {
    "katie-zaferes.png": KatieImg,
    "wedding-photography.png": WeddingImg,
    "mountain-bike.png": BikeImg,
  };

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={imageMap[coverImg]} alt="Cover" className="card--image" />
      <div className="card--stats">
        <img src={StarIcon} alt="Star Icon" className="card--star" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
