import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Searchbar = ({ onChange, placeholder, href, fitness }) => {
  const router = useRouter()

  return <div className={fitness ? 'searchbar fitness_searchbar' : 'searchbar'}>
    <div>
      <input onChange={onChange} placeholder={placeholder}/>
      <button onClick={() => router.push(href)}>
        <i className="fas fa-search"/>
      </button>
    </div>
    {
      fitness && <div className="searchbar_categories">
        <Category all name="Kõik" icon="fas fa-grip-horizontal" href="/fitness"/>
        <Category name="HIIT" icon="fas fa-heartbeat" category="hiit"/>
        <Category name="Jõud" icon="fas fa-dumbbell" category="jõud"/>
        <Category name="Mobility" icon="fas fa-spa" category="mobility"/>
        <Category name="Jooga" icon="fas fa-peace" category="jooga"/>
      </div>
    }
  </div>
}

export default Searchbar

const Category = ({ href, icon, name, all, category }) => {
  const { query } = useRouter()

  return <Link href={all ? href : `/fitness?category=${category}`}><a className="searchbar_category">
    {
      all
        ? <i className={!query.category ? `${icon} inset_neumorphism` : `${icon} neumorphism`}/>
        : <i className={query.category === category ? `${icon} inset_neumorphism` : `${icon} neumorphism`}/>
    }
    <p>{name}</p>
  </a></Link>
}
