const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Datos en memoria
let contactos = [];

// Ruta para obtener todos los contactos
app.get('/contactos', (req, res) => {
  res.json(contactos);
});

// Ruta para agregar un nuevo contacto
app.post('/contactos', (req, res) => {
  const contacto = req.body;
  contactos.push(contacto);
  res.status(201).json(contacto);
});

// Ruta para eliminar un contacto por nombre
app.delete('/contactos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  contactos = contactos.filter(contacto => contacto.nombre !== nombre);
  res.status(200).json({ message: `Contacto ${nombre} eliminado` });
});

// Escuchar en localhost (solo accesible dentro de la instancia)
app.listen(port, 'localhost', () => {
  console.log(`Aplicación de contactos escuchando en http://localhost:${port}`);
});
