import React, { useState, useEffect } from 'react'
import Content from './Content'
import Shimmer from './Shimmer'

const Data = () => {
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = () => {
    const filtered = dataM.filter((res) => res.rating > 4.7)

    setFilteredData(filtered)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()
    console.log(json)
    // optional chaining
    setFilteredData(json?.data?.cards)
  }
  // if (filteredData.length === 0) {
  //   return <Shimmer />
  // }
  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="cartPapa">
      <button onClick={handleFilter}>Show Top Restaurants</button>
      <div className="res-container">
        {filteredData.map((res, idx) => (
          <Content key={res.id || idx} resData={res} />
        ))}
      </div>
    </div>
  )
}

export default Data
