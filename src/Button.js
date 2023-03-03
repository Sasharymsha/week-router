
function Button({ data, setFlower }) {
    const filteredFlowers = searchTerm => {
        const filtredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(term =>{
                if (term === searchTerm) {
                    filtredResult.push(item);
                    setFlower(filtredResult);
                }
            })
        })
    }
    return(
        <div className="cont">
<button className="change" onClick={() => filteredFlowers("rose")}>Rose</button>
<button className="change" onClick={() => filteredFlowers("peonies")}>Peonies</button>
<button className="change" onClick={() => filteredFlowers("green flower")}>Green flower</button>
<button className="change" onClick={() => filteredFlowers("tulips")}>Tulips</button>
<button className="change" onClick={() => filteredFlowers("wildf lowers")}>Wild flowers</button>
<button className="change" onClick={() => filteredFlowers("all flowers")}>All flowers</button>
        </div>
    )
}
export default Button;