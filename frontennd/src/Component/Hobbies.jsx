import React from 'react'

export default function Hobbies() {
  return (
    <div className="w-full lg:w-8/12">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Hobbies</h1>
        <p>Select a user to view the hobbie</p>
      </div>
      <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <table
            className="text-left m-4 w-full"
            style={{ borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                  Passion Level
                </th>
                <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                  Hobby
                </th>
                <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-lightest">
                <td className="py-4 px-6 border-b border-grey-light">
                  Conversations
                </td>
                <td className="py-4 px-6 border-b border-grey-light text-center">
                  dvsvs
                </td>
                <td className="py-4 px-6 border-b border-grey-light">
                  Conversations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
