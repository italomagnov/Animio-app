import React from "react";
import styled from "styled-components";

const PortraitStyle = styled.div`
    width: 380px;
    height: 450px;
    border: 2px solid #f2f2f2;
    border-radius: 20px;
`

export const Portrait = () => {
    return(
        <PortraitStyle>
            <img src="" alt="" />
        </PortraitStyle>
    )
}