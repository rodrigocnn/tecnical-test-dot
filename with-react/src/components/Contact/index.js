import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { SectionContact , Form} from './styles'
import MaskedInput from 'react-text-mask'


function Contact (){

   const [statusLabel, setStatusLabel] = useState([]);
   const {name, email, phone, message} = statusLabel

   const Masks ={
      phone: ()=> ['(' , /\d/,  /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
     
  }
  
   function handlerLabel(e){
     
      const {  id, value } = e.target;
      const nameClass=  e.type ===('focus')?'hidden-label':'show-label'
      
      if(!value){
         setStatusLabel(prevLabel => ({
            ...prevLabel,
            [id]: nameClass
        })); 
      } 
  }


     return(
        <SectionContact>
            <Container>
               <Form>
               
                  <fieldset>
                        <label className={name} for="name">*Nome:<span> Informe seu nome</span></label>
                        <input 
                           onFocus={handlerLabel}  
                           onBlur={handlerLabel} 
                           defaultValue="" 
                           id="name" 
                           type="text"   />
                  </fieldset>
            
                  <div className="group-form">
                     <fieldset>
                        <label className={email}  for="email">*Email:<span> Informe seu email</span></label>
                        <input 
                           onFocus={handlerLabel}  
                           onBlur={handlerLabel} 
                           defaultValue="" type="email"  
                           required  
                           id="email" />
                     </fieldset>
            
                     <fieldset>
                        <label className={phone}  for="phone">*Telefone:<span> (__)____-____</span></label>
                        <MaskedInput
                           mask={Masks.phone}
                           onFocus={handlerLabel}  
                           onBlur={handlerLabel}  
                           defaulValue=""
                         
                           required id="phone" />
                     </fieldset>
            
                  </div>
            
                  <fieldset>
                        <label className={message}  for="message">*Mensagem:<span> Escreva aqui</span></label>
                     <textarea 
                        onFocus={handlerLabel}  
                        onBlur={handlerLabel} 
                        class="floatlabel" 
                        required 
                        id="message" >
                     </textarea>
         
                  </fieldset>
                  
                  <fieldset>
                        <input type="submit" value="ENVIAR" />
                  </fieldset>
               
               </Form>

            </Container>
            </SectionContact>
     )
}

export default Contact



