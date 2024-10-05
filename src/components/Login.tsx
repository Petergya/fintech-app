

// // src/components/Authentication/LoginForm.tsx
// "use client"
// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// const LoginForm: React.FC = () => {
//   const { register, handleSubmit, reset } = useForm<LoginFormData>();
//   const router = useRouter();
  
//   const [loginError, setLoginError] = useState<string | null>(null);
//   const [loginSuccess, setLoginSuccess] = useState<string | null>(null);

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       // Simulate API call with dummy logic
//       if (data.email === "test@example.com" && data.password === "password123") {
//         setLoginSuccess("Login successful!");
//         setLoginError(null);
        
//         // Reset the form after successful login
//         reset();

//         // Simulate a delay before navigating to the dashboard
//         setTimeout(() => {
//           router.push('/dashboard');
//         }, 1000);
//       } else {
//         throw new Error("Invalid email or password");
//       }
//     } catch (error: any) {
//       setLoginError(error.message);
//       setLoginSuccess(null);
//     }
//   };

//   useEffect(() => {
//     if (loginSuccess || loginError) {
//       const timeout = setTimeout(() => {
//         setLoginError(null);
//         setLoginSuccess(null);
//       }, 5000); 

//       return () => clearTimeout(timeout);
//     }
//   }, [loginSuccess, loginError]);

//   const handleForgotPassword = () => {
//     router.push('/forgot-password'); 
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-4/12 mx-auto">
//       <div>
//         <h1 className="text-center text-3xl font-extrabold">Login</h1>
//         <p className="mt-4 text-sm text-center">
//           Welcome! Log in to explore and experience the full power of our fintech app. 
//           Manage your finances with ease and stay in control—right at your fingertips!
//         </p>
//       </div>
      
//       <input 
//         {...register('email', { required: true })} 
//         placeholder="Email" 
//         type="email" 
//         className="p-2 border border-gray-300 rounded" 
//       />
//       <input 
//         {...register('password', { required: true })} 
//         placeholder="Password" 
//         type="password" 
//         className="p-2 border border-gray-300 rounded" 
//       />
      
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
      
//       {/* Forgot password link */}
//       <div className="text-center">
//         <button
//           type="button"
//           onClick={handleForgotPassword}
//           className="text-blue-500 hover:underline"
//         >
//           Forgot Password?
//         </button>
//       </div>
      
//       {/* Display success or error message */}
//       {loginError && <p className="animate-fade text-red-500">{loginError}</p>}
//       {loginSuccess && <p className="animate-fade text-green-500">{loginSuccess}</p>}
//     </form>
//   );
// };

// export default LoginForm;


// src/components/Authentication/LoginForm.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormData>();
  const router = useRouter();
  
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate API call with dummy logic
      if (data.email === "test@example.com" && data.password === "password123") {
        setLoginSuccess("Login successful!");
        setLoginError(null);
        
        // Reset the form after successful login
        reset();

        // Simulate a delay before navigating to the dashboard
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: any) {
      setLoginError(error.message);
      setLoginSuccess(null);
    }
  };

  useEffect(() => {
    if (loginSuccess || loginError) {
      const timeout = setTimeout(() => {
        setLoginError(null);
        setLoginSuccess(null);
      }, 5000); 

      return () => clearTimeout(timeout);
    }
  }, [loginSuccess, loginError]);

  const handleForgotPassword = () => {
    router.push('/forgotPassword');  // This routes to the forgot-password page
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-4/12 mx-auto">
      <div>
        <h1 className="text-center text-3xl font-extrabold">Login</h1>
        <p className="mt-4 text-sm text-center">
          Welcome! Log in to explore and experience the full power of our fintech app. 
          Manage your finances with ease and stay in control—right at your fingertips!
        </p>
      </div>
      
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
      
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
      
      {/* Forgot password link */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-blue-500 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      
      {/* Display success or error message */}
      {loginError && <p className="animate-fade text-red-500">{loginError}</p>}
      {loginSuccess && <p className="animate-fade text-green-500">{loginSuccess}</p>}
    </form>
  );
};

export default LoginForm;


