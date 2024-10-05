// src/components/Dashboard/AccountOverview.tsx
import React from 'react';

const AccountOverview: React.FC = () => {
  // Dummy data for illustration purposes
  const balance = 1200.50; // Replace with actual data from your API or state management
  const currency = "USD"; // Replace with dynamic currency if applicable

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold">Account Overview</h2>
      <p className="text-lg">
        Balance: {currency} {balance.toFixed(2)}
      </p>
      {/* Add more account-related information here */}
    </div>
  );
};

export default AccountOverview;
