//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
const {validatorHandler} = require('../middlewares/validator.handler');

const { getTVSchema, createTVSchema, updateTVSchema } = require('../schemas/tvs.schema');

//Importar el controlador de eventos
const service = require('../services/tvs.service');

const logEvents = require('../files');
const LOG_FILE_NAME = 'access_log.txt';

// Función para enviar un correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'luz.3801810370@ucaldas.edu.co',
    pass: '****',
  },
});

// Función para enviar un correo electrónico
const sendEmail = (subject, text) => {
  const mailOptions = {
    from: 'luz.3801810370@ucaldas.edu.co',
    to: 'luz.3801810370@ucaldas.edu.co',
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
};


//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const event = await service.index()
    res.json(event);

    const currentTime = new Date().toISOString();
    const logEntry = `${currentTime} [GET] /api/tvs /Listar todos los TV`;
    
    fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de registro.', err);
        }
    });
});

router.get('/:id', 
validatorHandler(getTVSchema, 'params'), 
    async (req, res) => {
        try {
        const id = req.params.id;
        const event = await service.show(id);
        res.json(event);
    
        const currentTime = new Date().toISOString();
        const logEntry = `${currentTime} [GET] /api/tvs/${id} Listar un TV`;
    
        fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
            if (err) {
            console.error('Error al escribir en el archivo de registro.', err);
            }
        });
        } catch (error) {
        console.error('Error en la ruta GET /api/tvs/:id:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
        }
  });

router.post('/', validatorHandler(createTVSchema, 'body'), async (req, res) => {
  try {
    const body = req.body;
    const event = await service.store(body);
    res.status(201).json(event);

    const currentTime = new Date().toISOString();
    const logEntry = `${currentTime} [POST] /api/tvs /Crear un TV`;

    fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro.', err);
      }
    });

    // Envío de correo electrónico
    const emailSubject = 'TV creado';
    const emailText = 'Se ha creado un nuevo TV.';

    // Agregar el envío de correo electrónico aquí
    sendEmail(emailSubject, emailText);
  } catch (error) {
    console.error('Error en la ruta POST /api/tvs:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});












router.put('/:id', 
  validatorHandler(getTVSchema, 'params'),
  validatorHandler(updateTVSchema, 'body'),
  async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const event = await service.update(id, body);
      res.json(event);

      const currentTime = new Date().toISOString();
      const logEntry = `${currentTime} [PUT] /api/tvs/${id} Modificar un TV`;

      fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
        if (err) {
          console.error('Error al escribir en el archivo de registro.', err);
        }
      });
    } catch (error) {
      console.error('Error en la ruta PUT /api/tvs/:id:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
);

router.delete('/:id', 
  validatorHandler(getTVSchema, 'params'),
  async (req, res) => {
    try {
      const id = req.params.id;
      const event = await service.destroy(id);
      res.json(event);

      const currentTime = new Date().toISOString();
      const logEntry = `${currentTime} [DELETE] /api/tvs/${id} Eliminar un TV`;

      fs.appendFile(LOG_FILE_NAME, logEntry + '\n', (err) => {
        if (err) {
          console.error('Error al escribir en el archivo de registro.', err);
        }
      });
    } catch (error) {
      console.error('Error en la ruta DELETE /api/tvs/:id:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
);

//Exportar el enrutador
module.exports = router;