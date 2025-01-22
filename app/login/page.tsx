"use client"


import React, { useState } from 'react';
import { z } from 'zod';

export default function LogInBox() {
  // State to store form values and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Zod schema for validation
  const loginSchema = z.object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate data using Zod
    const result = loginSchema.safeParse(formData);

    if (result.success) {
      console.log('Form submitted successfully:', formData);
      // Proceed with the login logic
    } else {
      // Handle validation errors
      const errorMessages = result.error.format();
      setErrors({
        email: errorMessages.email?._errors.join(' ') || '',
        password: errorMessages.password?._errors.join(' ') || '',
      });
    }
  };

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center p-10">
      <div className="bg-[#16202a] text-white flex items-center justify-center flex-col rounded-lg shadow-md">
        <div className="my-4">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="mt-2 text-sm text-slate-400">Carefully Submit Information</p>
        </div>
        <form
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="self-start text-gray-700 mt-2 font-semibold">
            Email Address:
          </label>
          <input
            className={`mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} {/* Error message for email */}

          <label htmlFor="password" className="self-start text-gray-700 mt-2 font-semibold">
            Password:
          </label>
          <input
            className={`mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 ${errors.password ? 'border-red-500' : ''}`}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} {/* Error message for password */}

          <label htmlFor="remember" className="ml-20 text-blue-500">
            Forget Password?
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-full px-8 py-2 mt-2 hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <h4 className="text-slate-600 text-sm mt-3">
            Not a member? <span className="text-blue-700">Sign Up Now</span>
          </h4>
        </form>
      </div>
    </div>
  );
}
