
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="Container">
          <Weather defaultCity="Nashville" />
      </div>
      <footer className="Footer"> <a href="https://github.com/eslazyk10/weather-react-app/tree/master/src" target="blank">Open-sourced code</a><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20px" alt="github"/> by Emily Slazyk </footer>
    </div>
  );
}

export default App;
