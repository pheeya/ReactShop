import React from 'react'; // eslint-disable-next-line
import HomeCss from '../css/home.css'
import ProductCard from '../Components/ProductCard'
import candle1 from '../img/candle1.png'
import candle2 from "../img/candle2.png"
import candle3 from '../img/candle3.png';
import saleCandle1 from '../img/saleCandle1.png';
import saleCandle2 from '../img/saleCandle2.png';
import saleCandle3 from '../img/saleCandle3.png'
import Slider from '../Components//Slider'

var deadline = new Date('Dec 30, 2020 15:37:25')


var deadLine = new Date("Jan 5, 2020 15:37:25").getTime();
var timeLeft = deadLine - new Date().getTime()

class Home extends React.Component {
    constructor(props){
        super(props);
       
        this.state={
            now:new Date().getTime(),
            days : Math.floor(timeLeft/(1000*60*60*24)),
            hours : Math.floor((timeLeft%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
            minutes : Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 
            seconds : Math.floor((timeLeft % (1000 * 60)) / 1000)}
            this.timer = this.timer.bind(this)
    }
timer(){
    timeLeft = deadLine - new Date().getTime();
    this.setState({    now:new Date().getTime(),
        days : Math.floor(timeLeft/(1000*60*60*24)),
        hours : Math.floor((timeLeft%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
        minutes : Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 
        seconds : Math.floor((timeLeft % (1000 * 60)) / 1000)})
    
}

componentDidMount(){
    
    setInterval(this.timer,1000)
}


render() {return (
        <div class="home">
            <Slider></Slider>
            <h3 class="onlyLeftMargin">Viewed and bought recently</h3>
          <div class="allProductCards">
              <ProductCard title="Love Vanilla"
               content="Made with the finest vanilla. 
                This candle will keep your
                house smelling unlike your cat's poop. It will be very 
                pleasent to enter the
                house, unless you like how
                cat poop smells." candle= {candle1}
                price="39.99"
                ></ProductCard>

                 <ProductCard title="CrossRoads" 
                 content="Do you have too much money in your hands?
                Do you like showing it off because you want to boost your pathetic self esteem?
                Say no more. This candle is the perfect choice for you as it is disgusting from
                 the inside but looks good on the outside. Just like you.
                " candle= {candle2}
                price="199.99"
                ></ProductCard>
               
                <ProductCard
                title="grandma's candle"
                content="If you are anywhere near as broke as me but you want
                to keep up with your rich friends, this cheap candle might resonate with you.
                " candle= {candle3}
                price="2.3"
                ></ProductCard>

               
                </div>  
                <h3 class="onlyLeftMargin">On Sale</h3>
                <div class="timer">                                                                                                             
                <div class = 'timeLeft'>{this.state.days}</div>
                <div class = 'timeLeft'>{this.state.hours}</div>
                <div class= 'timeLeft'>{this.state.minutes}</div>
                <div class= 'timeLeft'>{this.state.seconds}</div>
                </div>
               <div class="allProductCards bottomCards">
                <ProductCard 
                title="S.T AL"
                candle={saleCandle1}
                content="To be honest I don't 
                know a thing about this candle. But its on sale
                 so there's that."
                 price = '20.00'
                ></ProductCard> 
                <ProductCard
                title="Angel Mugler"
                content="No body wanted to buy this candle and the stock
                is starting to smell like a decompoosing meerkat so this is now on sale.
                "
                price="15.00"
                candle={saleCandle2}
                ></ProductCard>  

                <ProductCard
                candle={saleCandle3}
                title='Expensive looking candle'
                content="There's not much to say about this candle,
                it smells like shit but it looks really expensive and flashy but
                its actually pretty cheap. Its not on sale though, it just is a cheap candle and
                 putting this under the Sales section was to lure some moms in.
                because $20? too expensive. WAS $50 and is now $20? Instant buy.
                 "
                 price="20.00"
                ></ProductCard>
                </div> 
        </div >
    );}
};




export default Home;