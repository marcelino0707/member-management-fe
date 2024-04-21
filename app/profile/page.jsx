import React from 'react'
import { FaRegEdit } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="mt-14 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-bold">Profile</h1>
            <div class="w-full flex-1 mt-8">
              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text" placeholder="Name" />

                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text" placeholder="ID Card Number" />

                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="date" placeholder="Date Of Birth" />

                <div class="mt-5">
                  <label class="block text-gray-700 text-sm font-medium mb-2" for="gender">Gender</label>
                  <div class="flex items-center justify-around">
                    <div className="flex align-middle">
                      <input class="form-radio h-5 w-5 text-indigo-500 transition duration-150 ease-in-icial-none" type="radio" name="gender" value="male" id="male" />
                      <label class="text-gray-700 font-medium ml-2" for="male">Male</label>
                    </div>
                    <div className="flex align-middle">
                      <input class="form-radio h-5 w-5 text-indigo-500 transition duration-150 ease-in-icial-none" type="radio" name="gender" value="female" id="female" />
                      <label class="text-gray-700 font-medium ml-2" for="female">Female</label>
                    </div>
                  </div>
                </div>

                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text" placeholder="Phone Number" />


                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email" placeholder="Email" />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" />
                <button
                  class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <FaRegEdit
                    size={30}
                  />
                  <span class="ml-3">
                    Edit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
