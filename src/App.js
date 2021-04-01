
import './App.css';
import Search from "./Search";
import Temperature from "./Temperature";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Search />
      <h1 className="Current-City">Nashville</h1>
      <div className="row">
        <div className="col-6">
          <h2 className="Current-Day-Time">Thursday</h2>
          <h2 className="Current-Condition">Sunny</h2>
          <Temperature value={70} />
        </div>
        <div className="col-6">
          <Current value={72} humidity={45} speed={8} />
        </div>
      </div>
      </div>
      <footer className="Footer"> <a href="https://github.com/eslazyk10/weather-react-app/tree/master/src" target="blank">Open-sourced code</a><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20px" alt="github"/> by Emily Slazyk </footer>
    </div>
  );
}

export default App;
