import React from 'react';
import bookimg from '../assets/books.jpg'

const Header = () => {
    return (
        <div className='flex items-center p-10 w-full justify-around'>
            <div className="">
<h1> Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
<button className='btn btn-primary' >test test</button>
            </div>
            <div className="">
                <img className='w-3/12' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Header;