import React from 'react';

const BetCard = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex m-5">
      <div className="bg-gray-200 shadow-md rounded-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Asset Address: </label>
            <input className='p-1 text-white border-2 border-white bg-gray-200 rounded mx-2' type='text' placeholder='Enter the address' />
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name: </label>
            <label className='text-cyan mx-2'>{props.name}</label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Symbol: </label>
            <label className='text-cyan mx-2'></label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Opening Time: </label>
            <label className='text-cyan mx-2'>{props.opening}</label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Closing Time: </label>
            <label className='text-cyan mx-2'>{props.closing}</label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Result Time: </label>
            <label className='text-cyan mx-2'>{props.result}</label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Bet Price:</label>
            <label className='text-cyan mx-2'>{props.Bet_Price}</label>
          </div>
          <div className="mb-2 flex font-bold">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Bet Seller: </label>
            <label className='text-cyan mx-2'>{props.Bet_seller}</label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-cyan hover:bg-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BetCard;
