import ImageAbout from './../../images/about-featured.jpg'
import { Container } from 'react-bootstrap';
import {SectionAbout , BoxAbout} from './styles'

function About (){
    
     return(
        <SectionAbout id="about">

            <Container>

                <div class="row">
                    <div class="col-md-5">
                         <BoxAbout>
                            <img alt="About Company" class="img-fluid" src={ImageAbout} />
                        </BoxAbout>
                    </div>

                    <div class="col-md-7">
                    <BoxAbout>
                        <h2>LOREM IPSUM</h2>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis.  
                        </p>
                        
                        <p>
                        <span>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                        maecenas accumsan lacus vel facilisis. </span>
                        </p>
                       
                        <p> <i>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas 
                            accumsan lacus vel facilisis. </i>
                            
                            <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </p>

                    </BoxAbout>

                    </div>
                </div>

            </Container>
        </SectionAbout>
     )
}

export default About