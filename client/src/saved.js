import './saved.css'
const Saved = () => {
/*     const response = await fetch("http://localhost:3001/api/result")
        if (response.ok){
            const api = await response.json()
            setData( (data) => [...data,api])
            console.log(data)
        }else{
            console.log("There is a problem")
        } */
    return(
        
        <div id = "Saved">
            <h3>Saved Books</h3>
                <div id = "saved-results">
                    <h3>Results</h3>
                    <div>
                        <h4>Harry Poter</h4>
                    </div>
                </div>
        </div>
    )
}

export default Saved;