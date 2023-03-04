import { useState } from "react";
import './App.css';

export const about = [
    {
        id: 1,
        flowersName: "Dieffenbachia",
        image: "https://img.freepik.com/darmowe-zdjecie/roslina-monstera-deliciosa-w-doniczce_53876-133119.jpg?w=740&t=st=1676811455~exp=1676812055~hmac=3e28ece9c0a99d66418510a8fe91f4dfed23ac31e3352385b72916ebbf37bebd",
        description: "Dieffenbachia, also called dumb cane, is a beautiful plant with leaves that feature an attractive mottled pattern. Dieffenbachia plants need well-drained, moist soil. It does best with low, indirect light, which makes it a great indoor plant for the home and office.",
      },
    {
        id: 2,
        flowersName: "Peace Lily",
        image: "https://img.freepik.com/darmowe-zdjecie/lilia-pokojowa-roslina-w-bialej-doniczce_53876-133124.jpg?w=360&t=st=1676811513~exp=1676812113~hmac=cc3df6a50d3b4fb95b48be1906e22da4117573ee89d0590de4ad3daee2bdf45c",
        description: "The peace lily offers elegance and beauty with a unique look. It prefers bright, indirect light but also does well in medium, indirect light. When it needs water, it will tell you by getting droopy leaves. After watering, it perks back up in response. You can also mist it occasionally for added humidity. ",
    },
    {
        id: 3,
        flowersName: "Boston Ferns ",
        image: "https://img.freepik.com/darmowe-zdjecie/zielona-roslina-w-bialym-flowerpot_23-2148022726.jpg?w=360&t=st=1676811539~exp=1676812139~hmac=907c652da93b76a044b9d3e8d43a286bc5ab17181d14f6ee5a1ed57971d1c980",
        description: "Boston ferns can grow quite large and make a showy but elegant addition to your home. They do especially well in bathrooms and other places that are humid but have soft, natural light. Give them moist soil, but allow them to dry out a bit during the winter months.",
    },
    {
        id: 4,
        flowersName: "Ficus",
        image: "https://img.freepik.com/darmowe-zdjecie/roslina-kalatei-w-szarej-doniczce_53876-133131.jpg?w=740&t=st=1676811764~exp=1676812364~hmac=e731380050d81a3b5facc58052e03d53c13290a74672088e5adf7cb468afdd2a",
        description: "Ficus are popular houseplants and also often named the best plants for offices. Why are the great office plants? Because they have a striking appearance and are highly effective at purifying indoor air. A ficus prefers bright, indirect light, moist soil and occasional misting. Make sure you keep your ficus away from drafts.",
    },
    {
        id: 5,
        flowersName: "Dragon trees",
        image: "https://img.freepik.com/darmowe-zdjecie/drzewo-agawy-w-bialej-doniczce_53876-133129.jpg?w=360&t=st=1676811618~exp=1676812218~hmac=e2bc962a604c62116683f46c9c0958ac087fe13f2872aa3c8001cb2dfe02531d",
        description: "Dragon trees are wonderfully easy plants that tolerate a wide variety of conditions. These plants feature sword-like leaves with red edging that grow from a woody stem. As a houseplant, dragon trees should grow to around 6 feet, though in their natural environment that can reach 20 feet high.",
    }
]

function About() {
const [plant, setPlant] = useState(0);
const {id, flowersName, description, image} = about[plant];


const previousPlant = () => {
    setPlant ((plant => {
      plant --;
      if (plant <0){
        return about.length -1;
      }
      return plant;
    }))
  }
  const nextPlant = () => {
    setPlant ((plant => {
      plant ++;
      if (plant > about.length - 1) {
        plant = 0;
      }
      return plant;
    }))
  }
  return(<div key={id}>
    <div className="plants">
    <h2>The best 5 plants for home</h2>
      </div>
      <div className="plants">
        <h2>{id} - {flowersName}</h2>
      </div>
      <div className="plants">
        <img src = {image} width = "350px" height="400px" alt="person"/>
      </div>
      <div className="plants">
        <p>{description}</p>
      </div>
      <div className="plants">
        <button className="btn" onClick = {previousPlant}>Previous</button>
        <button className="btn" onClick = {nextPlant}>Next</button>
      </div>
        </div>
    
      )
}

export default About;