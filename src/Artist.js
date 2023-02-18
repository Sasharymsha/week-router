function Artist({anyArtist}) {
return (
<div className="products">
    {anyArtist.map((element => {
    const {artistName} = element;
    return (
            <div className="product-card">
                <p>{artistName}</p>
            </div>
            )
        }))}
</div>
)

}

export default Artist;