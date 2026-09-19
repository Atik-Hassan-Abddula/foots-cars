import React from 'react';
import FootsCard from '../Components/FootsCard';

const FoodsPage = async () => {
    const resolve = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await resolve.json()
    const foots = data.data
    return (
        <div>
            <h1>Foots Page</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    foots.map(foots=> <FootsCard foots={foots} key={foots.id}> </FootsCard>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;