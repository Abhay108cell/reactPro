import React, { useEffect, useState } from "react";

export default function OnlineDelivery() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto  mb-[100px] ">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top Restaurant chains in Meerut
        </div>
      </div>
    </div>
  );
}
