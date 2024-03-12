const express = require('express');
const router = express.Router();

let alumnos = [
  { id: 1, nombre: 'Juan', matricula: '2021001' },
  { id: 2, nombre: 'María', matricula: '2021002' },
  // Otros alumnos...
];

router.get('/', (req, res) => {
  res.json(alumnos);
});

router.post('/', (req, res) => {
  console.log('Datos recibidos en la solicitud POST:', req.body);
  const { nombre, matricula } = req.body;
  const id = alumnos.length + 1;
  const nuevoAlumno = { id, nombre, matricula };
  alumnos.push(nuevoAlumno);
  console.log('Nuevo alumno creado:', nuevoAlumno);
  res.status(201).json(nuevoAlumno);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, matricula } = req.body;
  const alumnoIndex = alumnos.findIndex(alumno => alumno.id === parseInt(id));
  if (alumnoIndex !== -1) {
    alumnos[alumnoIndex] = { id: parseInt(id), nombre, matricula };
    res.json(alumnos[alumnoIndex]);
  } else {
    res.status(404).json({ mensaje: 'Alumno no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const alumnoIndex = alumnos.findIndex(alumno => alumno.id === parseInt(id));
  if (alumnoIndex !== -1) {
    alumnos.splice(alumnoIndex, 1);
    // Enviar mensaje de confirmación junto con el código 204
    res.status(204).json({ mensaje: 'El alumno ha sido eliminado exitosamente.' });
  } else {
    // Si el alumno no se encuentra, responder con código 404 y un mensaje adecuado
    res.status(404).json({ mensaje: 'Alumno no encontrado' });
  }
});

module.exports = router;
