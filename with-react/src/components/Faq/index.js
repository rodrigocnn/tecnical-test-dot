import { Container, Accordion , Card, Button } from 'react-bootstrap';
import {SectionFaq, ContentFaq} from './styles'
import ImageTest from './../../images/slider.jpg'

function Faq(){

 const RenderContent = ()=>{

    return(
        <ContentFaq>
         
            <div className="col-md-4">
               <img className="img-fluid" alt="news" src={ImageTest}/>
            </div>
            <div className="col-md-7">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices 
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
             </div>
        </ContentFaq>
    )

 }

    return(
        <SectionFaq>
            <Container>

            <Accordion >

                <Card className="card-header-custom">
                    <Accordion.Toggle className="toggle-custom"  as={Card.Header} eventKey="0">
                       <span>Lorem Ipsum</span>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <RenderContent />
                        </Card.Body>
                    </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>

                <Card className="card-header-custom">
                    <Accordion.Toggle className="toggle-custom"  as={Card.Header} eventKey="1">
                        <span>Lorem Ipsum</span>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <RenderContent />
                        </Card.Body>
                    </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>

                <Card className="card-header-custom">
                    <Accordion.Toggle className="toggle-custom"  as={Card.Header} eventKey="2">
                    <span>Lorem Ipsum</span>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <RenderContent />
                        </Card.Body>
                    </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>

                <Card className="card-header-custom">
                    <Accordion.Toggle className="toggle-custom"  as={Card.Header} eventKey="3">
                        <span>Lorem Ipsum</span>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <RenderContent />
                        </Card.Body>
                    </Accordion.Collapse>
                    </Accordion.Toggle>
                </Card>
            
           
          </Accordion>
            </Container>
         </SectionFaq>
    )
}

export default Faq