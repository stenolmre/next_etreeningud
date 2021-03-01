import React, { Fragment } from 'react'

import Header from './header'

const Yearly = ({ analytics }) => {
  const years = []
  const startingYear = 2021
  const endingYear = new Date().getFullYear()

  for (var i = startingYear; i < endingYear + 1; i++) {
    years.push(i);
  }

  return <Fragment>
    <h3>Statistika Aastate Lõikes</h3>
    <Header index="Aasta"/>
    {
      analytics && years.map((el, i) => <div key={i} className="admin_row_analytics admin_row admin_list">
        <p>{el}</p>
        <p>{analytics.filter(elem => elem.category === 'landing').filter(_el => new Date(_el.createdAt).getFullYear() === el).length}</p>
        <p>{analytics.filter(elem => elem.category === 'fitness').filter(_el => new Date(_el.createdAt).getFullYear() === el).length}</p>
        <p>{analytics.filter(elem => elem.category === 'blog').filter(_el => new Date(_el.createdAt).getFullYear() === el).length}</p>
      </div>).reverse()
    }
  </Fragment>
}

export default Yearly
