import React, { useEffect, useState } from 'react'
import { createHobby, fetchHobbies, removeHobby } from '../utils/services'

export default function Hobbies({ userId }) {
  const [hobbies, sethobbies] = useState([])
  const [passionType, setPassionType] = useState('')
  const [hobby, setHobby] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    fetchHobby()
  }, [userId])

  const fetchHobby = async () => {
    if (!userId) return
    const hobbies = await fetchHobbies(userId)
    sethobbies(hobbies)
  }

  const create = async () => {
    if (!hobby || !passionType || !year) {
      alert('Please enter all fields to create hobby')
      return
    }
    const data = await createHobby(hobby, passionType, year, userId)
    console.log(data, data.statusCode)
    if (data) {
      alert('Hobbie added successfully')
      sethobbies((hobbies) => [...hobbies, data])
    }
  }

  const deleteHobby = async (hid) => {
    if (!hid) return
    const result = await removeHobby(hid)
    if (result) {
      alert('Hobbie deleted successfully')
      fetchHobby()
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Hobbies</h1>
        <p>Select a user to view the hobbie</p>
      </div>
      <div className="mt-6">
        <div className="px-10 py-6 bg-white rounded-lg shadow-md">
          <table
            className="text-left m-4 w-full"
            style={{ borderCollapse: 'collapse' }}
          >
            <thead>
              {userId && (
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
                  <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light"></th>
                </tr>
              )}
            </thead>
            <tbody>
              <tr className="hover:bg-blue-lightest">
                <td className="py-4 px-6 border-b border-grey-light">
                  <select
                    type="text"
                    onChange={(e) => setPassionType(e.target.value)}
                    placeholder="Enter Passion Type"
                    className="w-full px-4 py-2 border border-gray-300"
                  >
                    <option value={''}>Enter Passion Type</option>
                    <option value={'high'}>High</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'low'}>Low</option>
                  </select>
                </td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <input
                    type="text"
                    onChange={(e) => setHobby(e.target.value)}
                    placeholder="Enter Hobbie Title"
                    className="w-full px-4 py-2 border border-gray-300"
                  />
                </td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <input
                    type="number"
                    placeholder="Enter Years"
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300"
                  />
                </td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button
                    onClick={create}
                    type="button"
                    className="px-2 py-1 bg-blue-600 text-gray-100 font-bold rounded hover:bg-blue-500"
                  >
                    Create
                  </button>
                </td>
              </tr>
              {hobbies.length ? (
                hobbies.map((h, _) => {
                  return (
                    <tr key={_} className="hover:bg-blue-lightest">
                      <td className="py-4 px-6 border-b border-grey-light">
                        {h.passionType}
                      </td>
                      <td className="py-4 px-6 border-b border-grey-light">
                        {h.title}
                      </td>
                      <td className="py-4 px-6 border-b border-grey-light">
                        {h.year} years
                      </td>
                      <td className="py-4 px-6 border-b border-grey-light">
                        <button
                          onClick={() => deleteHobby(h._id)}
                          type="button"
                          className="px-2 py-1 bg-red-600 text-gray-100 font-bold rounded hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr className="hover:bg-blue-lightest">
                  <td
                    className="py-4 px-6 border-b border-grey-light"
                    colSpan="3"
                  >
                    No Hobbies Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
