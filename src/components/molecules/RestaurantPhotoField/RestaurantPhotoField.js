import React from "react"
import { PhotosField, Photo } from "./RestaurantPhotoField.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const RestaurantPhotoField = ({ images }) => (
  <PhotosField>
    {images.map((photo, i) => (
      <GatsbyImage image={photo?.gatsbyImageData} />
      // <Photo src={photo.fluid.src} alt={photo.fluid.src} key={i} />
    ))}
  </PhotosField>
)

export default RestaurantPhotoField
