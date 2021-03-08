import {useState} from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'

const Search = () => {
    const [data,setData] =  useState([])
    const [text,setText] = useState();
    const type = (evt) => {
        setText(evt.target.value)
    }
    const click = async () => {
        setText(text)
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        response = await response.json()
        setData(response.items)
    }

    const save = (titleN,authorsN,imageN,descriptionN,linkN) => {
        const books = {
            authors :authorsN,
            description : descriptionN,
            image : imageN,
            link : linkN,
            title : titleN,
        }
        fetch('/api/books', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
             },
            body: JSON.stringify({books}),
        })
        .then(response => response.json())
        .then(res => {
            setData(res)
        })
        .catch((error) => {
            console.error('Error:', error);
        });   
    }
    return(
        <div>
            <div id = "book">
                <h3>Book Search</h3>
                <p>Books</p>
                 <input type = "text" onChange = {type}/>
                 <button id = "search" onClick = {() => click()}>Search</button>
            </div>

           { data.length > 0 && (<div id = "results">
                <h3>Results</h3>
                    {data.map((name) => {
                        return(
                            <div key = {name.id}>
                                <Container>
                                    <Row>
                                        <Col md = "10"><h4>{name.volumeInfo.title}</h4></Col>
                                        <Col md = "2"><button>View</button> <button onClick = {() => save(name.volumeInfo.title,name.volumeInfo.authors,name.volumeInfo.imageLinks.thumbnail,name.volumeInfo.description,name.selfLink)}>Save</button></Col>
                                    </Row>
                                </Container>
                                            <p id = "author">Written by {name.volumeInfo.authors}</p>
                                <div key = {name.id}>
                                    <Container>
                                        <Row> 
                                            <Col md = "2"><img src = {name.volumeInfo.imageLinks.thumbnail} alt ={`${name.volumeInfo.title} book`}/></Col>
                                            <Col md = "10"><p id = "description">{name.volumeInfo.description}</p></Col>
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