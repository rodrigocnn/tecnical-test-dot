import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageTest from './../../images/slider.jpg'
import { Container } from 'react-bootstrap';
import {SectionNews, BoxNews, CustomLeftArrow, CustomRightArrow } from './styles'
import btnPrev from './../../images/btn-prev.png'
import btnNext from './../../images/btn-next.png'


const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
   
    return (
      <div className="carousel-button-group"> 
        <img className='btn-slider prev' alt="prev" src={btnPrev} onClick={() => previous()} />
        <img className='btn-slider next' alt="next" src={btnNext} onClick={() => next()} />
       
      </div>
    );
  };

function News (){
    
     return(
        <SectionNews>
            <Container>
                <Carousel 
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                infinite
                additionalTransfrom={0}
                itemClass="col-md-4"
                containerClass="labirinto"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                responsive={responsive}>
            


                <div >
                        <img className="img-fluid" alt="news" src={ImageTest}/>
                        <BoxNews>
                          <h2>LOREM IPSUM</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.
                          </p>
                        </BoxNews>
                  </div>

                  <div >
                    <img className="img-fluid" alt="news" src={ImageTest}/>
                    <BoxNews>
                      <h2>LOREM IPSUM</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                        Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan lacus vel facilisis.
                      </p>
                    </BoxNews>
                 </div>

                 <div >
                 <img className="img-fluid" alt="news" src={ImageTest}/>
                 <BoxNews>
                   <h2>LOREM IPSUM</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                     incididunt ut labore et dolore magna aliqua. 
                     Quis ipsum suspendisse ultrices gravida. Risus commodo
                     viverra maecenas accumsan lacus vel facilisis.
                   </p>
                 </BoxNews>
              </div>

              <div >
              <img className="img-fluid" alt="news" src={ImageTest}/>
              <BoxNews>
                <h2>LOREM IPSUM</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. 
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis.
                </p>
              </BoxNews>
        </div>

        <div >
        <img className="img-fluid" alt="news" src={ImageTest}/>
        <BoxNews>
          <h2>LOREM IPSUM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </p>
        </BoxNews>
  </div>

  <div >
  <img className="img-fluid" alt="news" src={ImageTest}/>
  <BoxNews>
    <h2>LOREM IPSUM</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. 
      Quis ipsum suspendisse ultrices gravida. Risus commodo
      viverra maecenas accumsan lacus vel facilisis.
    </p>
  </BoxNews>
</div>

<div >
<img className="img-fluid" alt="news" src={ImageTest}/>
<BoxNews>
  <h2>LOREM IPSUM</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Quis ipsum suspendisse ultrices gravida. Risus commodo
    viverra maecenas accumsan lacus vel facilisis.
  </p>
</BoxNews>
</div>

<div >
<img className="img-fluid" alt="news" src={ImageTest}/>
<BoxNews>
  <h2>LOREM IPSUM</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Quis ipsum suspendisse ultrices gravida. Risus commodo
    viverra maecenas accumsan lacus vel facilisis.
  </p>
</BoxNews>
</div>

<div >
<img className="img-fluid" alt="news" src={ImageTest}/>
<BoxNews>
  <h2>LOREM IPSUM</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Quis ipsum suspendisse ultrices gravida. Risus commodo
    viverra maecenas accumsan lacus vel facilisis.
  </p>
</BoxNews>
</div>


                
                </Carousel>
            </Container>
        </SectionNews>
     )
}

export default News