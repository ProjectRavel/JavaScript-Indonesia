const promise = new Promise((resolve,reject) => {
    let fileloaded = false

    if(fileloaded){
        resolve("File is Loaded")
    }else{
        resolve("File NOT Loaded!")
    }
})

promise
.then(value => console.log(value))
.catch(error => console.log(error))