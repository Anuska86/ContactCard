import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contacts">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default App;
