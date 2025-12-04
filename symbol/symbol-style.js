import styled from "styled-components";

export const SymbolStyle = styled.div`

  /* GLOBAL FIX — Prevent horizontal scrolling */
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }

  width: 100%;
  font-family: "Poppins", sans-serif;
  background: #fff;

  /* ---------------------------------------------------------
      HERO SECTION
  ---------------------------------------------------------- */

  .main-container {
    width: 100%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;      /* STACK text + image */
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  .container1 {
    max-width: 900px;
    width: 100%;
  }

  .container1-header1 {
    font-size: clamp(32px, 6vw, 70px);
    font-weight: 900;
    color: red;
    padding-bottom: 30px;
  }

  .container1-header2 {
    color: black;
    font-size: clamp(18px, 3vw, 32px);
    font-weight: 700;
    padding-bottom: 15px;
  }

  .container1-italic {
    font-size: clamp(14px, 2vw, 26px);
    font-weight: bold;
    color: red;
    margin-top: 10px;
  }

  .sub-container1 p {
    margin-top: 30px;
    font-size: clamp(15px, 1.5vw, 20px);
    line-height: 1.6;
    color: #555;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .button-group-container1 {
    margin-top: 20px;
  }

  .button1,
  .button2 {
    padding: clamp(10px, 2vw, 15px) clamp(18px, 3vw, 30px);
    border-radius: 6px;
    border: none;
    font-size: clamp(14px, 1.4vw, 20px);
    font-weight: 700;
    cursor: pointer;
    margin: 10px;
  }

  .button2 {
    background: red;
    color: #fff;
  }

  .container2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container2 img {
    width: 100%;
    max-width: 900px;
    height: auto;
    display: block;
  }

  /* ---------------------------------------------------------
      SYMBOL SECTION
  ---------------------------------------------------------- */

 width: 100%;
  background: #fff;
  padding: 50px 0;
  font-family: "Poppins", sans-serif;

  .symbol {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .heading {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #000;
  }

  .para1 {
    width: 70%;
    margin: auto;
    font-size: 18px;
    line-height: 1.7;
    color: #5f6f82;
  }

  .vission-mission {
    width: 90%;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* Vision & Mission containers */
  .vission,
  .mission {
    width: 45%;
    text-align: left;
  }
  .vission-1 h1{
  color:#00a9d6;
  }
  .mission-1 h1{
  color:#f4a835;
  }
  /* Title container with color bar */
  .vission-1,
  .mission-1 {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
 
.vission-1{
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    }

    .mission-1{
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    }

  .para2,
  .para3 {
    font-size: 17px;
    color: #5f6f82;
    line-height: 1.7;
  }

  /* Vertical divider */
  .divider {
    width: 1px;
    background: #ccc;
    height: 150px;
    margin: auto 20px;
  }

  @media (max-width: 768px) {
    .vission-mission {
      flex-direction: column;
      gap: 40px;
    }

    .divider {
      display: none;
    }

    .vission,
    .mission {
      width: 100%;
    }

    .para1 {
      width: 90%;
    }
  }

  /* ---------------------------------------------------------
      PILL BOX
  ---------------------------------------------------------- */

.pill-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1400px;

  margin: 60px auto;
  padding: 2.5rem 3rem;

  background: #fc2947;
  border: 2px solid red;
  border-radius: 200px;

  text-align: center;
}

/* --- Title --- */
.pill-box h1 {
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  font-family: "Work Sans", sans-serif;
}

/* --- Paragraph --- */
.pill-box p {
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .pill-box {
    padding: 1.8rem;
    border-radius: 80px;
    max-width: 90%;
    margin-top: 30px;
  }

  .pill-box h1 {
    font-size: 26px;
  }

  .pill-box p {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .pill-box {
    padding: 1.4rem;
    border-radius: 50px;
  }

  .pill-box h1 {
    font-size: 22px;
  }

  .pill-box p {
    font-size: 14px;
  }
}

    

`;
