import React, { useState } from 'react'

import Header from './header'

const Monthly = ({ analytics }) => {
  const [year, setYear] = useState(2021)

  const years = []
  const startingYear = 2021
  const endingYear = new Date().getFullYear()

  for (var i = startingYear; i < endingYear + 1; i++) {
    years.push(i);
  }

  const monthNames = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'Sepember', 'Oktoober', 'November', 'Detsember']

  const months = []
  const startingMonth = 0

  for (var i = startingMonth; i < 12; i++) {
    months.push(i);
  }

  return <div style={{ marginTop: '100px' }}>
    <h3>Statistika Kuude Lõikes</h3>
    {
      years.map(el => <span className={el === year ? 'inset_neumorphism admin_analytic_year_selection' : 'neumorphism admin_analytic_year_selection'} onClick={() => setYear(el)}>{el}</span>)
    }
    <Header index="Kuu"/>
    {
      analytics && months.map((el, i) => <div key={i} className="admin_row_analytics admin_row admin_list">
        <p>{monthNames[el]}</p>
        <p>{analytics.filter(elem => elem.category === 'landing').filter(_el => new Date(_el.createdAt).getFullYear() === 2021).filter(_elem => new Date(_elem.createdAt).getMonth() === el).length}</p>
        <p>{analytics.filter(elem => elem.category === 'fitness').filter(_el => new Date(_el.createdAt).getFullYear() === 2021).filter(_elem => new Date(_elem.createdAt).getMonth() === el).length}</p>
        <p>{analytics.filter(elem => elem.category === 'blog').filter(_el => new Date(_el.createdAt).getFullYear() === 2021).filter(_elem => new Date(_elem.createdAt).getMonth() === el).length}</p>
      </div>)
    }
  </div>
}

export default Monthly
