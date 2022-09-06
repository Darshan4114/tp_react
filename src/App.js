import styl from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [textData, setTextData] = useState(null);

  useEffect(() => {
    fetch("https://631779098b8f1c0461f15083--capable-dusk-4622f5.netlify.app/")
      .then((res) => res.json())
      .then((res) => setTextData(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className={styl.container}>
      <div className={styl.col2}>
        <div className={styl.col}>
          {textData && <h1>{textData.hero}</h1>}
          {textData && <blockquote>{textData.blockquote}</blockquote>}
          <div className={styl.btnGrp}>
            <button className={styl.primary}>
              <span className={styl.smallScreen}>Start</span>
              <span className={styl.largeScreen}>Get started</span>
            </button>
            <button className={styl.secondary}>
              <span className={styl.smallScreen}>Expert</span>
              <span className={styl.largeScreen}>Talk to an expert</span>
            </button>
          </div>
        </div>
        <div className={styl.col}>
          <img src="hero.webp" alt="Hero" />
        </div>
      </div>
      <div className={styl.col2}>
        <div className={`${styl.col} ${styl.switchOrder2}`}>
          <img src="secondary.jpeg" alt="Children" />
        </div>
        <div className={`${styl.col} ${styl.switchOrder1}`}>
          {textData && <h2 className={styl.caps}>{textData.orange}</h2>}
          {textData && <h2>{textData.h2}</h2>}
          {textData && <p>{textData.p}</p>}
          <a href="/">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
