
// src/components/Wallet/FundWalletForm.tsx
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const FundWalletForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    // Implement fund wallet logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        {...register('amount', { required: true })}
        placeholder="Amount to fund"
        type="number"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Fund Wallet
      </button>
    </form>
  );
};

export default FundWalletForm;
