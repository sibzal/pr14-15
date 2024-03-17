import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner'
import SliderS from '../../components/SliderS/SliderS'

export default function Start (){

    return(
        <>
        <Banner />
        <br />
        <Accordion title="Вопрос 1" content="Ответы на вопрос 1"/>
        <Accordion title="Вопрос 1" content="Ответы на вопрос 1"/>
        <Accordion title="Вопрос 1" content="Ответы на вопрос 1"/>
        <br />
        <SliderS />
        </>
        
    )
}