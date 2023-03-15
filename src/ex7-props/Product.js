import React from 'react';

const Product = (props) => {
    
    //props is always readonly -> we can only render & display it
    const {title, description, price, picture_URL} =props.data;
// <h4 className='card-title'>{props.data.title}</h4> ->  <h4 className='card-title'>{title}</h4>
    return (
        
            <div className='col-md-3'>
                        <div className='card p-3 mb-2'>
                            <img 
                            src={picture_URL} 
                            alt='Test' 
                            className4='card-img-top'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>{title}</h4>
                                <p className='card-text'>
                                    {description}
                                </p>
                                <h5>Price: {price} SEK</h5>
                            </div>
                            <div className='card-footer d-grid'>
                                <button className='btn btn-primary'>Add to Cart!</button>

                            </div>
                        </div>
                    </div>


        
    );
};

export default Product;