"use client"
import React, { useState } from 'react';

const ProfileSettings = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      alert('Password changed successfully');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-[#D0B473] w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="/profile.png" 
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Profile Settings</h1>

        {/* Fake Email Section */}
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-600">Email</div>
          <p className="text-lg font-semibold text-gray-800">imeklnwza@gmail.com</p>
        </div>

        {/* Change Password Section */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Current Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePasswordChange}
            className="w-full bg-[#40121E] text-white py-2 rounded-md focus:outline-none hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
