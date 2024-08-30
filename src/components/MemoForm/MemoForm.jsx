import { useState } from "react";
import "./MemoForm.css";
function MemoForm({ setMemos }) {
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  let submitHandler = (e) => {
    e.preventDefault();
    let newMemo = {
      title,
      text,
      id: Date.now(),
      createdTime: new Date().toISOString(),
      isFinished: false,
    };
    setMemos((prevMemos) => [...prevMemos, newMemo]);
    setTitle("");
    setText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="title"
          type="text"
          placeholder="Memo Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="text"
          type="text"
          placeholder="Memo Text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="submit" value="Add Memo" />
      </form>
    </div>
  );
}

export default MemoForm;
