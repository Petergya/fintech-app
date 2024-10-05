// src/components/Wallet/WalletBalance.tsx
import React from 'react';

const WalletBalance: React.FC = () => {
  const balance = 300.00; // Replace with actual balance

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold">Wallet Balance</h2>
      <p className="text-lg">${balance.toFixed(2)}</p>
    </div>
  );
};

export default WalletBalance;
