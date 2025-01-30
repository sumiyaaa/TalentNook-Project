// import React from 'react'
// import { Button } from './ui/button';


// const Header = () => {
//   return (
//     <>
//     <nav className="py-4 flex justify-between items-center">
//     <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide ml-10 pl-5">TalentNook</h1>
//     <div  className="space-x-4">
//         <Button>Candidate</Button>
//         <Button>Recuriter</Button>
//     </div>
//     </nav>
//     </>
//   )
// }

// export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-4 flex justify-between items-center mx-10">
      {/* Logo */}
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide pl-5">
        TalentNook
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button onClick={() => navigate("/candidate-login")} aria-label="Login as Candidate">
          Candidate
        </Button>
        <Button onClick={() => navigate("/requriter-login")} aria-label="Login as Recruiter">
          Recruiter
        </Button>
      </div>
    </nav>
  );
};

export default Header;
