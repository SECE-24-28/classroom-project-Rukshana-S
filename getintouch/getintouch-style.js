import styled from "styled-components";

export const GetInTouchStyle = styled.div`

.getintouch-outer-container {
    margin-top: 3rem;
    background-color: rgba(252, 41, 71, 0.875);
    width: 100%;
    display: flex;
    justify-content: center;
}

.getintouch-inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 95%;
    max-width: 1400px;
    padding: 3rem 1rem;
    gap: 40px;
    color: white;
}


.getintouch-left-container {
    width: 100%;
    max-width: 600px;
}

.getintouch-left-container h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.getintouch-left-container p {
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

.getintouch-left-container button {
    background: white;
    color: black;
    font-size: 1.4rem;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

.getintouch-left-container button:hover {
    background: #f0f0f0;
}


.getintouch-right-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}


.getintouch-outer-container {
    margin-top: 3rem;
    background-color: rgba(252, 41, 71, 0.875);
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;      /* IMPORTANT: prevents circles from going outside */
}


.circle-big {
    position: absolute;
    width: 400px;
    height: 410px;
    background: #D63A52;
    border-radius: 50%;
    right: 10px;     /* pushes circle to the right like image */
    bottom:90px;        /* moves it slightly upward */
    z-index: 0;
}

.circle-small {
    position: relative;
    width: 400px;
    height: 400px;
    background:#D63A52;
    border-radius: 50%;
    left: 130px;    
    bottom:150px;       
    z-index: 0;
}


.getintouch-image {
    right: 150px;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
}

/* ---------- RESPONSIVE BREAKPOINTS ---------- */

@media (min-width: 768px) {
    .getintouch-image {
        width: 340px;
        height: 340px;
    }
}

@media (min-width: 1024px) {
    .getintouch-inner-container {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }

    .getintouch-left-container {
        max-width: 600px;
    }

    .getintouch-image {
        width: 380px;
        height: 380px;
    }
}

@media (min-width: 1200px) {
    .getintouch-image {
        width: 420px;
        height: 420px;
    }
}

`;
