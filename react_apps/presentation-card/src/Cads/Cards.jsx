import React from 'react'
import Card from 'react-bootstrap/Card'
//import Card from './CardUI';
import CardColumns from 'react-bootstrap/CardColumns'
import Data from '../Data/Data'
import Data2 from '../Data/Data2'
//import Col from 'react-bootstrap/Col'
//import './card-sty
import Button from 'react-bootstrap/Button'
import cat from '../assets/custom.jp2'
function Cardses(props) {
    const render = (card,index ) => {
            return (
                <Card style = {{ backgroundColor : 'white' }}>
                    <Card.Img  src = {card.image}/>
                    <Card.Body>
                        <Card.Title><center><h2>{card.title}</h2></center></Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    {
                        card.tag === true &&
                            <center><Card.Footer><Button href={card.link} target="_blank" variant="primary" size="lg">{card.check}!</Button>{' '}</Card.Footer></center>
                    }
                    </Card.Body>
                </Card>

            );
    };
    let Datax;
    if(props.data === 1){
         Datax = Data
    }else{
       Datax = Data2
    }

    return Datax.map(render)

};
function Cardse(props) {
    let  eng = "Checa mi github"
    let  esp = "Check my github"
    return(
        <CardColumns>
            <Cardses data ={props.data}/>
            <Card >
        <Card.Body >
            <Card.Img src={cat} alt="Card image"/>
        </Card.Body>
                <h4>
                    <a  rel="noopener noreferrer" target="_blank" href = "https://github.com/yollotltamayo">
                        <center><small className="text-muted">{props.data !== 1?esp:eng}</small></center>
                    </a>
                </h4>
        </Card>
        </CardColumns>
    )
}
            
export default Cardse;
