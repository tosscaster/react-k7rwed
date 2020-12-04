import React, { useRef, useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import * as L from "leaflet";

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
  });
}

function MapExample(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(e) {
    setSelectedIndex(e.target.options.index)
  }

  function getMarkerIcon(index) {
    if(index === selectedIndex)
          return createIcon("https://user-images.githubusercontent.com/1596072/85960867-3baf9700-b9af-11ea-854e-7ef6e656d447.png");
    return createIcon("https://user-images.githubusercontent.com/1596072/85960806-0145fa00-b9af-11ea-91ab-a107d0a64b66.png");
  }

  return (
    <Map center={props.center} zoom={props.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.data.map((item, index) => (
        <Marker
          key={index}
          index={index}
          position={item.position}
          icon={getMarkerIcon(index)}
          onclick={handleClick}
        />
      ))}
    </Map>
  );
}

export default MapExample;

