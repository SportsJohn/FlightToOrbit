import React, { useEffect, useState } from "react";
import { icon } from "leaflet";
import { MapContainer as Map, TileLayer, Marker } from "react-leaflet";
import stationIcon from "../assets/iss-station.png";
import axios from "axios";

function Locationtracker() {
  const satellite = new icon({
    iconUrl: stationIcon,
    iconSize: [35, 35],
  });

  const ISS_url = "http://api.open-notify.org/iss-now.json";
  let firstTime = true;
  let initialCoordinates = [0, 0];

  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [intervalID, setIntervalID] = useState(null);

  useEffect(() => {
    updateMap();

    setIntervalID(setInterval(updateMap, 2000));
    return () => clearInterval(intervalID);
  }, []);

  function updateMap() {
    axios.get(ISS_url).then((response) => {
      console.log(response.data.iss_position.longitude);
      const coordinates = {
        latitude: response.data.iss_position.latitude,
        longitude: response.data.iss_position.longitude,
      };

      setCoordinates(coordinates);

      // if (firstTime) {
      //   initialCoordinates = [
      //     response.data.iss_position.latitude,
      //     response.data.iss_position.longitude,
      //   ];
      //   firstTime = false;
      // }
    });
  }

  return (
    <div>
      <h1> Where is the ISS?</h1>

      <p>
        Latitude: <span id="lat">{coordinates.latitude}</span>
        <br />
        Longtitude: <span id="lon">{coordinates.longitude}</span>
      </p>

      <Map
        // [initialCoordinates[0], initialCoordinates[1]
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          position={[coordinates.latitude, coordinates.longitude]}
          icon={satellite}
        />
      </Map>
    </div>
  );
}

export default Locationtracker;
