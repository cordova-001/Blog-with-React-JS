const Home = () => {
    let name = "Akorede";

    const clickatell = () => {
        return (

            console.log('Take effect')
            //alert('Your try works')
        );
    }


    return (
        <div className="navbar">
            <div className="links">
                <h3>{name}</h3>
                <button onClick={clickatell}>Register here</button>
            </div>
        </div>
    );
}

export default Home;
