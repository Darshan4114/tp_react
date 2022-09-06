import styl from "./App.module.css";

function App() {
  return (
    <div className={styl.container}>
      <div className={styl.col2}>
        <div className={styl.col}>
          <h1>Social fundraising that actually works for nonprofits</h1>
          <blockquote>
            Proven to increase giving, event participation, and awareness of
            your cause.
          </blockquote>
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
          <h2 className={styl.caps}>Online social fundraising</h2>
          <h2>Add social to grow your fundraising year round</h2>
          <p>Social AMPTM is a set of features designed to promote sharing.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
