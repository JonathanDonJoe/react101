// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function NewCard(props){
    // console.log(props);
    // const name = "Jon Joe";    
    // const title = "React From the Beginning";
    // const title = props.title;
    // const saleOn = false;
    return (
        <div className="col s4">
            <div className="card hoverable medium">
                <div className="card-image">
                    <img src={props.data.image} />
                </div>
                <div className="card-content">
                    <p>{props.data.course}</p>
                    <p>{props.data.instructor}</p>
                </div>
            </div>
        </div>    
    )
}
