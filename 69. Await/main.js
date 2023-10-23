
async function loadfile(){

    let fileloaded = false;

    if(fileloaded){
        return "File is loaded"
    }else{
        throw "File NOT Loaded"
    }
}
async function startprocess(){
    try{
        let message = await loadfile()
        console.log(message)   
    }catch(error){
        console.log(error)
    } 
}

startprocess()