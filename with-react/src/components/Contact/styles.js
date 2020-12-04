import styled from 'styled-components'


export const SectionContact = styled.div`

padding-top: 1.5rem;
padding-bottom: 1.5rem;

background: linear-gradient(
    125deg,
    #6f6f6f 0%,
    #6f6f6f 49%,
    #454545 0%,
    #454545 0%
  );

  @media only screen and (min-width: 1024px) {
    background: linear-gradient(
      160deg,
      #6f6f6f 0%,
      #6f6f6f 49%,
      #454545 0%,
      #454545 0%
    );
  }
   
`
export const Form = styled.form`

  margin: 0 auto;
  font-weight: 400;

  fieldset {
    position: relative;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    .group-form {
      display: flex;
      justify-content: space-between;
      fieldset {
        width: 49%;
      }
    }
  }

  label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.8rem;
    font-weight: 700;

    span {
      color: #707070;
      font-weight: 400;
    }
  }

  input,
  textarea {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.8rem;
    background: #bebebe;
    padding: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.7rem;
  }

  textarea {
    width: 100%;
    min-height: 18rem;
  }

  input[type="submit"] {
    width: 50%;
    padding: 2rem;
    background: #fff;
    color: #333333;
    text-align: center;
    font-size: 1.8rem;
    display: block;
    margin: 1.5rem auto;
    font-weight: 700;

    &:focus {
    }
    &:active {
    }
    @media only screen and (min-width: 1024px) {
      width: 16.5rem;
    }
  }

  fieldset {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    margin: 0.75em 0 0.75em 0;
  }


`
