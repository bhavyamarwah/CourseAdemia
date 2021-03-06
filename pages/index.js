import Head from 'next/head'
import Image from 'next/image'
// import React, { useEffect } from "react";
import Router from "next/router";
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validateError, setValidateError] = useState()
  const onSubmit = (e) => {
    if (validateError) {
      return
    } else {
      e.preventDefault();
      Router.push("/home");
    }
  }
  useEffect(() => {
    if (email.length == 0) {
      setValidateError("* Email is required")
    } else {
      setValidateError("")
    }
  }, [email])
  useEffect(() => {
    if (password.length == 0) {
      setValidateError("* Password is required")
    } else {
      setValidateError("")
    }
  }, [password])
  return (
    <div className="bg-indigo-100 flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Log In Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mt-10 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to CourseAdemia
        </h1>

        <p className="mt-5 text-2xl">
          Get Started by Logging In!
        </p>

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Log In to CourseAdemia</h1>
            </div>
            <form className="lg:w-1/2 md:w-1/2 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    {/* <label for="email" className="leading-7 text-sm text-gray-600">Email</label> */}
                    <input required placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <input required minLength={8} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={(e) => onSubmit(e)} > Log In</button>

                </div>
              </div>
            </form>
            <p className='p-2 w-full pt-2 mt-5'>If you haven't already registered, register here!</p>
            <a className="text-indigo-500" href="/register">Register Now</a>
          </div>
        </section>

      </main>

      <footer className="border-t-2 border-indigo-200 bg-indigo-200 w-full text-gray-600 body-font">
        <div className="px-5 py-8  flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">CourseAdemia</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>

        </div>
      </footer>

    </div>
  )
}

export default Home
