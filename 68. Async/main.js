// aync =   membuat function menjadi return promise 

async function loadfile(){

    let fileloaded = false;

    if(fileloaded){
        return "File is loaded"
    }else{
        throw "File NOT Loaded"
    }
}

loadfile()
.then(value => console.log(value))
.catch(error => console.log(error))