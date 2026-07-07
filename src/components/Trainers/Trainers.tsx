import dec from "../../assets/images/line-dec.png";
import first from '../../assets/images/first-trainer.jpg';
import second from '../../assets/images/second-trainer.jpg';
import third from '../../assets/images/third-trainer.jpg';
import './Trainers.css';
function Trainers() {
  return (
    <div>
      <div className="trainer-content">
        <h2>
          Expert<span>TRAINERS</span> 
        </h2>
        <img className="dec-image" src={dec} alt="line decoration" />
        <p>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
      
      <div className="Trainers-list">
        <div className="trainer">
          <img src={first}></img>
          <h4>Strength Trainer</h4>
          <h3>Bret D. Bowers</h3>
          <p>
            Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents
            gluten-free vegan church-key pour-over seitan flannel.
          </p>
          <ul className="list-soc">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
            <li><i className="fa-brands fa-behance"></i></li>
          </ul >
        </div>
        <div className="trainer">
          <img src={second}></img>
          <h4>Strength Trainer</h4>
          <h3>Bret D. Bowers</h3>
          <p>
            Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents
            gluten-free vegan church-key pour-over seitan flannel.
          </p>
          <ul className="list-soc">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
            <li><i className="fa-brands fa-behance"></i></li>
          </ul>
        </div>
        <div className="trainer">
          <img src={third}></img>
          <h4>Strength Trainer</h4>
          <h3>Bret D. Bowers</h3>
          <p>
            Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents
            gluten-free vegan church-key pour-over seitan flannel.
          </p>
          <ul className="list-soc">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
            <li><i className="fa-brands fa-behance"></i></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
