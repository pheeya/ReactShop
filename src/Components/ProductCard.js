import React from 'react';
import productCss from '../css/productCard.css'
function Card(props){
return(
    <div class="productCard">
<div class="imageHolder"><img src={props.candle}/></div>
<div class="productCardContent">
<h3 class="price">{props.title}</h3>
<p>{props.content}</p>
<h3 class="price">${props.price}</h3>
    <button>Put in basket</button>
</div>
    </div>
);
};

export default Card;