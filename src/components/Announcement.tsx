import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

export const StickerStyle = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%
@media (min-width: 576px) {
  max-width:400px;
}
`;

export default function Announcement() {
  return (
    <StickerStyle>
        <div className="sticker-container">
            <div className="sticker-content">
                <p>Next Event: <br></br>Date</p>
                <p>Location</p>
            </div>
        </div>
    </StickerStyle>
  )
}

// next event title, date, location from meetup api
// next event title links to rsvp