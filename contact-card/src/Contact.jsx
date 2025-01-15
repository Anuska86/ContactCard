export default function Contact() {
    return (
        <article className="contact-card">
            <img
                src="./imgs/Matty.png"
                alt="Photo of an adorable cat"
            />
            <h3>Mr. <Matty></Matty></h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
    )
}