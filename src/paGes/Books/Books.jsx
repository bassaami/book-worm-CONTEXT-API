import React, { Suspense, useState } from 'react';
import IBookk from '../IBookk';

const Books = ({data}) => {

    let [allBooks, setAllBooks] = useState([])

    // let bookPromise = fetch('/public/booksData.json').then(resp => resp.json())

    return (
        <div>
    <h1 className='text-3xl text-center p-6' >BOOK </h1>        
    <Suspense fallback={<span>loading.......</span>} >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
    {
        data.map((singleBook) => <IBookk key={singleBook.bookId} singleBook={singleBook} ></IBookk>)
    }
    </div>
    
    </Suspense>
        </div>
    );
};

export default Books;