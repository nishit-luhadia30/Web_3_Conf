import React from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import BetCard from "../components/BetCard.js";
import data from "../components/Data.js";


const Stock = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <div className="flex justify-center items-center flex-wrap">
        {
          data.productData.map((items, index) => {
            return(
                <BetCard name={items.name} opening={items.opening} closing={items.closing} result={items.result} Bet_Price={items.Bet_Price} Bet_seller={items.Bet_seller} />
            )
          })
        }
      </div>
      <Outlet />
    </section>
  );
};

export default Stock;