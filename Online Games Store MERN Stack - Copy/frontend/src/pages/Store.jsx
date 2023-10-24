import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Store = ({ addToCart }) => {
const [gamesList, setGamesList] = useState([]);
const [cartGamesList, setCartGamesList] = useState([]);
const [toggleCartView, setToggleCartView] = useState(false);

const cart = [
  {
    _id: 1,
    title: 'Assassins Creed Odyssey',
    image: 'public/images/game01.jpg',
    price: 39.99,
  },
  {
    _id: 2,
    title: 'Call of Duty Modern Warfare 2',
    image: 'public/images/game02.jpg',
    price: 49.99,
  },
];

function addToCart(game){
  cartGamesList.push(game);
  setCartGamesList(cartGamesList);
  console.log(cartGamesList);
}

function showCart(){
  setToggleCartView(true);
}

useEffect(() => {
  let fetchedGames = [];

  async function loadGames() {
    try {
      await axios.get("http://localhost:5000/api/games/").then((respose)=>{fetchedGames = respose.data});
      //console.log(fetchedGames);
      setGamesList(fetchedGames);
      //console.log(fetchedGames);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  loadGames();
}, []);

  const storeStyle = {
    backgroundImage: 'url("public/images/img04.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-4" style={storeStyle}>
      <h1 className="text-3xl font-semibold text-white mb-4">Game Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gamesList.map((game) => (
          <div key={game._id} className="bg-gray-200 rounded-lg shadow-md p-4 text-center">
            <img src={game.image} alt={game.title} className="w-full object-cover mb-2" />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{game.title}</h2>
                <p className="text-purple-500 text-lg font-semibold text-left">{game.price}</p>
              </div>
              <button
                onClick={() => addToCart(game)}
                className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none mt-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/cart" onClick={showCart}>
          <button onClick={showCart} className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-green-500 focus:outline-none mt-2">
            Go to Cart 
          </button>
        </Link>
      </div>
      <div>
        {toggleCartView && <Cart gameList={cart}></Cart>}
      </div>
    </div>
  );
};

export default Store;
