import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { PeopleList } from "./components/People/PeopleList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PeopleList />
    </div>
  );
}

export default App;
