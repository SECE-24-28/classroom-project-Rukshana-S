import React from "react";
const PropsPracticeTwo = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="name">{item.name}</div>
            <div className="mobile">{item.mobile}</div>
          </div>
        );
      })}
    </div>
  );
};
export default PropsPracticeTwo;