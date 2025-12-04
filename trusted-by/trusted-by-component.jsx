import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faChalkboardTeacher, faBook, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      
      <h1 className="title">Trusted By</h1>

      <div className="parent">

        {/* CARD 1 */}
        <div className="child cyan">
          <div className="icon-badge cyan">
            <FontAwesomeIcon icon={faUniversity} />
          </div>
          <span className="numbers">100+</span>
          <span className="details">COLLEGES</span>
          <div className="bottom-bar cyan"></div>
        </div>

        {/* CARD 2 */}
        <div className="child blue">
          <div className="icon-badge blue">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
          <span className="numbers">150</span>
          <span className="details">PROFESSIONAL<br />TRAINERS</span>
          <div className="bottom-bar blue"></div>
        </div>

        {/* CARD 3 */}
        <div className="child orange">
          <div className="icon-badge orange">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span className="numbers">1000+</span>
          <span className="details">STUDY MATERIALS<br />AGH LMS</span>
          <div className="bottom-bar orange"></div>
        </div>

        {/* CARD 4 */}
        <div className="child red">
          <div className="icon-badge red">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <span className="numbers">1,00,000</span>
          <span className="details">STUDENTS<br />B2B Placement Training</span>
          <div className="bottom-bar red"></div>
        </div>

      </div>
     
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
