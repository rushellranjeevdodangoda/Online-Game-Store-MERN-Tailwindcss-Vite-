/*import React, { useEffect, useState } from 'react';

const Cart = ({list}) => {


  //const [toggleViewState, setToggleViewState] = useState(true);

  useEffect(console.log(list),[]);


  // Sample cart data (you can replace this with your cart data)
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Assassins Creed Odyssey',
      imageUrl: 'public/images/game01.jpg',
      price: 39.99,
    },
    {
      id: 2,
      name: 'Call of Duty Modern Warfare 2',
      imageUrl: 'public/images/game02.jpg',
      price: 49.99,
    },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4" style={{ backgroundImage: 'url("/images/Img04.jpg")', backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-semibold text-white mb-4">My Cart</h1>
      {gameList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {props.map((item) => (
            <div key={item._id} className="bg-white rounded-md shadow-md p-2 mb-4 flex items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-2" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-green-500 text-sm font-semibold">{item.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-2xl text-green-500 font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xl text-white font-semibold mb-4">Do you wish to proceed?</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none mr-4">
              Yes, I want to pay now.
            </button>
            <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
              No, I will Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({setToggleState}) => {
  // Sample cart data (you can replace this with your cart data)
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Assassins Creed Odyssey',
      imageUrl: 'public/images/game01.jpg',
      price: 39.99,
    },
    {
      id: 2,
      name: 'Call of Duty Modern Warfare 2',
      imageUrl: 'public/images/game02.jpg',
      price: 49.99,
    },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4" style={{ backgroundImage: 'url("/images/Img04.jpg")', backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-semibold text-white mb-4">My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-md shadow-md p-2 mb-4 flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-2" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-green-500 text-sm font-semibold">{item.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-2xl text-green-500 font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xl text-white font-semibold mb-4">Do you wish to proceed?</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none mr-4">
              Yes, I want to pay now.
            </button>
            <Link to="/Store">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
              No, I will Continue Shopping
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

