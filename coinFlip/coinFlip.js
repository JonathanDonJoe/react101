class CoinFlip extends React.Component {
    constructor() {
        super();
        // React does not care about heads/tails/coin
        this.heads = 'buffalo-nickel-heads.jpg'
        this.tails = 'buffalo-nickel-tails.png'
        this.coin = [
            this.heads, this.tails
        ]
        this.state = {
            image: this.coin[0]
        }
        // this.flip = this.flip.bind(this);
    }

    // flip() {
    //     let coinSide = Math.round(Math.random());
    //     this.setState({
    //         image: this.coin[coinSide]
    //     })
    // }

    flip = () => {
        let coinSide = Math.round(Math.random());
        this.setState({
            image: this.coin[coinSide]
        })
    }

   

    render() {
        return( 
            <div className='coin-flip'>
                <button onClick={this.flip} className='minus waves-effect waves-light btn'>Flip!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}

ReactDOM.render(
    <CoinFlip />
    ,
    document.querySelector('#root')
)