import React, { Fragment, useState } from 'react'

import Searchbar from './../utils/searchbar'

const Posts = () => {
  const [search, setSearch] = useState('')

  return <Fragment>
    <Searchbar onChange={e => setSearch(e.target.value)} placeholder="Otsi postitust" href={`/posts?search=${search}`}/>
    <div style={style}>
      Posts Page
    </div>
  </Fragment>
}

export default Posts

const style = {
  width: '100%',
  height: 'calc(100vh - 225px)',
  display: 'grid',
  placeItems: 'center',
}
