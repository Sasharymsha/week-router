function Buttons({filteredArtist}) {
    return(
        <div className="cont">
<button className="change" onClick={() => filteredArtist("alexander grey")}>Alexander Grey</button>
<button className="change" onClick={() => filteredArtist("nick collins")}>Nick Collins</button>
<button className="change" onClick={() => filteredArtist("steve johnson")}>Steve Johnson</button>
<button className="change" onClick={() => filteredArtist("dids")}>Dids</button>
<button className="change" onClick={() => filteredArtist("virginia magat")}>Virginia Magat</button>
<button className="change" onClick={() => filteredArtist("dan cristian pădureț")}>Dan Cristian Pădureț</button>
        </div>
    )
}
export default Buttons;