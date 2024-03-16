import React from 'react';

const SingleProduct = ({product , handleAddToCart}) => {
    const {title, price ,description ,image} = product;
    return (
        <div className=''>
            <div className=" p-4  card-container shadow-lg w-96 text-center border border-lg border-solid w-full">
                <div className="card">
                  
                   <img className="w-36 mx-auto h-40 mb-5" src={image} alt="" />
                    
                      <h1 className='text-3xl bold'>{title.slice(0,10)}</h1>
                 
                   <p className='mt-5'>{description.slice(0,70)}</p>
                    <div className=" card-footer flex justify-around mt-5">
                        <h1>${price}</h1>
                        <button onClick={(e) => handleAddToCart(product)}  className="w-24 border bg-grey-400">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;