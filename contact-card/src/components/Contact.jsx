import phoneIcon from "../imgs/phoneIcon.png";

import emailLogo from "../imgs/emailLogo.png";

export default function Contact(props) {
  console.log(props);
  return (
    <div>
      <article className="contact-card">
        <img src={props.img} alt="Photo of an adorable cat" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img className="phone" src={phoneIcon} alt="Phone icon" />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img className="email" src={emailLogo} alt="Email logo" />
          <p>{props.email}</p>
        </div>
      </article>
    </div>
  );
}
