import React, { useEffect, useState } from "react";
import "./MemosContent.css";

function MemosContent({ memos, setMemos }) {
  const [showFinished, setShowFinished] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const savedMemos = localStorage.getItem("memos");
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
    setIsDataLoaded(true);
  }, [setMemos]);
  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos, isDataLoaded]);
  const getRandomColor = () => {
    const colors = [
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

  const handleCheckboxChange = (id) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, isFinished: !memo.isFinished } : memo
      )
    );
  };

  const filteredMemos = showFinished
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
          const cardColor = getRandomColor();
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
