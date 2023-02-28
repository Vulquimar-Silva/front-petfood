import "./styles.css";
import GoogleMapReact from "google-map-react";
import Marker from "../marker";

const keyMap = `${process.env.KEY_MAP_GOOGLE}`

const Map = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyDbR0-KMHG7b6aV2mxDIlTwCZwZewfZBSw"
  // })

  // const center = {
  //   lat: -23.561684,
  //   lng: -46.625378
  // };

  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDbR0-KMHG7b6aV2mxDIlTwCZwZewfZBSw" }}
        center={{
          lat: -23.561684,
          lng: -46.625378,
        }}
        defaultZoom={15}
      >

        <Marker lat={-23.561684} lng={-46.625378} />

      </GoogleMapReact>
    </div>
  );
};

export default Map;
