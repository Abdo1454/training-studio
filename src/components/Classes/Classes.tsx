import { useState } from "react";
import dec from "../../assets/images/line-dec.png";
import featureClasses from "../../assets/images/tabs-first-icon.png";
import "./Classes.css";
import data from "../../data/classes.json";
console.log(data.classes);
import image1 from "../../assets/images/training-image-01.jpg";
import image2 from "../../assets/images/training-image-02.jpg";
import image3 from "../../assets/images/training-image-03.jpg";
import image4 from "../../assets/images/training-image-04.jpg";

type ImageKey = "image1" | "image2" | "image3" | "image4";

const images: Record<ImageKey, string> = {
  image1,
  image2,
  image3,
  image4,
};

function Classes() {
const [selectedClass, setSelectedClass] = useState(data.classes[0]);
  return (
    <div>
      <div className="classes-content">
        <h2>
          Our <span>Classes</span>
        </h2>

        <img className="dec-image" src={dec} alt="line decoration" />

        <p>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
     
     <div className="classes-list">

     <div className="list-item">
              <h3 onClick={()=> setSelectedClass(data.classes[0])}><img src={featureClasses}></img> First Training Class</h3>
              <h3  onClick={()=> setSelectedClass(data.classes[1])}> <img src={featureClasses}></img> Second Training Class</h3>
              <h3 onClick={()=> setSelectedClass(data.classes[2])}> <img src={featureClasses}></img> Third Training Class</h3>
              <h3 onClick={()=> setSelectedClass(data.classes[3])}> <img src={featureClasses}></img>Fourth Training Class</h3>
               <a className="link-classes" >View All Schedules</a> 
            </div>
        

       <div className="class-item">
  <div className="class-item-details">
    <img
      src={images[selectedClass.image as ImageKey]}
      alt={selectedClass.title}
    />

    <h4>{selectedClass.subtitle}</h4>

    <p>{selectedClass.description}</p>
              <h3> <a  className="link-classes" >View Schedule</a> </h3>

  </div>
</div>
            
  
     </div>
      </div>
    </div>
  );
}

export default Classes;