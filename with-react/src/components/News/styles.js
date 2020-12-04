import styled from 'styled-components'
import btnPrev from './../../images/btn-prev.png'
import btnNext from './../../images/btn-next.png'

export const SectionNews = styled.div`

background-color: #454545;
padding-top: 1.5rem;
padding-bottom: 1.5rem;
position:relative;

img{
  background-color: #6f6f6f;
  padding: 1rem;
  margin-bottom: 1rem;
}

@media only screen and (min-width: 1024px) {
  padding-top: 4rem;
  padding-bottom: 0rem;
}
    
`

export const BoxNews = styled.div`

h2 {
    font-size: 2.4rem;
    color: #fff;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    line-height: normal;
  }
    

`
export const CustomLeftArrow = styled.div`
  position: absolute;
  bottom:0rem;
  width: 50px;
  height: 35px;
  cursor: pointer;
  background: url(${btnPrev}) no-repeat scroll 0 0;
  left: 7.5rem;

  @media only screen and (min-width: 1024px) {
   
    left: 0rem;
    top:20%;
   
  }

`
export const CustomRightArrow = styled.div`
  position: absolute;
  bottom:0rem;
  width: 50px;
  height: 35px;
  cursor: pointer;
  background: url(${btnNext}) no-repeat scroll 0 0;
  right: 7.5rem;
  
  @media only screen and (min-width: 1024px) {
   
    right: 0rem;
    top:20%;
   
  }

`