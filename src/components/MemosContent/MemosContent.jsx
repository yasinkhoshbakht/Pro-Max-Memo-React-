import React, { useEffect, useRef, useState } from "react";
import "./MemosContent.css";

function MemosContent({ memos, setMemos }) {
  let [showFinished, setShowFinished] = useState(false);
  let isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      let savedMemos = localStorage.getItem("memos");
      if (savedMemos) {
        setMemos(JSON.parse(savedMemos));
      }
      isInitialMount.current = false;
    }
  }, [setMemos]);
  useEffect(() => {
    if (!isInitialMount.current) {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);
  let getRandomColor = () => {
    let colors = [
      "#FFB6C1",
      "#87CEEB",
      "#90EE90",
      "#FFA07A",
      "#9370DB",
      "#FFD700",
      "#FF4500",
      "#8A2BE2",
      "#20B2AA",
      "#FF6347",
      "#4682B4",
      "#32CD32",
      "#6A5ACD",
      "#FF1493",
      "#D2691E",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  let handleCheckboxChange = (id) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, isFinished: !memo.isFinished } : memo
      )
    );
  };
  let filteredMemos = showFinished
    ? memos.filter((memo) => memo.isFinished)
    : memos;
  return (
    <div className="memos-content">
      <div className="filter-section">
        <label>
          <input
            type="checkbox"
            checked={showFinished}
            onChange={() => setShowFinished(!showFinished)}
          />
          Show Finished Only
        </label>
      </div>
      <div className="memos-container">
        {filteredMemos.map((memo) => {
          let cardColor = getRandomColor();
          return (
            <div
              key={memo.id}
              className="memo-card"
              style={{ backgroundColor: cardColor }}
            >
              <h2>{memo.title}</h2>
              <p>{memo.text}</p>
              <small>
                Created: {new Date(memo.createdTime).toLocaleString()}
              </small>
              <div className="memo-footer">
                <label>
                  <input
                    type="checkbox"
                    checked={memo.isFinished}
                    onChange={() => handleCheckboxChange(memo.id)}
                  />
                  Finished
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemosContent;
