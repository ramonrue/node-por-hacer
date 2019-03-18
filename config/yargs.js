const descripcion={
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a realizar'
};

const completado = {
    alias:'c',
    default:true,
    desc: 'Marca como completado o pendiente'
}

const argv=require('yargs')  
    .command('crear','Crear una tarea por hacer',{
        descripcion
    })
    .command('borrar','Eliminar una tarea',{
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })    
    .help()
    .argv;

module.exports={
    argv
}