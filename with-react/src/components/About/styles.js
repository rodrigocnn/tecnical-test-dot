import styled from 'styled-components'


export const SectionAbout = styled.div`

background-color: #707070;
padding-top: 1.5rem;
padding-bottom: 1.5rem;

@media only screen and (min-width: 1024px) {
    padding-top: 3rem;

    h2,
    p {
      text-align: left;
    }
  }
    
`

export const BoxAbout = styled.div`

img {
    border-radius: 50%;
    border: 2rem solid #313131;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 3.6rem;
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;
    margin-top: 2rem;
  }

  p {
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  span {
    font-weight: 700;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 3rem;

    h2,
    p {
      text-align: left;
    }
  }
    

`
