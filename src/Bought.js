import { useState} from "react";


function Bought({flowers, setFlowers}) {
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
        <div className="first">
          {flowers.map((element => {
          const {id,flowersName,description,price,image,showMore} = element;
      
      return(<div className="products" key={id}>
        <div className="plant">
            <h2>{id}-{flowersName}</h2>
            </div>
            <img src ={image} alt="flowers" width="350px" height="300px"/>
            <div className="plant">
            <p>{showMore ? description : description.substring(0,50) + "..."}
            <button className="show" onClick = {() => showTextClick(element)(!showMore)}>{showMore ? "show less" : "show more"}</button></p>
            </div>
            <div className="plant">
            <h3>{price}</h3>
            </div>
            <div className="plant">
            <button className="buy" onClick = {() => buyFlowers(id)}>BUY</button>
            </div>
            </div>)
            }))}
            </div>
            )
    }


    
    export default Bought;