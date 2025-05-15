import usuariosService from "../services/usuarios.service.js";

const getUsuarios = async (req, res) => {
    try {
        const data = await usuariosService.getUsuarios();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}

const getUsuariosPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await usuariosService.getUsuariosPorId(id);
        if (!data) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
}
const postUsuarios = async (req, res) => {
    try {
        const usuario = req.body;
        console.log("Usuario:", Object.keys(usuario));
       if(Object.keys(usuario).includes("nombre") && Object.keys(usuario).includes("edad")){
            const data = await usuariosService.postUsuarios(usuario);
            res.send(data);
        }
       
       else {
        res.send("No se proporcionaron los datos correctos.")

        }
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
}

const patchUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const usuarioActualizado = await usuariosService.patchUsuarios(id, data);

        if (!usuarioActualizado) {
            return res.status(404).send("Usuario no encontrado");
        }

        res.send(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
};

export default {
    getUsuarios,
    getUsuariosPorId,
    postUsuarios,
    patchUsuarios
}