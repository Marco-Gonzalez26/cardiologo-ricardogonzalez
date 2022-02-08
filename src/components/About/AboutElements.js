import styled from 'styled-components'
import ImgBg2 from '../../images/ImgBg2.jpg'

export const AboutContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1)),  url(${ImgBg2});
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-size: contain;
`
export const AboutCard = styled.div`
  margin-top: 60px;
  height: 250px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  border-radius:20px;
  background: #fff;
  padding: 20px;

  @media screen and (max-width:650px) {
    width: 80%;
    flex-direction: column;
    height: 55vh;
    justify-content: center;
    align-content: center;
    text-align: center;
} 
`

export const AboutImg = styled.img`
  height: 210px;
  width: 250px;
  border-radius: 50%;
  margin-right: 50px;
  box-shadow: -8px 13px 29px -5px rgba(0,0,0,0.71);
-webkit-box-shadow: -8px 13px 29px -5px rgba(0,0,0,0.71);
-moz-box-shadow: -8px 13px 29px -5px rgba(0,0,0,0.71);

@media screen and (max-width:650px) {
    height: 200px;
    width: 200px;
    justify-content: center;
    align-content: center;
    box-shadow: none;
    margin: 5px;
    padding: 5px;
} 
`

export const AboutText = styled.p`
  font-size: 20px;
  color: #e31837;
  text-align: left;
  font-family: sans-serif;
  font-weight: bold;
  
@media screen and (max-width:650px) {
    justify-content: center;
    align-content: center;
    box-shadow: none;
    margin: 5px;
    padding: 5px;
    text-align: center;
}
`