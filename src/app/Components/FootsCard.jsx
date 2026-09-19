import Image from 'next/image';
import React from 'react';

const FootsCard = ({foots}) => {
    const {dish_name,category,image_link}= foots
    return (
      <div className="card bg-base-100  shadow-sm">
  <figure>
   <Image height={300} width={300} src={image_link} alt='Internet Problem' ></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{dish_name}</h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default FootsCard;