import Geirangerfjord from "../../assets/geirangerfjord.png";
import MountFuji from "../../assets/mount-fuji.jpg";
import SydneyOperaHouse from "../../assets/sydney-opera-house.png";

export default function Card(props) {
  const imageMap = {
    "mount-fuji.jpg": MountFuji,
    "sydney-opera-house.png": SydneyOperaHouse,
    "geirangerfjord.png": Geirangerfjord,
  };

  return (
    <div className="card-travel">
      <img
        src={imageMap[props.imageUrl]}
        alt="location"
        className="travel--image"
      />
      <div className="travel--info">
        <div className="travel--location">
          <span className="travel--country">📍{props.location}</span>
          <a
            href={props.googleMapsUrl}
            className="travel--map-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="travel--title">{props.title}</h2>
        <p className="travel--dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="travel--description">{props.description}</p>
      </div>
    </div>
  );
}
