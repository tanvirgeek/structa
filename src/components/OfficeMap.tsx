// src/components/OfficeMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { renderToStaticMarkup } from "react-dom/server";
import { JSX } from "react";

type Props = {
  position: [number, number];
  label?: string;
};

function getReactIcon(icon: JSX.Element): L.DivIcon {
  return L.divIcon({
    html: renderToStaticMarkup(icon),
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
}

export default function OfficeMap({
  position,
  label = "Structa Office",
}: Props) {
  const customIcon = getReactIcon(<FaMapMarkerAlt size={40} color="#f97316" />);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position as L.LatLngExpression}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
