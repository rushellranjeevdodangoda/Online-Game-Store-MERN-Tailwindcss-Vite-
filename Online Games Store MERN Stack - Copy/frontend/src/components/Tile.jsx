import React from 'react'

const Tile = ({game}) => {
  return (
    <div><div className="flex justify-between items-center">
    <div>
        <img src={game.imgUrl} alt={game.title} className="w-full object-cover mb-2" />
        <h2 className="text-xl font-semibold">{game.title}</h2>
        <p className="text-purple-500 text-lg font-semibold text-left">{game.price}</p>
    </div>
    <button
      onClick={() => addToCart(game)}
      className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none mt-2"
    >
      Add to Cart
    </button>
  </div></div>
  )
}

export default Tile