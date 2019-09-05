import React from 'react'; // eslint-disable-next-line
import HomeCss from '../css/home.css'
import ProductCard from '../Components/ProductCard'
import candle1 from '../img/candle1.png'
import candle2 from "../img/candle2.png"
import candle3 from '../img/candle3.png'
import Slider from '../Components//Slider'
function Home(props) {
    return (
        <div class="home">
            <Slider></Slider>
            <h2 class="homeCategory">Popular</h2>
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
        </div >
    );
};

export default Home;