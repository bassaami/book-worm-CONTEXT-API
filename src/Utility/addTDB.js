let getStoredBook = () => {
// a 
    let storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        let storedBookSTR = JSON.parse(storedBookSTR)
        return storedBookSTR
    }
    else{
        return []
    }
}

let addToStoreDB = (id) => {

    let storedBookDATA = getStoredBook()

    if(storedBookDATA.includes(id)) {
alert("This Book Already Exist")
    }
    else{
        storedBookDATA.push(id)

        let data = JSON.stringify(storedBookDATA)
        localStorage.setItem("readList", data)

    }

}

export { addToStoreDB, getStoredBook }