import React from "react";
import { HERO_BG, PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";




export default function Home() {
  const [selectedFilter, setSelectedFilter] = React.useState("All");

  return (
    <>
    <section className="h-[80vh] bg-cover bg-center flex flex-col  justify-center items-center text-white"
            style={{ backgroundImage: `url(${HERO_BG})` }}
>
<h1 className="text-4xl font-bold md:text-5xl mb-8"> Find your favorite place here!</h1>
<p>The best prices for over 2 million properties worldwide.</p>
    </section>
    {/* pills section */}
    <div className="flex flex-wrap gap-3 justify-center mt-8">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            selected={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          />
        ))}
      </div>
{/* property cards */}
<section className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {PROPERTYLISTINGSAMPLE.map((property) => (
    <Card  key={property} {...property}/>
    
  ))}
</section>

  </>
    
  );
}
