import React, { useEffect, useState } from 'react';
import Product from '../ex7-props/Product';

const ProductList = () => {

    const [products , setProducts ] = useState([]);
    // products is an array with 1 or more characteristics

    useEffect(()=>{
        //call API to get all products from Backend
    const responsData = [ {title: "Old Vintage Camera", 
        description: "None functioning camera",
        price: 500,
        picture_URL: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {title: "Camera Lens", 
        description: "Nikon Camera Lens",
        price: 6000,
        picture_URL: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {title: "Watch", 
        description: "Wonderful Michael Kors Watch",
        price: 15000,
        picture_URL: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {title: "Old Vintage Camera", 
        description: "None functioning camera",
        price: 500,
        picture_URL: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
        setProducts(responsData);

    }, []);
    return (
        <div className='container card-group'>
            <div className='row'>
                {
                    products.map(product => {
                        return <Product data ={product}/>
                    })
                }

            </div>
        </div>
    );
};

export default ProductList;