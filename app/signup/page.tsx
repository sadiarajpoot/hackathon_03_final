"use client"
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

import { z } from 'zod';

export default function SignInBox() {
  // State for form values and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Zod schema for validation
  const signUpSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password confirmation is required'),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate data using Zod
    const result = signUpSchema.safeParse(formData);

    if (result.success) {
      console.log('Form submitted successfully:', formData);
      // Proceed with registration logic
    } else {
      // Handle validation errors
      const errorMessages = result.error.format();
      setErrors({
        name: errorMessages.name?._errors.join(' ') || '',
        email: errorMessages.email?._errors.join(' ') || '',
        password: errorMessages.password?._errors.join(' ') || '',
        confirmPassword: errorMessages.confirmPassword?._errors.join(' ') || '',
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
    <div className='h-screen flex items-center justify-center p-10 shadow-md'>
      <div className='bg-[#16202a] text-white flex items-center justify-center flex-col rounded-lg shadow-md'>
        <div className='my-4'>
          <h2 className='text-3xl font-semibold'>Sign Up</h2>
          <p className='mt-2 text-sm text-slate-400'>Carefully Submit Information</p>
        </div>
        <form
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <button className="flex justify-center items-center rounded-full px-12 w-full bg-blue-500 h-10 gap-4 border-2 text-white border-gray-600 mb-4 hover: transition duration-300">
            <FaGoogle style={{ color: "red", fontSize: '20px' }} />
            Sign In with Google
          </button>

          <label htmlFor="name" className="self-start text-gray-700 mt-2 font-semibold">Enter Your Name:</label>
          <input
            className={`mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 ${errors.name ? 'border-red-500' : ''}`}
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label htmlFor="email" className="self-start text-gray-700 mt-2 font-semibold">Email:</label>
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label htmlFor="password" className="self-start text-gray-700 mt-2 font-semibold">Password:</label>
          <input
            className={`mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 ${errors.password ? 'border-red-500' : ''}`}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <label htmlFor="confirmPassword" className="self-start text-gray-700 mt-2 font-semibold">Confirm Password:</label>
          <input
            className={`mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 ${errors.confirmPassword ? 'border-red-500' : ''}`}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-full px-8 py-2 hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
