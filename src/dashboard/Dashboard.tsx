// src/components/Dashboard/Dashboard.tsx
import React from 'react';
import AccountOverview from './AccountOverview';
import RecentTransactions from './RecentTransactions';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <AccountOverview />
      <RecentTransactions />
      
      {/* Add more components as needed */}
    </div>
  );
};

export default Dashboard;
