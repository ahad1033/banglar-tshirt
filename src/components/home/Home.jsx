import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../cart/Cart';
import './Home.css'

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handelAddToCart = tshirt =>{
        console.log(tshirt)
    }
    
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt=> <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handelAddToCart={handelAddToCart}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;