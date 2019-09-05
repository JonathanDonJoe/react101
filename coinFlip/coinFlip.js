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
    }
    render() {
        return( 
            <div className='coin-flip'>
                <button>Flip!</button>
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