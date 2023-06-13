import "./App.css";
import BeautyContainer from "./containers/BeautyContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <BeautyContainer />
        </main>
        <footer>
          <small>Hello from beauty</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
