import 'bootstrap/dist/css/bootstrap.min.css';
import './saved.css'
import {useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';


const Saved =  () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetcher = async () => {
        const response = await fetch("/api/books")
        if (response.ok){
            const api = await response.json()
            setData(api)
        }else{
            console.log("There is a problem")
        } 
        }
        fetcher();
      }, []);

      const dele = (id) => {
        fetch("/api/books/" + id, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((res) => console.log("book deleted from db", res));
        setData(data.filter((data) => data._id !== id));
      }
    
    return(
        <div id = "Saved">
            <h3>Saved Books</h3>
               {data.length > 0 && (<div id = "saved-results">
                    <h3>Results</h3>
                        {data.map(name => {
                    return(
                        <div key = {name._id}>
                            <Container>
                                    <Row>
                                        <Col md = "10"><h4>{name.title}</h4></Col>
                                        <Col md = "2"><button><a href = {name.link}  target="_blank" rel="noreferrer">View</a></button> <button onClick = {() => dele(name._id)}>Delete</button></Col>
                                    </Row>
                                </Container>
                                            <p id = "author">Written by {name.authors}</p>
                                <div key = {name.id}>
                                    <Container>
                                        <Row> 
                                            <Col md = "2"><img src = {name.image } alt ={`${name.title} book`}/></Col>
                                            <Col md = "10"><p id = "description">{name.description}</p></Col>
                                        </Row>
                                    </Container>
                                </div>
                        </div>)})}
                </div>)}
        </div>
    )
}

export default Saved;