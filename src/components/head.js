import * as React from "react"

export default function Head({ title, description, image }) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&family=Playball&display=swap"
        rel="stylesheet"
      />
      {/* <link rel="icon" href={favicon} /> */}
    </>
  )
}
