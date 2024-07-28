import React from 'react'

export default function Restaurant() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      <div className="card p-3 rounded">
        {/* img, header, address, reatings, reviews */}
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Cavolo-nero-orecchiette-369e36f.jpg?quality=90&webp=true&resize=750,681" alt="goodFOOD" />

        <div className="card-body d-flex flex-column">
            <h5 className="card-tittle">goodFOOD Veg</h5>
            <p className="rest_address">123 Street, Place, City - 999999, State</p>

            <div className="rating-outer">
                <div className="rating-inner"></div>
                    <span id="no_of_reviews">(140 reviews)</span>
            </div>
        </div>
      </div>
    </div>
  )
}
