import trip2 from "../../assets/4.jpg"
import trip1 from "../../assets/5.jpg"
import trip3 from "../../assets/10.jpg"
import TripItem from "./TripItem"
import "./trip.css"

const Trip = () => {
  return (
    <div className='trip'>
         <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google maps.</p>

        <div className="card">
            <TripItem
            tripImg={trip1}
            title="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
            />
            <TripItem
            tripImg={trip2}
            title="Trip in Malaysia"
            text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.Its known for its beaches, rain forests and mix of Malay, Chinese, indian and European cultural influences."
            />
            <TripItem
            tripImg={trip3}
            title="Trip in France"
            text="France, in Western Europe encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower"
            />
        </div>
    </div>
    
  )
}

export default Trip