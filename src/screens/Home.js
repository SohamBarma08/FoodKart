import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
    });
    response = await response.json();
    setfoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {
        foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div>
                  <div key={data.id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== []? foodItem.filter(
                    (items)=> items.CategoryName === data.CategoryName).map(filterItems => {
                    return(
                      <div key ={filterItems.id}>
                        <Card></Card>
                      </div>
                    )
                  }):<div>No Such Data Found</div>}
                </div>
              )
            }): <div>No Such Data Found</div>}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}