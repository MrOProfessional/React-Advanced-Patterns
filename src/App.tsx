import "./App.css";
import Container3 from "./components/CompoundComponents/container";
import Container2 from "./components/Hocs/container";
import Container1 from "./components/PropDrilling/container";
import Container from "./components/PropDrillingSolution/container";

function App() {
  return (
    <div id="app">
      <div className="flex flex-row bg-stone-900 gap-5 rounded p-20 shadow-lg height-[800px]">
        <Container1></Container1>
        <Container></Container>
        <Container2></Container2>
        <Container3></Container3>
      </div>
      <h1 className="text-red-300 text-[100px]">React Patterns</h1>
    </div>
    
  );
}

export default App;
