import React from 'react'

const Dots = ({ num, className }) => <div className={`${className} dots`}>
  {
    Array.from({ length: num }, (v, i) => i).map((dot, index) => <div className="dot" key={index} />)
  }
</div>

export default Dots
