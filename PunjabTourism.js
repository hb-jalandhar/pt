import { useState } from "react";
import data from "./Data";
import MainView from "./Main-view";

function PunjabTourism()
{
    
    const [tours , setTours] = useState(data);
    function removeCard(id)
    {
        const newTours = tours.filter(tour=> tour.id !== id);
        setTours(newTours);
    }
    function refreshTours()
    {
        setTours(data);
    }
    if(tours.length === 0)
    {
        return(
            <div className="refresh">
            <h2>No Places Left</h2>
            <button className="btn-refresh" onClick={refreshTours}>Refresh</button>
        </div>
        );
    }
    return(
        <div>
        <MainView className="main-view" tours = {tours} removeCard={removeCard}></MainView>
        </div>
    )
}

export default PunjabTourism;