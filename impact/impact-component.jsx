import React from "react";
import { ImpactStyle } from "./impact-style";

const ImpactComponent = () => {
  return (
    <ImpactStyle>

      <div className="impact-title">
        <h1>Impact at a <span>Glance</span></h1>
      </div>
      <div className="container-full">

        <div className="upper-container">
          <div className="container-item1">
            <div>
              <h2>Colleges</h2>
              <p>100+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="college" className="icon" />
          </div>

          <div className="container-item2">
            <div>
              <h2>Study Materials</h2>
              <p>1000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="books" className="icon" />
          </div>

        </div>

        <div className="lower-container">
          <div className="container-item3">
            <div>
              <h2>Students</h2>
              <p>1,00,000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="students" className="icon" />
          </div>

          <div className="container-item4">
            <div>
              <h2>Professional Trainers</h2>
              <p>150+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="trainers" className="icon" />
          </div>

        </div>

      </div>

    </ImpactStyle>
  );
};

export default ImpactComponent;
