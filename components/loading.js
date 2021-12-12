import React, { Fragment } from 'react'

const generateArray = num => {
  return Array.from(Array(num).keys())
}

const LoadingCards = ({ num = 20 }) => {
  return <Fragment>
    {
      generateArray(num).map(card => <div key={card} className={`loading_card loading_card_${card}`}>
        <div className="loading_ad_image"/>
        <div className="loading_ad_title"/>
        <div className="loading_ad_hashtags"/>
        <section>
          <div className="loading_ad_author_image"/>
          <div className="loading_ad_author_name"/>
        </section>
      </div>)
    }
  </Fragment>
}

const LoadingAd = () => {
  return <Fragment>
    {
      generateArray(5).map(ad => <div key={ad} className={`loading_ad loading_ad_${ad}`}>
        <div className="loading_ad_image"/>
        <div className="loading_ad_title"/>
        <div className="loading_ad_hashtags"/>
        <section>
          <div className="loading_ad_author_image"/>
          <div className="loading_ad_author_name"/>
        </section>
      </div>)
    }
  </Fragment>
}

export { LoadingCards, LoadingAd }
