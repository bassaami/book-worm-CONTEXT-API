import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utility/addTDB';

const BookDetails = () => {

let {id} = useParams()
let bookId = parseInt(id)
let data = useLoaderData()
let singleBook = data.find(bok => bok.bookId === bookId)

let {bookName, author, image} = singleBook
console.log(singleBook);

let handleMarkAsRead = id => {
// store with id
// where to store
// array or collection
// if book already exist then show alert
// if book not exist then push in the array

addToStoreDB(id)

}

    return (
        <div>
    <div className="w-2/3 mx-auto flex">
    <img className='w-48 m-8' src={image} alt=""  />
    <div className="mt-12">
    <h2 className='font-bold text-2xl' >{bookName} </h2>
<p>By = {author} </p>
    <button onClick={() => handleMarkAsRead(id)} className='btn btn-error m-3'> Mark as Read</button>
    <button className='btn btn-info' >Add to WishList</button>
    </div>
    </div>    
        </div>
    );
};

export default BookDetails;