import React from 'react'
import {BarTop, ArrowTop} from './styles'
import ImgArrowAbout from './../../images/arrow-slider.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header(){
    return (
        <BarTop>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit
            </p>
            <AnchorLink href='#about'>
                <ArrowTop>
                    <img src={ImgArrowAbout} alt="Go To ABout"/>
                </ArrowTop>
            </AnchorLink>
        </BarTop>
    )
}

export default Header