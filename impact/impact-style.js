import styled from "styled-components";
export const ImpactStyle = styled.div`
@media (max-width: 920px) {
    .impact-title {
        font-size: 24px;
        font-weight: 600;
    }
}

.impact-title {
    margin-top: 50px;
    font-size: px;
    font-weight: 600;
    text-align: center;
    font-family: Inter, sans-serif;
    color:black;
    justify-content:center;
    padding-bottom:50px;
}

.impact-title span {
    color: #f52424ff;
}

.container-full {
    
    width: 450px;
    display: flex;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    margin-left:65px;
    color: black;
    gap: 50px;
}

.upper-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
    justify-content: center;
    margin-left: 10rem;      /* ← Pushes left on medium screens */
}

.lower-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
}

.container-item1,
.container-item2,
.container-item3,
.container-item4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 120px;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container-item1 { background: #ffdfe4; }
.container-item2 { background: #deffec; }
.container-item3 { background: #e2f0fa; }
.container-item4 { background: #ffe6e7; }

.container-item1 h2,
.container-item2 h2,
.container-item3 h2,
.container-item4 h2 {
    font-size: 18px;
    margin: 0;
    color: #444;
}

.container-item1 p,
.container-item2 p,
.container-item3 p,
.container-item4 p {
    font-size: 32px;
    font-weight: 700;
    color: #000;
}

.icon {
    width: 110px;
    height:auto;
    margin-left: 20px;
    position: relative;
    top:25px;
    left:8px;
}

/* ----------------------------------------
   FIX FOR 855px – CENTER THE UPPER ROW
----------------------------------------- */
@media (max-width: 1100px) {
    .upper-container {
        margin-left: 0 !important;
    }
}

@media (max-width: 768px) {
    .container-full {
        width: 100%;
        flex-direction: column;
        gap: 20px;
        padding: 0;
        margin: 0 auto;
        align-items: center;
    }

    .upper-container,
    .lower-container {
        margin-left: 0;
        width: 100%;
        justify-content: center;
    }

    .container-item1,
    .container-item2,
    .container-item3,
    .container-item4 {
        width: 90%;
        height: auto;
        padding: 20px;
    }

    .icon {
        width: 80px;
        top: 10px;
        left: 0;
    }
}
`;
