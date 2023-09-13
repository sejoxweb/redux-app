import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";
import Questions from "./features/questions/Questions";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Users /> */}
      <Questions />
    </div>
  );
}

export default App;
