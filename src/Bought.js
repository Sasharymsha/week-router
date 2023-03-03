import { useState} from "react";
import { data } from "./data";


function Bought() {
    const [flowers, setFlowers] = useState(data);
    const [showText , setShowText] = useState(false);

    const buyFlowers = (id) => {
      let newFlower = flowers.filter(flowers => flowers.id !== id)
      setFlowers(newFlower)
      }
      const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
      }

      return (
        <div className="general">
          <div className="products">
            <h1>Flowers bhguyg</h1>
          </div>
          {flowers.map((element => {
          const {id,flowersName,description,price,image,showMore} = element;
      
      return(<div className="general" key={id}>
          <div className="product-card">
            <h2>{id}-{flowersName}</h2>
          </div>
            <div className="product-card">
              <img src ={image} alt="painting" width="300px"/>
            </div>
            <div className="container">
                    <p>{showMore ? description : description.substring(0,50) + "..."}
                    <button onClick = {() => showTextClick(element)(!showMore)}>{showMore ? "show less" : "show more"}</button></p>
                    </div>
            <div className="product-card">
              <h3>{price}</h3>
            </div>
            <div className="product-card">
              <button onClick = {() => buyFlowers(id)}>BUY</button>
            </div>
              </div>)
            }))}
            <div className="product-card">
              <button onClick ={() => setFlowers([])}>BUY ALL</button>
            </div>
            </div>
            )
    }


    
    export default Bought;