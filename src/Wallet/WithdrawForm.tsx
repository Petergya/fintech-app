// src/components/Wallet/WithdrawForm.tsx
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const WithdrawForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    // Implement withdrawal logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        {...register('amount', { required: true })}
        placeholder="Amount to withdraw"
        type="number"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-red-500 text-white rounded">
        Withdraw
      </button>
    </form>
  );
};

export default WithdrawForm;
