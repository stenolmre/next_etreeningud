import React, { Fragment, useState } from 'react'

export function AddRating({ action, dispatch, id, style }) {
  const [ratingData, setRatingData] = useState({ rating: null })
  const [message, setMessage] = useState('')
  const [addRating, setAddRating] = useState(true)
  const { rating } = ratingData

  function setRating() {
    action(dispatch, id, { rating: ratingData.rating }, () => setMessage('Aitäh tagasiside eest!'), () => setMessage('Ups. Midagi läks valesti, palun proovige uuest.'))
    setAddRating(false)

    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return <Fragment>
    {
      addRating
        ? <div className="rating">
            {
              [...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return <label key={i}>
                  <input type="radio" name="rating" value={ratingValue} onClick={setRating}/>
                  <i className={ratingValue <= rating ? 'fas fa-star gold' : `fas fa-star ${style || 'gray'}`} onMouseEnter={ () => setRatingData({ ...ratingData, rating: ratingValue }) } onMouseLeave={ () => setRatingData({ ...ratingData, rating: null }) }/>
                </label>
              })
            }
          </div>
        : <div className="rating">
            {
              [...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return <label key={i}>
                  <input type="radio" name="rating" value={ratingValue} />
                  <i className={ratingValue <= rating ? 'fas fa-star gold' : `fas fa-star ${style || 'gray'}`}/>
                </label>
              })
            }
            <p>{message}</p>
          </div>
    }

    <style jsx>{`
      .rating {
        z-index: 100;
      }

      .gold {
        color: #ffc107
      }

      .gray {
        color: rgba(33, 33, 33, .2)
      }

      .rating input[type = 'radio'] {
        display: none;
      }

      .rating label {
        padding: 0 2px;
        font-size: 1.2rem;
        cursor: pointer;
      }

      .rating label:nth-of-type(1) {
        margin-left: -3px;
      }

      .rating p {
        font-size: .875rem;
        font-weight: 600;
        color: rgb(19, 95, 233);
      }
    `}</style>
  </Fragment>
}

export function ShowRating({ rating }) {
  return <div className="rating">
    {
      [...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return <label key={i}>
          <input type="radio" name="rating" value={ratingValue}/>
          <i className={ratingValue <= rating ? 'fas fa-star gold' : 'fas fa-star gray'}/>
        </label>
      })
    }
    <style jsx>{`
      .gold {
        color: #ffc107
      }

      .gray {
        color: rgba(33, 33, 33, .2)
      }

      .rating input[type = 'radio'] {
        display: none;
      }

      .rating label {
        padding: 0 2px;
        font-size: .75rem;
        cursor: pointer;
      }

      @media (max-width: 420px) {
        .rating label {
          font-size: .875rem;
        }
      }

      .rating label:nth-of-type(1) {
        margin-left: -3px;
      }

      .rating p {
        font-size: .875rem;
        font-weight: 600;
        color: rgb(19, 95, 233);
      }
    `}</style>
  </div>
}
