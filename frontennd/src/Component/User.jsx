import React, { useEffect } from 'react'
import { useState } from 'react'
import { createUsers, fetchUsers } from '../utils/services'

export default function User({ dispatchUser }) {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [selected, setSelected] = useState('')

  const colors = [
    'red',
    '2A0672',
    'ffcc33',
    'C9CC3F',
    '5F8575',
    '408080',
    '1959A8',
    '630330',
  ]
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const users = await fetchUsers()
    setUsers(users)
  }

  const create = async () => {
    if (!name) {
      alert('Please enter user name to add ')
      return
    }
    const data = await createUsers(name)
    if (data.statusCode == 200) {
      alert('User added successfully')
      this.fetch()
    }
  }

  const selectUser = (id) => {
    setSelected(id)
    dispatchUser(id)
  }

  return (
    <div className="px-8">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Users</h1>
      <div className="flex flex-col bg-white max-w-sm px-6 py-4  rounded-lg shadow-md">
        <ul className="-mx-4">
          <li className="mb-5 ">
            <div className="text-black bg-white flex items-left justify-left w-full">
              <div className="border rounded flex w-full justify-betweens">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2"
                  placeholder="Enter User name (e.g. Livello)"
                />
                <button
                  onClick={create}
                  className="flex items-center justify-center px-4 border-l"
                >
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 45.402 45.402"
                    style={{ enableBackground: 'new 0 0 45.402 45.402' }}
                  >
                    <g>
                      <path
                        d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </button>
              </div>
            </div>
          </li>
          {users.map((u, _) => (
            <li
              onClick={() => selectUser(u._id)}
              key={_}
              className={`mb-3 p-2 ${
                selected == u._id ? 'bg-gray-300' : 'bg-gray-100'
              } cursor-pointer flex items-center`}
            >
              <img
                src={`https://ui-avatars.com/api/?background=${
                  colors[Math.floor(Math.random() * colors.length)]
                }&color=fff&name=${u.name}`}
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  {u.name}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
