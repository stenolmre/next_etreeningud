import React, { Fragment } from 'react'
import Head from '@c/utils/head'

import Layout from '@c/layout'

const Index = () => {
  return <Fragment>
    <Head title="eTreeningud" url="https://etreeningud.ee"/>
    <Layout>
      <div className="cards_container">
        {
          Array.from(Array(20).keys()).map(el => <div className="_card">
            <div className="img" style={{ backgroundImage: `url('https://images.pexels.com/photos/9135861/pexels-photo-9135861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}} alt="png" />
            <div className="h3">
              How to make the perfect morning coffee, according to Science.
            </div>
            <div className="_card_footer">
              <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="png"/>
              <div>
                <span>Kiyoko Yoshi</span>
                <span>Jan 16 2021</span>
              </div>
            </div>
          </div>)
        }
      </div>
    </Layout>
  </Fragment>
}

export default Index
