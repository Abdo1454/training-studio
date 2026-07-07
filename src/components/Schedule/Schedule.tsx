import React from "react";
import dec from "../../assets/images/line-dec.png";
import data from '../../Data/schedule.json';
import { useState  } from "react";
import './Schedule.css'
function Schedule() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

type Day = typeof days[number];

const [day, setDay] = useState<Day>("Monday");
  return (
    <div>
      <div className="schedule-content">
        <h2>Classes Schedule</h2>
        <img className="dec-image" src={dec} alt="line decoration" />
        <p>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
            <ul className="list-days">
                <li onClick={()=>{setDay("Monday")}} >Monday</li>
                <li>/</li>
                <li onClick={()=>{setDay("Tuesday")}} >Tuesday</li>
                <li>/</li>
                <li onClick={()=>{setDay("Wednesday")}} >Wednesday</li>
                <li>/</li>
                <li onClick={()=>{setDay("Thursday")}} >Thursday</li>
                <li>/</li>
                <li onClick={()=>{setDay("Friday")}} >Friday</li>
            </ul>
    <table className="table-content">
  <tbody>
    {data.classes.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
{data.days.map((currentDay) => {
  if (currentDay !== day) return null;

  const time =
    item.schedule[currentDay as keyof typeof item.schedule];

  return (
    <React.Fragment key={currentDay}>
      <td>
        {time === "10:00AM - 11:30AM" ? time : ""}
      </td>

      <td>
        {time === "2:00PM - 3:30PM" ? time : ""}
      </td>
    </React.Fragment>
  );
})}

        <td>{item.trainer}</td>
      </tr>
    ))}
  </tbody>
</table>

  

      </div>
    </div>
  );
}

export default Schedule;
