import React, { use } from 'react';
import { Link } from 'react-router';

const IBookk = ({singleBook}) => {
    // let data = use(bookPromise)
    // console.log(singleBook);

    let {bookName, image, bookId, publisher, category, rating, totalPages, tags, yearOfPublishing} = singleBook

    return (
        < Link to={`/bookDetails/${bookId}`} >
<div className="card bg-base-100 w-96 border p-4 shadow-sm">
  <figure className='p-3 bg-gray-800 w-2/3 mx-auto' >
    <img className='h-[166px]'
      src={image }
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex gap-8">
      {
        tags.map(tagg => <button>{tagg} </button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge  badge-secondary">{yearOfPublishing} </div>
    </h2>
    <div className="border-t-1 border-dashed "></div>
    <p className='line-clamp-3' > Published by: {publisher} <br /> Total page: {totalPages} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category} </div>
      <div className="badge badge-outline">{rating} </div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default IBookk;