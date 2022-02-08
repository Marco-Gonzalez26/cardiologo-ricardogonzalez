import React from 'react';
import Ricardo from '../../images/Ricardo.jpeg'
import {AboutContainer, AboutCard, AboutImg, AboutText} from './AboutElements'

function AboutComponent() {
  return( 
  <>  
    <AboutContainer id='mi-perfil'>
      <AboutCard>
        <AboutImg src={Ricardo}/>
        <AboutText>
          Dr Ricardo Gonzalez medico cardiologo egresado de la Universidad el Zulia (LUZ), cuento con 15 años de experiencia y recientemente realice un curso de Ecocardiografia en Adulto en Guayaquil
        </AboutText>
      </AboutCard>
    </AboutContainer>
  </>
  );
}

export default AboutComponent;
