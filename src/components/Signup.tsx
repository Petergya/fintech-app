


"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface SignupFormData {
  fullName: string;  // New field for full name
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SignupFormData>();
  const router = useRouter();

  const [signupError, setSignupError] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState<string | null>(null);

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Simulate API call with dummy logic
      if (data.password === data.confirmPassword) {
        setSignupSuccess("Signup successful!");
        setSignupError(null);
        
        // Reset the form after successful signup
        reset();

        // Simulate a delay before navigating to the login page
        setTimeout(() => {
          router.push('/signIn'); // Redirect to login page
        }, 1000);
      } else {
        throw new Error("Passwords do not match");
      }
    } catch (error: any) {
      setSignupError(error.message);
      setSignupSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-4/12">
      <div>
        <h1 className="text-center text-3xl font-extrabold">Sign Up</h1>
      <p className="mt-4 text-sm text-center">
      "Welcome aboard! Sign up today and unlock the full potential of our fintech app. 
      Secure, fast, and designed to simplify your financial journey!"
      </p>
      </div>
      <input 
        {...register('fullName', { required: true })} 
        placeholder="Full Name" 
        type="text" 
        className="p-2 border border-gray-300 rounded" 
      />
      <input 
        {...register('email', { required: true })} 
        placeholder="Email" 
        type="email" 
        className="p-2 border border-gray-300 rounded" 
      />
      <input 
        {...register('password', { required: true })} 
        placeholder="Password" 
        type="password" 
        className="p-2 border border-gray-300 rounded" 
      />
      <input 
        {...register('confirmPassword', { required: true })} 
        placeholder="Confirm Password" 
        type="password" 
        className="p-2 border border-gray-300 rounded" 
      />

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Sign Up</button>

      {/* Display success or error message with slow-motion flash effect */}
      {signupError && <p className="animate-fade text-red-500">{signupError}</p>}
      {signupSuccess && <p className="animate-fade text-green-500">{signupSuccess}</p>}
    </form>
  );
};

export default SignupForm;

