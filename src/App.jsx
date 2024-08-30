import { useState } from "react";
import Header from "./components/Header/Header";
import MemoForm from "./components/MemoForm/MemoForm";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);

  return (
    <div>
      <Header />
      <div className="app-container">
        <div className="leftSection">
          <MemoForm setMemos={setMemos} />
        </div>
        <div className="rightSection"></div>
      </div>
    </div>
  );
}

export default App;
