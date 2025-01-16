import Contact from "./components/Contact";
import Header from "./components/Header";

import matty from "./imgs/matty.png";
import jenn from "./imgs/jenn.png";
import shadowCat from "./imgs/shadowCat.png";
import teresa from "./imgs/teresa.png";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contacts">
        <Contact
          img={matty}
          name="Matty"
          phone="(212) 555-1234"
          email="mr.matty@catnap.meow"
        />
        <Contact
          img={jenn}
          name="Jenn"
          phone="(212) 587-1289"
          email="mss.jenn@catnap.meow"
        />
        <Contact
          img={shadowCat}
          name="ShadowCat"
          phone="(212) 590-1244"
          email="mr.shadow@catnap.meow"
        />
        <Contact
          img={teresa}
          name="Teresa"
          phone="(212) 576-1214"
          email="ms.teresa@catnap.meow"
        />
      </div>
    </div>
  );
}

export default App;
