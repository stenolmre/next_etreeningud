import React from 'react'
import Link from 'next/link'

const Demo = () => {
  return <div className="demo">
    <div className="box"/>
    <div className="box_img">
      <img src="https://etreeningud.ee/media/images/training/e14.jpg" alt=""/>
    </div>
    <h1 className="box_watermark">SMILE</h1>
    <div className="box_navbar">
      <div>
        <img src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,h_113/v1613366877/utils/logo.png" alt="logo"/>
      </div>
      <div>
        <Link href="/">
          <a>Esileht</a>
        </Link>
        <Link href="/fitness">
          <a>Treeningud</a>
        </Link>
        <Link href="/posts">
          <a>Blogi</a>
        </Link>
        <Link href="/#contact">
          <a>Kontakt</a>
        </Link>
      </div>
    </div>
    <h1 className="box_heading">Great smile skyrockets your confidence!</h1>
    <p className="box_subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit, cras duis quis ac ac. Pellentesque suspendisse egestas rhoncus consectetur in purus facilisi ullamcorper massa.</p>
    <Link href="/fitnesss"><a className="box_btn">Treeningud</a></Link>
  </div>
}

export default Demo
