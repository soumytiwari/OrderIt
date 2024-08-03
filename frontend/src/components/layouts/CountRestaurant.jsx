import React, { useEffect } from 'react'
import { getRestaurants } from '../../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'

export default function CountRestaurant() {
  const dispatch = useDispatch()

  const { loading, error, count } = useSelector((state) => state.restaurants)

  // mom tells you to keep the filled bottle in the fridge
  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  return (
    <div>
      {loading ?
        (<p>Loading Restaurant count...</p>)
        : error ?
          (<p>Error Loading Restaurant count: {error}</p>)
          : (
              <>
                <p className="NumOfRestro">
                  {count} <span className="Restro">Restaurant</span>
                </p>
                <hr />
              </>
          )
      }
    </div>
  )
}
