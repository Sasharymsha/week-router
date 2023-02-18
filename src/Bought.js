import { useState} from "react";
import { data } from "./data";


function Bought() {
    const [painting, setPainting] = useState(data);
    const [showText , setShowText] = useState(false);

    const buyPainting = (id) => {
    let newPaint = painting.filter(painting => painting.id !== id)
    setPainting(newPaint)
    }
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return (
        <div>
        <div className="products">
            <h2> Buy {painting.length} paintings</h2>
        </div>
        {painting.map((element => {
        const {id,artistName,description,price,image,showMore,} = element;
        

    return(<div key={id}>
        <div className="products">
            <h2>{id}-{artistName}</h2>
        </div>
            <div className="products">
            <img src ={image} alt="painting" width="450px" height="350px"/>
            </div>
            <div className="products">
                    <p>{showMore ? description : description.substring(0,60) + "..."}
                    <button onClick = {() => showTextClick(element)(!showMore)}>{showMore ? "show less" : "show more"}</button></p>
                    </div>
            <div className="products">
            <h3>{price}</h3>
            </div>
            <div className="products">
            <button onClick = {() => buyPainting(id)}>BUY</button>
            </div>
            </div>)
            }))}
            <div className="products">
            <button onClick ={() => setPainting([])}>BUY ALL</button>
            </div>
            </div>
            )
    }

    
    export default Bought;