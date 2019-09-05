let setOfCards = data.map( (item,i) => 
    <CardClass data={item} key={i} />);

// console.log(setOfCards);

ReactDOM.render(
    <div className="container">
        <div className='row'>
            {setOfCards}
        </div>
    </div>
    ,
    document.querySelector('#root')
)