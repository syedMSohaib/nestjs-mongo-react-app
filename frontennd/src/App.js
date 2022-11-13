import logo from './logo.svg'
import './App.css'
import Header from './Component/header'
import User from './Component/User'
import Footer from './Component/footer'
import Hobbies from './Component/Hobbies'
import { useState } from 'react'

function App() {
  const [userId, setUserId] = useState('')

  const dispatchUser = (id) => {
    setUserId(id)
  }

  return (
    <div className="App font-roboto bg-gray-100">
      <Header />
      <div className="h-screen px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="-mx-8 w-4/12 hidden lg:block">
            <User dispatchUser={dispatchUser} />
          </div>
          <div className="w-full lg:w-8/12">
            <Hobbies userId={userId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
