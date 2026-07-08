import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="map-contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3080725024197!2d31.204548324598555!3d30.028018374931904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458478edeca5f99%3A0xfda48681d55fd9be!2sCreativa%20Innovation%20Hub%20-%20Giza!5e0!3m2!1sar!2seg!4v1783538213313!5m2!1sar!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Creativa Innovation Hub"
        ></iframe>
      
      <div className="contact-form">
      <form  action="">
        <div className="form-small">
        <input className="small-input" type="text" placeholder="  YourName"></input>
        <input  className="small-input" type="text" placeholder=" Email"></input>
        </div>
        <input type="text" className="subject" placeholder=" subject"></input>
        <textarea placeholder="subject">  Massege</textarea>
        <input className="btn-form" type="submit" value="SEND MESSAGE"></input>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;