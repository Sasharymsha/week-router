import { useState } from "react";
import { data } from "./data";
import Button from "./Button";
import Bought from "./Bought";
import './App.css';

function Shop() {
    const [flowers, setFlower] = useState(data);
    
    return(<div>
    <Button 
    data={data}
    setFlower={setFlower}
    />
    <Bought
    flowers={flowers}/>
    </div>
    )
}
export default Shop;