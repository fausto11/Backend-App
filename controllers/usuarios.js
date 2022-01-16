const{response}= require('express');

const usuariosGet=(req, res=response)=> {
    const {q,nombre='NO name', apikey,page,limit}=req.query;

    res.json({
        msg:"get API  - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut=(req, res)=> {
    const {id}=req.params;

    res.status(404).json({
        msg:"get API",
        id
    });
}

const usuariosPost=(req, res)=> {
    const {nombre,edad}=req.body;

    res.status(200).json({
        msg:"get API",
        nombre,
        edad
    });
}

const usuariosDelete=(req, res)=> {
    res.json({
        msg:"get API"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}