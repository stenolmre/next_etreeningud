import React from 'react'
import Head from 'next/head'

export default function MetaTags({ title, description, image, url }) {
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content={description ? description : 'Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.'}/>
    <meta name="image" content={image ? image : 'https://res.cloudinary.com/etreeningud/image/upload/c_fill,h_630,q_100,w_1200/v1613922402/iti_fitness_imgs/e14_kyxzau.jpg'}/>
    <meta name="keywords" content="Hiking, Backpaking, Lapland, Bikepacking, Travelling"/>
    <link rel="shortcut icon" type="image/x-icon" href="icon.png" />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description ? description : 'Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.'}/>
    <meta property="og:image" content={image ? image : 'https://res.cloudinary.com/etreeningud/image/upload/c_fill,h_630,q_100,w_1200/v1613922402/iti_fitness_imgs/e14_kyxzau.jpg'}/>
    <meta property="og:url" content={url}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description ? description : 'Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.'}/>
    <meta name="twitter:image" content={image ? image : 'https://res.cloudinary.com/etreeningud/image/upload/c_fill,h_630,q_100,w_1200/v1613922402/iti_fitness_imgs/e14_kyxzau.jpg'}/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>
}
