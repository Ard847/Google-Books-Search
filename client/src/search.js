import {useState} from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'

const Search = () => {
    const [data,setData] =  useState([])
    const type = (evt) => {
        console.log(evt.target.value)
    }
    const click = async () => {
        const response = await fetch("http://localhost:3001/api/books",{
            method: 'POST',
            body: JSON.stringify()
        })
        if (response.ok){
            const api = await response.json()
            setData( (data) => [...data,api])
            console.log(data)
        }else{
            console.log("There is a problem")
        }
        
    }
    return(
        <div>
            <div id = "book">
                <h3>Book Search</h3>
                <p>Books</p>
                 <input type = "text" onChange = {type}/>
                 <button id = "search" onClick = {() => click()}>Search</button>
            </div>

           { data[0] && (<div id = "results">
                <h3>Results</h3>
                    {data.map((name) => {
                        return(
                            <div>
                                <Container>
                                    <Row>
                                        <Col md = "10"><h4>{name.Answer.title}</h4></Col>
                                        <Col md = "2"><button>View</button> <button>Save</button></Col>
                                    </Row>
                                </Container>
                                            <p id = "author">Written by {name.Answer.authors}</p>
                                <div>
                                    <Container>
                                        <Row> 
                                            <Col md = "2"><img src = {name.Answer.image} alt ={name.Answer.title + "book photo"}/></Col>
                                            <Col md = "10"><p id = "description">{name.Answer.description}</p></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>)
                    })}
            </div>)}
        </div>
    )
}

export default Search;