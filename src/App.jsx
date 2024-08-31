import { useState } from "react";
import Header from "./components/Header/Header";
import MemoForm from "./components/MemoForm/MemoForm";
import MemosContent from "./components/MemosContent/MemosContent";
import "./App.css";

function App() {
  let [memos, setMemos] = useState([]);
  let renderMemoForm = () => {
    return <MemoForm setMemos={setMemos} />;
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <div className="leftSection">{renderMemoForm()}</div>
        <div className="rightSection">
          <MemosContent memos={memos} setMemos={setMemos} />
        </div>
      </div>
    </div>
  );
}

export default App;
