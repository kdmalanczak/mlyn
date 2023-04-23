import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapStyle = {
  width: "100%",
  maxWidth: "700px",
  height: "400px",
  margin: "15px auto",
}

const Map = () => {
  const location = {
    lat: 51.514617025247055,
    lng: 17.347073419772517,
  }

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={mapStyle} center={location} zoom={13}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
