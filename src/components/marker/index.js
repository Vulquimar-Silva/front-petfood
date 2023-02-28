import "./styles.css";
// import { Link } from "react-router-dom";
import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";


const Marker = () => {

  return (
    <div>
      <img
        src={MarkerIcon}
        alt="Icon Marker"
      />
      <img src="https://dashboard.clubevantagens.com.br/wp-content/uploads/listing-uploads/logo/2022/10/petlove_clubevantagens_logo.jpg" alt="Petshop logo" className="img-marker" />
    </div>
  );
};

export default Marker;

