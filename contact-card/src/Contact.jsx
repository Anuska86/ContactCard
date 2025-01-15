import matty from "../src/imgs/matty.png";
import phoneIcon from "../src/imgs/phoneIcon.png";
import emailLogo from "../src/imgs/emailLogo.png";

export default function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Card</h1>
      </header>
      <article className="contact-card">
        <img className="matty" src={matty} alt="Photo of an adorable cat" />
        <h3>Mr. Matty</h3>
        <div className="info-group">
          <img className="phone" src={phoneIcon} alt="Phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img className="email" src={emailLogo} alt="Email logo" />
          <p>mr.matty@catnap.meow</p>
        </div>
      </article>
    </div>
  );
}
