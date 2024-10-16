import React from 'react'

export default function OnlineDelivery() {
  const [data,setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains')
    const apiData = await response.json()
    setData(apiData)
  }

  useEffect(
    () => {
      fetchTopRestaurant()
    },[]
  )


  return (
    <div>
      
    </div>
  )
}
