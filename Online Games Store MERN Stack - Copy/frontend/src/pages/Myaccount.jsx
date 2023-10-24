import React from 'react';

const Myaccount = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url("/images/myaccount.jpg")' }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">My Account Details</h2>
        <form className="w-full max-w-sm space-y-4 mx-auto">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">Username:</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email Address:</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-white">Telephone Number:</label>
            <input type="tel" id="telephone" name="telephone" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-white">Birth Date:</label>
            <input type="date" id="birthdate" name="birthdate" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover-bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Myaccount;
