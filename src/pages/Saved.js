import React from "react";
import { Outlet } from "react-router-dom";
import PortData from "../components/PortData.js";
import PorfolioCard from '../components/PorfolioCard.js'



const Saved = () => {
  

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8  border border-gray-100 rounded">
      <div className="flex justify-center items-center flex-wrap">
        {
          PortData.productData.map((items, index) => {
            return(
                <PorfolioCard name={items.name} opening={items.opening} closing={items.closing} result={items.result} Bet_Price={items.Bet_Price} Bet_seller={items.Bet_seller} />
            )
          })
        }
      </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Saved;
