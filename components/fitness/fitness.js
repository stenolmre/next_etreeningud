import React, { Fragment, useState } from 'react'

import Searchbar from './../utils/searchbar'

const Fitness = () => {
  const [search, setSearch] = useState('')

  return <Fragment>
    <Searchbar fitness onChange={e => setSearch(e.target.value)} placeholder="Otsi treeningut" href={`/fitness?search=${search}`}/>
    <div style={style}>
      Fitness Page
    </div>
  </Fragment>
}

export default Fitness

const style = {
  width: '100%',
  height: 'calc(100vh - 225px)',
  display: 'grid',
  placeItems: 'center',
}
