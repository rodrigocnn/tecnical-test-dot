import styled from 'styled-components'

export const BarTop = styled.div`

background-color: #454545;
padding-top: 1.5rem;
padding-bottom: 1.5rem;

h1 {
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 2rem;
}

p {
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  margin: auto;
}

@media only screen and (min-width: 1024px) {
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #4d6128;
    font-size: 6rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  p {
    color: #213800;
    font-size: 2.4rem;
    font-weight: 700;
  }
}
`

export const ArrowTop = styled.button`
  margin-top:4.5rem;
  background: transparent;
  border: none; 
  outline:transparent;
  position:absolute;
  left:40%;
  top:20%;
  text-align: center;
  -webkit-transform: translateY( -50% );
  -moz-transform: translateY( -50% );
  transform: translateY( -50% );
  z-index:999;
  
  :focus {
    outline: none !important;
  }

  @media only screen and (min-width: 1024px) {
    position:relative;
  }

`

