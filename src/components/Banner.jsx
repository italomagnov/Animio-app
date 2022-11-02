import React from "react"
import styled from "styled-components"
import bannerImg from '../assets/images/banner (2).jpg'


const BannerImg = styled.img`
    max-width: 100%;
`

export const Banner = () => {
    return(
        <header>
            <BannerImg src={bannerImg} alt="banner da pagina" />
        </header>
    )
}
