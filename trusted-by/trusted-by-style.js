import styled from "styled-components";

export const TrustedByStyle = styled.div`
  padding: 40px 0;
  width: 100%;
 
  .title {
  color: black;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .parent {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .child {
    position: relative;
    width: 260px;
    height: 230px;

    background: #fff;
    border-radius: 12px;
    text-align: center;

    padding-top: 60px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  /* Colored Top Borders */
  .cyan { border-top: 10px solid #00c4b4; }
  .blue { border-top: 10px solid #00a9e0; }
  .orange { border-top: 10px solid #f2a33c; }
  .red { border-top: 10px solid #ff4c4c; }

  /* Circular Badge */
  .icon-badge {
    position: absolute;
    top: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    border: 8px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: inherit; 
    box-shadow: 0px 3px 6px rgba(0,0,0,0.15);
  }

  .cyan.icon-badge { border-color: #00c4b4; color: #00c4b4; }
  .blue.icon-badge { border-color: #00a9e0; color: #00a9e0; }
  .orange.icon-badge { border-color: #f2a33c; color: #f2a33c; }
  .red.icon-badge { border-color: #ff4c4c; color: #ff4c4c; }

  /* Numbers & text */
  .numbers {
    font-size: 40px;
    font-weight: 700;
    color: #555;
    margin-top: 10px;
  }

  .details {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 500;
    color: #777;
    line-height: 1.3;
  }

  /* Bottom Highlight Bar */
  .bottom-bar {
    position: absolute;
    bottom: 0;
    width: 85%;
    height: 15px;
    border-radius: 0 0 10px 10px;
  }

  .cyan.bottom-bar { background: #00c4b4; }
  .blue.bottom-bar { background: #00a9e0; }
  .orange.bottom-bar { background: #f2a33c; }
  .red.bottom-bar { background: #ff4c4c; }

  /* Responsive */
  @media (max-width: 800px) {
    .parent {
      gap: 40px;
    }

    .child {
      width: 240px;
      height: 220px;
    }
  }
`;
