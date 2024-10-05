

"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import for app directory
import Nav from "@/components/Nav";

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Correct usage

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      const token = new URLSearchParams(window.location.search).get('token'); // Get token from URL
      await axios.post('/api/reset-password', { password, token });
      alert('Password updated successfully.');
      router.push('/login'); // Redirect to login page after successful reset
    } catch (error) {
      alert('Failed to reset password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 mb-4 w-full max-w-xs"
        />
        <button
          onClick={handleResetPassword}
          disabled={isLoading}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${isLoading ? 'opacity-50' : ''}`}
        >
          {isLoading ? 'Resetting Password...' : 'Reset Password'}
        </button>
      </div>
    </div>
  );
}
