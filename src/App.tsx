import Lottie from "react-lottie";
import animationData from "./lotties/website-under-construction.json";
import "./App.css";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </header>
    </div>
  );
}

export default App;
