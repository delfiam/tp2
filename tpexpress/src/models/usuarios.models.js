const usuarios = [
  { id: 1, nombre: "Delfi", edad: 20 },
  { id: 2, nombre: "Molly", edad:7 },
  { id: 3, nombre: "Olivia", edad: 22 },
  {id: 4, nombre: "Sabrina", edad: 26 },
  { id: 5, nombre: "Avril", edad: 19}

]

const getUsuarios = async () => {
    return await usuarios
    }

const getUsuariosPorId = async (id) => {
    const usuario = usuarios.find((e) => e.id == id);
    if (!usuario) return null;
    return usuario
    }
const postUsuarios = async (usuario) => {
    usuarios.push(usuario)
    return usuario
    }

const patchUsuarios = async (id, data) => {
    const index = usuarios.findIndex((e) => e.id == id);
    if (index === -1) return null;
    usuarios[index] = { ...usuarios[index], ...data };
    return usuarios[index];
}

export default {
    getUsuarios,
    postUsuarios,
    getUsuariosPorId,
    patchUsuarios
}