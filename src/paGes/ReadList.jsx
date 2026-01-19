import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../Utility/addTDB';
import IBookk from './IBookk';

const ReadList = () => {
    
    let [readList, setReadList] = useState([])
let [sort, setSort] = useState()

let data  = useLoaderData()
console.log(data);

useEffect(() => {
    let storedBookData = getStoredBook()
    let ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    let myReadList = data.filter(bok => ConvertedStoredBooks.includes(bok.bookId))
    console.log(myReadList);

    setReadList(myReadList)

},[])

let handleSort = (typex) => {
    setSort(typex)
    if (typex === "pagex") {
        let sortByPage = [...readList].sort((a, b) => a.totalPages- b.totalPages)
        setReadList(sortByPage)
    }
}

    return (
        <div>
    <details className='dropdown'>
    <summary className='btn m-1' >Sort By = {sort?sort:""} </summary>
    <ul className='menu dropdown-content z-1 w-52 p-2 bg-base-100'>
        <li><a onClick={() => handleSort("pagex")} href="">Pages</a></li>
        <li><a onClick={() => handleSort("rating")} href="">Ratings</a></li>
    </ul>
    </details>

<Tabs>
    <TabList>
      <Tab>READ BOOK LIST</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Read Books Number= {readList.length} </h2>
      {
        readList.map(bk => <IBookk key={bk.bookId} singleBook={bk} ></IBookk>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
</Tabs>           
        </div>
    );
};

export default ReadList;