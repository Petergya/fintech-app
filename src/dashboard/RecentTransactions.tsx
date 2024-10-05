// src/components/Dashboard/RecentTransactions.tsx
import React from 'react';

const RecentTransactions: React.FC = () => {
  // Dummy data for illustration purposes
  const transactions = [
    { id: 1, type: 'Deposit', amount: 200.00, date: '2024-10-01' },
    { id: 2, type: 'Withdrawal', amount: 50.00, date: '2024-10-02' },
    { id: 3, type: 'Payment', amount: 150.00, date: '2024-10-03' },
  ];

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <ul className="space-y-2">
        {transactions.map(transaction => (
          <li key={transaction.id} className="flex justify-between">
            <span>{transaction.type}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <span>{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
