import React from 'react'
import Icon1 from '../../images/courier.svg';
import Icon2 from '../../images/Scooter_Outline(2).svg';
import Icon3 from '../../images/delivery.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2,
    ServicesWrapper,
    ServicesCard, 
    ServicesIcon, 
    ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Courier</ServicesH2>
                    <ServicesP>Content1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Bike Taxi</ServicesH2>
                    <ServicesP>Content2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Home Delivery</ServicesH2>
                    <ServicesP>Content3</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
