import * as fs from 'fs'


const pathArchivo = './userData.json';

const guardarDB = (data) => {

    fs.writeFileSync(pathArchivo, JSON.stringify(data));
}

const leerDB = ()=> {

    if(!fs.existsSync(pathArchivo)){
        
        return 
    }
    const info = fs.readFileSync(pathArchivo, {encoding: 'utf-8'});
    
    if(info !== '') {
        const data = JSON.parse(info)
        return data;

    }else{
        return []

    }
}




export {
    guardarDB,
    leerDB,
};