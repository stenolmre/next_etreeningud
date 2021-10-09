import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return <div className="landing">
    <Dots num="20" className="landing_top_dots"/>
    <section>
      <h1>Make your dreams come to you.</h1>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</span>
      <Link href="/fitness"><a className="btn">Alusta täna</a></Link>
    </section>
    <div className="landing_video">
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m6C-QodHeus" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    <Dots num="100" className="landing_bottom_dots"/>
  </div>
}

export default Landing

const Dots = ({ num, className }) => <div className={`${className} dots`}>
  {
    Array.from({ length: num }, (v, i) => i).map((dot, index) => <div className="dot" key={index} />)
  }
</div>
