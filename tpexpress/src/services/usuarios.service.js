import usuariosModels from "../models/usuarios.models.js";

const getUsuarios = async () => {
    const data = await usuariosModels.getUsuarios();
    return data;
}

const getUsuariosPorId = async (id) => {
    const usuario = await usuariosModels.getUsuariosPorId(id);
    if (!usuario) return null;
    return usuario;
}

const postUsuarios = async (usuario) => {
    const data = await usuariosModels.postUsuarios(usuario);
    return data;
}

const patchUsuarios = async (id, data) => {
    const usuarioActualizado = await usuariosModels.patchUsuarios(id, data);
    return usuarioActualizado;
}

export default {
    getUsuarios,
    getUsuariosPorId,
    postUsuarios,
    patchUsuarios
}