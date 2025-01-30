import React from 'react'
import {useUser} from "@clerk/clerk-react";
import { BarLoader } from 'react-spinners';

const Onboarding = () => {
  const{user,isloaded } = useUser();

  if(!isLoaded){
    return<BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }



  return (
    <div>Onboarding</div>
  )
}

export default Onboarding;