import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      
        <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Please Login</h2>
          <p className="text-gray-700">You need to be logged in to view your profile.</p>
        </div>
      
    );
  }

  return (
   
      <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user.username}!</h2>
        <p className="text-gray-600">We’re glad to have you back.</p>
      </div>
  );
}

export default Profile;
