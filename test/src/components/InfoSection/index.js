import React from 'react'
import {
     InfoContainer, 
     InfoWrapper, 
     InfoRow, 
     Column1,
     TextWrapper,
     TopLine,
     Heading, 
     Subtitle, 
     BtnWrap,
     ImgWrap,
     Img,
     Column2,
     SignBtnLink} from './InfoElements'


const InfoSection = ({
    lightBg, 
    id,
    imgStart,
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2}) => {
    return (
        <>
          <InfoContainer  lightBg ={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart = {imgStart}>
                      <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading darkText = {darkText}>{headLine}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <SignBtnLink to= {'/signin'}
                                smooth ={true} 
                                duration={500} 
                                spy={true}
                                exact ="true"
                                offset ={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2 ={dark2 ? 1 : 0}>{buttonLabel}</SignBtnLink>
                            </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img  src = {img.default} alt='Signup' />
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
