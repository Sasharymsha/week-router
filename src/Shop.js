import { useState } from "react";
import { data } from "./data";
import Buttons from "./Button";
import Artist from "./Artist";
import Bought from "./Bought";
import './App.css';

function Shop() {
    const [artist, setArtist] = useState(data);
    const chosenArtist = ( searchTerm ) => {
    const newArtist = data.filter(element => element.searchTerm === searchTerm);
    setArtist(newArtist); 
}
    return(<div>
    <Buttons filteredArtist={chosenArtist}/>
    <Artist anyArtist={artist}/>
    <Bought/>
    </div>
    )
}
export default Shop;