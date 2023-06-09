'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../api/battles.api';
import Link from 'next/link';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Create the submit method.
  const submit = async (e: any) => {

    e.preventDefault();
    
    const user = {
      username: username,
      password: password
    };

    const { data } = await axios.post(`${API_URL}login/`, user, { headers: { 'Content-Type': 'application/json' } })   
    // localStorage.clear();
    localStorage.setItem('token', data.token);
    window.location.href = '/'

  }

  return (
    <div className='h-full bg-white'>
      <div className='class="h-full'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={submit} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="on"
                    required
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
