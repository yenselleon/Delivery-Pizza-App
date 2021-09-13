const urlImage = 'https://jsonplaceholder.typicode.com/photos';

const getImage = async()=> {

    try{

        const resp = await fetch(urlImage);
        const image = await resp.json();
        return image;


    }catch(err){
        return console.log(err)
    }

}

export {
    getImage
}