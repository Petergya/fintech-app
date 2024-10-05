
// "use client";
// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';

// interface ForgotPasswordFormData {
//   email: string;
// }

// const ForgotPassword: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>();

//   const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
//     console.log("Forgot password request for:", data.email);
//     // Add your logic for handling the forgot password request
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-screen space-y-4 w-4/12 mx-auto ">
//       <div>
//         <h1 className="text-center text-3xl font-extrabold">Forgot Password</h1>
//         <p className="mt-4 text-sm text-center"> 
//           Enter your email to reset your password. We'll send you an email with instructions on how to reset it.
//         </p>
//       </div>
      
//       <input 
//         {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })}
//         placeholder="Email"
//         type="email"
//         className="p-2 border border-gray-300 rounded"
//       />
//       {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded">Reset Password</button>
//     </form>
//   );
// };

// export default ForgotPassword;


// "use client";
// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';

// interface ForgotPasswordFormData {
//   email: string;
// }

// const ForgotPassword: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>();

//   const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
//     console.log("Forgot password request for:", data.email);
//     // Add your logic for handling the forgot password request
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-screen space-y-4 w-4/12 mx-auto">
//       <div>
//         <h1 className="text-center text-3xl font-extrabold">Forgot Password</h1>
//         <p className="mt-4 text-sm text-center"> 
//           Enter your email to reset your password. We'll send you an email with instructions on how to reset it.
//         </p>
//       </div>
      
//       <input 
//         {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })}
//         placeholder="Email"
//         type="email"
//         className="w-full p-2 border border-gray-300 rounded"
//       />
//       {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      
//       <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Reset Password</button>
//     </form>
//   );
// };

// export default ForgotPassword;


"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>();
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [resetError, setResetError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        setResetSuccess("Password reset email sent! Check your inbox.");
        setResetError(null);
      } else {
        throw new Error("Failed to send reset email. Please try again.");
      }
    } catch (error: any) {
      setResetError(error.message);
      setResetSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-screen space-y-4 w-4/12 mx-auto">
      <div>
        <h1 className="text-center text-3xl font-extrabold">Forgot Password</h1>
        <p className="mt-4 text-sm text-center"> 
          Enter your email to reset your password. We'll send you an email with instructions on how to reset it.
        </p>
      </div>
      
      <input 
        {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })}
        placeholder="Email"
        type="email"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Reset Password</button>

      {/* Display success or error messages */}
      {resetSuccess && <p className="text-green-500">{resetSuccess}</p>}
      {resetError && <p className="text-red-500">{resetError}</p>}
    </form>
  );
};

export default ForgotPassword;

