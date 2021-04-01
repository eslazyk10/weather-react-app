
import './App.css';
import Search from "./Search";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <div className="row">
        <div className="col-6">
      <h1 className="Current-City">Nashville</h1>
          <h2 className="Current-Day-Time">Thursday</h2>
          <h2 className="Current-Condition">Sunny</h2>
          
        </div>
        <div className="col-6">
          <Current temp={70} value={72} humidity={45} speed={8} />
        </div>
      </div>
      <Search />
      </div>
      <footer className="Footer"> <a href="https://github.com/eslazyk10/weather-react-app/tree/master/src" target="blank">Open-sourced code</a><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20px" alt="github"/> by Emily Slazyk </footer>
    </div>
  );
}

export default App;
