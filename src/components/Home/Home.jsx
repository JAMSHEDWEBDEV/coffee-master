import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../coffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees)
    return (
        <div className="my-10 px-10">
            <h1 className="text-center my-8 text-3xl font-bold">Total Coffee : {coffees.length}</h1>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => 
                    <CoffeeCard 
                    key="coffee._id" 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;