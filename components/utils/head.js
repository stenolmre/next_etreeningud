import React from 'react'
import Head from 'next/head'

export default function MetaTags({ title, description, image, url }) {
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content={description}/>
    <meta name="image" content={image}/>
    <meta name="keywords" content="Hiking, Backpaking, Lapland, Bikepacking, Travelling"/>
    <link rel="shortcut icon" type="image/x-icon" href="icon.png" />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={image}/>
    <meta property="og:url" content={url}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    <meta name="twitter:image" content={image}/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>
}
