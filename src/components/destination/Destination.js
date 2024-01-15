import img1 from "../../assets/1.jpg"
import img4 from "../../assets/10.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import DestinationData from "./DestinationData"

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        
        <DestinationData
        title="Tall volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home! and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents."
        img1={img1}
        img2={img2}
        cName="firstDestination"
        />

<DestinationData
        title="Mt. Daguldul Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home! and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents."
        img1={img3}
        img2={img4}
        cName="secondDestination"
        />
        
    </div>
  )
}

export default Destination