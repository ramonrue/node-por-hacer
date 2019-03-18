
const fs=require('fs');


let listadoPorhacer=[];


const guardaDB=()=>{
    let data=JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar',err);
      });
    
}

const cargarDB=()=>{
    try {
        listadoPorhacer=require('../db/data.json');    
    } catch (error) {
        listadoPorhacer=[];
    }
    
    //console.log(listadoPorhacer);
}

const getListado=()=>{
    cargarDB();
    return listadoPorhacer;
}

const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index=listadoPorhacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    });

    if (index>=0) {
        listadoPorhacer[index].completado=completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar=(descripcion)=>{
    cargarDB();

    let nuevoListado=listadoPorhacer.filter(tarea=>{
        return tarea.descripcion !== descripcion
    });
    if (listadoPorhacer.length === nuevoListado.length) {
        return false;
    }else{
        listadoPorhacer=nuevoListado;
        guardaDB();
        return true ;
    }
    
}

const crear = (descripcion=>{
    
    cargarDB();


    let porhacer={
        descripcion,
        completado:false
    };
    listadoPorhacer.push(porhacer);

    guardaDB();

    return porhacer;
})

module.exports={
        crear,
        getListado,
        actualizar,
        borrar
}