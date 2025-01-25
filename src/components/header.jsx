import React from 'react'
import { Button } from './ui/button';


const Header = () => {
  return (
    <>
    <nav className="py-4 flex justify-between items-center">
    <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide ml-10 pl-5">TalentNook</h1>
    <div>
        <Button>login</Button>
    </div>
    </nav>
    </>
  )
}

export default Header;