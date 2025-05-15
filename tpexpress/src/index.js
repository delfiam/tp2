import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', usuariosRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))