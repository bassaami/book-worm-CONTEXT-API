import React from 'react';
import Header from './Header';
import Books from '../paGes/Books/Books';
import IBookk from '../paGes/IBookk';
import { useLoaderData } from 'react-router';


const Hero = () => {
let data = useLoaderData()
console.log(data);

    return (
        <div className="">
<Header></Header>
<Books data={data} ></Books>

        </div>
    );
};

export default Hero;