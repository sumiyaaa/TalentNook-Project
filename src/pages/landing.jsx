import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from "../data/companies.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';


function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">find your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get Hired</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl"> Find jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl"> Find candidate</Button>
        </Link>
      </div>
      
      <Carousel plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({name, id, path})=>{
            return(<CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img src={path} alt={name}/>
            </CarouselItem>
            ); 
          })}
        </CarouselContent>
      </Carousel>

    </main>
  );
}

export default LandingPage