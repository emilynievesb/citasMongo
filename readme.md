# API con Endpoints

Este es un repositorio de ejemplo que muestra cómo crear una API utilizando Node.js, Express, MySQL2, dotenv y YUP. También se utiliza nodemon para facilitar el reinicio automático del servidor durante el desarrollo.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js: https://nodejs.org
- MySQL: https://www.mysql.com

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"host":"localhost", "user":"root","database": NOMBRE_DB,"password":"", "port":3306}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.sql` que esta ubicado en la carpeta padre.

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Endpoints

Para este proyecto se desarrollaron los siguiente endpoints diseñados para manipular la base de datos esperando los parametros por el body de la petición.

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Obten todos los médicos de una especialidad específica

    - URL: `http://127.20.30.1:5005/api/get/medicosporespecialidad?especialidad=Cardiología`
    - Método: `GET`
    - Datos de entrada (query): Nombre de la especialidad a consultar. Recuerda cambiar en la URL luego del `=` el nombre de la especialidad a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506f0e72253b25a77181c",
                "med_nombreCompleto": "Juan Carlos Gómez",
                "Especialidad": [
                    "Cardiología"
                ]
            },
            {
                "_id": "64e506f0e72253b25a77182f",
                "med_nombreCompleto": "Andrea Suárez",
                "Especialidad": [
                    "Cardiología"
                ]
            }
        ]
      ```

1.  Obten todos los pacientes alfabéticamente

    - URL: `http://127.20.30.1:5005/api/get/pacientesalfabeticamente`
    - Método: `GET`
    - Datos de entrada: Ninguna
    - Datos de salida:

      ```
        [
            {
                "UsuarioID": 123,
                "PrimerNombreUsuario": "Andres",
                "SegundoNombreUsuario": "Santiago",
                "PrimerApellidoUsuario": "Carvajal",
                "SegundoApellidoUsuario": "Peliño",
                "UsuarioTelefono": 3154784596,
                "DireccionUsuario": "Bucaramanga",
                "EmailUsuario": "santiagoyo@gmail.com"
            },
            {
                "UsuarioID": 101010,
                "PrimerNombreUsuario": "Juan",
                "SegundoNombreUsuario": "",
                "PrimerApellidoUsuario": "Garcia",
                "SegundoApellidoUsuario": "Castro",
                "UsuarioTelefono": 3106789012,
                "DireccionUsuario": "Santa Marta",
                "EmailUsuario": "juangc@gmail.com"
            },
            {
                "UsuarioID": 121212,
                "PrimerNombreUsuario": "Diego",
                "SegundoNombreUsuario": "",
                "PrimerApellidoUsuario": "Gomez",
                "SegundoApellidoUsuario": "Hernandez",
                "UsuarioTelefono": 3178901234,
                "DireccionUsuario": "Manizales",
                "EmailUsuario": "diegogh@gmail.com"
            },
            {
                "UsuarioID": 555555,
                "PrimerNombreUsuario": "Luis",
                "SegundoNombreUsuario": "",
                "PrimerApellidoUsuario": "Gonzalez",
                "SegundoApellidoUsuario": "Hernandez",
                "UsuarioTelefono": 3123456789,
                "DireccionUsuario": "Bogotá",
                "EmailUsuario": "luisgh@gmail.com"
            }
        ]
      ```

1.  Obten todas las citas alfabéticamente

    - URL: `http://127.20.30.1:5005/api/get/citasalfabeticamente`
    - Método: `GET`
    - Datos de entrada: Ninguno.
    - Datos de salida:

      ```
          [
            {
                "_id": "64e506efe72253b25a7717fa",
                "CodigoCita": 7,
                "FechaCita": "2023-07-14T00:00:00.000Z",
                "IdEstadoCita": 2,
                "EstadoCita": "Confirmada",
                "MedicoID": 86420,
                "MedicoNombre": "Miguel Ángel López",
                "UsuarioID": 123,
                "PrimerApellido": "Carvajal",
                "Nombre": "Andres"
            },
            {
                "_id": "64e506efe72253b25a7717fb",
                "CodigoCita": 8,
                "FechaCita": "2023-07-14T00:00:00.000Z",
                "IdEstadoCita": 1,
                "EstadoCita": "Pendiente",
                "MedicoID": 24680,
                "MedicoNombre": "Isabel María Díaz",
                "UsuarioID": 123,
                "PrimerApellido": "Carvajal",
                "Nombre": "Andres"
            },
            {
                "_id": "64e506f0e72253b25a7717fc",
                "CodigoCita": 9,
                "FechaCita": "2023-07-14T00:00:00.000Z",
                "IdEstadoCita": 1,
                "EstadoCita": "Pendiente",
                "MedicoID": 75319,
                "MedicoNombre": "Marcela Alejandra Ortega",
                "UsuarioID": 123,
                "PrimerApellido": "Carvajal",
                "Nombre": "Andres"
            },
            {
                "_id": "64e506f0e72253b25a771809",
                "CodigoCita": 22,
                "FechaCita": "2023-07-19T00:00:00.000Z",
                "IdEstadoCita": 1,
                "EstadoCita": "Pendiente",
                "MedicoID": 54321,
                "MedicoNombre": "María Fernanda Rodríguez",
                "UsuarioID": 123,
                "PrimerApellido": "Carvajal",
                "Nombre": "Andres"
            },
            {
                "_id": "64e506efe72253b25a7717f6",
                "CodigoCita": 3,
                "FechaCita": "2023-07-12T00:00:00.000Z",
                "IdEstadoCita": 2,
                "EstadoCita": "Confirmada",
                "MedicoID": 98765,
                "MedicoNombre": "Pedro Pablo Martínez",
                "UsuarioID": 101010,
                "PrimerApellido": "Garcia",
                "Nombre": "Juan"
            }
        ]
      ```

1.  Encontra la próxima cita para un paciente específico

    - URL: `http://127.20.30.1:5005/api/get/citaproxima?usuario=888888`
    - Método: `GET`
    - Datos de entrada (query): ID del usuario a consultar. Recuerda cambiar en la URL luego del `=` el id del usuario a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506f0e72253b25a771810",
                "CodigoCita": 29,
                "FechaCita": "2023-09-21T00:00:00.000Z",
                "IdEstadoCita": 1,
                "EstadoCita": "Pendiente",
                "MedicoID": 75319,
                "MedicoNombre": "Marcela Alejandra Ortega",
                "UsuarioID": 888888,
                "PrimerApellido": "Rodriguez",
                "Nombre": "María"
            }
        ]
      ```

1.  Encuentra todos los pacientes que tienen citas con un médico específico

    - URL: `http://127.20.30.1:5005/api/get/citaspormedico?id_medico=86420`
    - Método: `GET`
    - Datos de entrada (query): ID del medico a consultar. Recuerda cambiar en la URL luego del `=` el id del medico a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506efe72253b25a7717fa",
                "NombrePaciente": "Andres",
                "ApellidoPaciente": "Carvajal",
                "FechaCita": "2023-07-14T00:00:00.000Z",
                "NombreEspecialidad": "Pediatría",
                "NombreConsultorio": "Consultorio 7"
            },
            {
                "_id": "64e506f0e72253b25a77180e",
                "NombrePaciente": "Camila",
                "ApellidoPaciente": "Ramirez",
                "FechaCita": "2023-09-21T00:00:00.000Z",
                "NombreEspecialidad": "Pediatría",
                "NombreConsultorio": "Consultorio 7"
            }
        ]
      ```

1.  Obten las consultas o citas para un paciente específico

    - URL: `http://127.20.30.1:5005/api/get/citasporpaciente?usuario=888888`
    - Método: `GET`
    - Datos de entrada (query): ID del usuario a consultar. Recuerda cambiar en la URL luego del `=` el id del usuario a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506efe72253b25a7717f4",
                "NombrePaciente": "María",
                "ApellidoPaciente": "Rodriguez",
                "FechaCita": "2023-07-12T00:00:00.000Z",
                "NombreConsultorio": "Consultorio 1",
                "NombreEspecialidad": "Cardiología",
                "NombreMedico": "Juan Carlos Gómez"
            },
            {
                "_id": "64e506f0e72253b25a771803",
                "NombrePaciente": "María",
                "ApellidoPaciente": "Rodriguez",
                "FechaCita": "2023-07-17T00:00:00.000Z",
                "NombreConsultorio": "Consultorio 6",
                "NombreEspecialidad": "Pediatría",
                "NombreMedico": "Roberto González"
            },
            {
                "_id": "64e506f0e72253b25a771807",
                "NombrePaciente": "María",
                "ApellidoPaciente": "Rodriguez",
                "FechaCita": "2023-07-18T00:00:00.000Z",
                "NombreConsultorio": "Consultorio 10",
                "NombreEspecialidad": "Cardiología",
                "NombreMedico": "Andrea Suárez"
            },
            {
                "_id": "64e506f0e72253b25a77180d",
                "NombrePaciente": "María",
                "ApellidoPaciente": "Rodriguez",
                "FechaCita": "2023-07-20T00:00:00.000Z",
                "NombreConsultorio": "Consultorio 6",
                "NombreEspecialidad": "Oftalmología",
                "NombreMedico": "Sara Elena García"
            }
        ]
      ```

1.  Encuentra todas las citas para un día específico

    - URL: `http://127.20.30.1:5005/api/get/citasporfecha?fecha=2023-07-20`
    - Método: `GET`
    - Datos de entrada (query): Fecha a consultar. Recuerda cambiar en la URL luego del `=` la fecha a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506f0e72253b25a77180b",
                "NombrePaciente": "Luis",
                "ApellidoPaciente": "Gonzalez",
                "FechaCita": "2023-07-20T00:00:00.000Z",
                "EstadoCita": 2,
                "NombreConsultorio": "Consultorio 4",
                "NombreEspecialidad": "Gastroenterología",
                "NombreMedico": "Ana Isabel Ramírez"
            },
            {
                "_id": "64e506f0e72253b25a77180d",
                "NombrePaciente": "María",
                "ApellidoPaciente": "Rodriguez",
                "FechaCita": "2023-07-20T00:00:00.000Z",
                "EstadoCita": 2,
                "NombreConsultorio": "Consultorio 6",
                "NombreEspecialidad": "Oftalmología",
                "NombreMedico": "Sara Elena García"
            }
        ]
      ```

1.  Obten los médicos y sus consultorios

    - URL: `http://127.20.30.1:5005/api/get/medicosyconsultorios`
    - Método: `GET`
    - Datos de entrada (query): Ninguno.
    - Datos de salida:

      ```
      [
        {
            "NombreMedico": "Juan Carlos Gómez",
            "NombreConsultorio": "Consultorio 1"
        },
        {
            "NombreMedico": "Laura González",
            "NombreConsultorio": "Consultorio 2"
        },
        {
            "NombreMedico": "María Fernanda Rodríguez",
            "NombreConsultorio": "Consultorio 3"
        }
      ]
      ```

1.  Cuenta el número de citas que un médico tiene en un día específico

    - URL: `http://127.20.30.1:5005/api/get/contadordecitas?fecha=2023-07-20&id_medico=97531`
    - Método: `GET`
    - Datos de entrada (query): ID del médico y la fecha a consultar. Recuerda cambiar en la URL luego del `=` el id del médico y la fecha a consultar
    - Datos de salida:

      ```
        [
            {
                "NumeroCitas": 1
            }
        ]
      ```

1.  Obten los consultorio donde se aplicó las citas de un paciente

    - URL: `http://127.20.30.1:5005/api/get/consultoriosdepacientes?usuario=666666`
    - Método: `GET`
    - Datos de entrada (query): ID del usuario a consultar. Recuerda cambiar en la URL luego del `=` el id del usuario a consultar
    - Datos de salida:

      ```
        [
            {
                "_id": "64e506f0e72253b25a77180c",
                "NombrePaciente": "Laura",
                "ApellidoPaciente": "Vargas",
                "FechaCita": "2023-07-18T05:00:00.000Z",
                "NombreConsultorio": "Consultorio 5"
            },
            {
                "_id": "64e506f0e72253b25a77180c",
                "NombrePaciente": "Laura",
                "ApellidoPaciente": "Vargas",
                "FechaCita": "2023-07-10T05:00:00.000Z",
                "NombreConsultorio": "Consultorio 2"
            }
        ]
      ```

1.  Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendido

    - URL: `http://127.20.30.1:5005/api/get/citasporgenero?genero=Femenino`
    - Método: `GET`
    - Datos de entrada (query): El género a consultar. Recuerda cambiar en la URL luego del `=` el género a consultar
    - Datos de salida:

      ```
        [
            {
                "NombrePaciente": "Laura",
                "ApellidoPaciente": "Vargas",
                "GeneroPaciente": "Femenino",
                "FechaCita": "2023-07-18T05:00:00.000Z",
                "NombreConsultorio": "Consultorio 5",
                "NombreEspecialidad": "Neurología",
                "NombreMedico": "Luis Alberto Hernández"
            }
        ]
      ```

1.  Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.

        - URL: `http://127.20.30.1:5005/api/post/agregarpaciente`
        - Método: `POST`
        - Datos de entrada (body):
          `Los datos de entrada para un paciente deben ser:`
          `       {
        "documento": 1098787,
        "primer_nombre": "Emily",
        "segundo_nombre": "J",
        "primer_apellido": "Nieves",
        "segundo_apellido": "B",
        "telefono": 3166666,
        "direccion": "calle",
        "email": "emily@bml.com",
        "fecha_nacimiento": "2012-10-04",
        "id_tipo_documento": 1,
        "id_genero": 2,
        "doc_acudiente": null

    }`

        - En este caso en el que el paciente es menor de edad y no existe un acudiente, los datos de salida serán:

                "El usuario es menor de edad, debe tener un acudiente, por favor primero registre el acudiente"

        - En el caso de que se quiera crear un acudiente, los datos de entrada serán:
          ```
          {
              "cod_acudiente":10000000,
              "acudiente_nombre":"Antonia Martinez",
              "acudiente_telefono":3222222222,
              "acudiente_direccion":"CALLE 72"
          }
          ```
        - Luego de validarsen los datos, si el acudiente ya existe, los datos de salida serán:

                "El acudiente ya existe"

        - Si por el contrario el acudiente se creó porque no existía, los datos de salida serán:

                "Acudiente creado con exito"

        - Llegado el caso de que el paciente no sea menor de edad, o lo sea pero que se registre un acudiente, los datos de salida serán:

                "Paciente creado con éxito"

1.  Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

    - URL: `http://127.20.30.1:5005/api/get/citasrechazas?mes=07`
    - Método: `GET`
    - Datos de entrada (query): El mes a consultar. Recuerda cambiar en la URL luego del `=` el mes a consultar
    - Datos de salida:

      ```
        [
            {
                "FechaCita": "2023-07-21T05:00:00.000Z",
                "NombreUsuario": "Camila",
                "NombreMedico": "Isabel María Díaz"
            }
        ]
      ```

## Validación de datos (DTO)

- Se realizó la validación de datos a través de la librería `YUP`. La librería Yup permite definir un esquema que describe la forma en que los datos deben ser validados.

- Al utilizar Yup para los DTO, puedes definir un esquema que especifique las reglas de validación que se deben aplicar a cada campo del DTO. Estas reglas pueden incluir validaciones como requerido, tipo de dato, longitud mínima o máxima, formato específico, entre otros.

- Un ejemplo de uno de los esquemas que se pueden crear es este:

  ```
  const addProductValidator = async (req, res, next) => {
    try {
      const productSchema = object({
        nombre: string()
          .strict()
          .matches(/^[a-z A-Z]+$/, "Is not in correct format")
          .required(),
        descripcion: string().optional(),
        estado: number().max(1).required(),
        created_by: number().nullable().optional(),
        update_by: number().nullable().optional(),
        created_at: date().nullable().optional(),
        updated_at: date().nullable().optional(),
        deleted_at: date().nullable().optional(),
      });
      await productSchema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.errors });
    }
  };
  ```

- Se creó un middleware, donde se valida la composición de los datos dentro de la request. Se instancia un objeto que describe el esquema de la request y se valida el body según lo escrito en el esquema. El `validate()` es una promesa que generas una excepción en caso de no pasar la validación, y dentro del catch se hace la validación de excepciones, respondiendo un status `400` y un mensaje de error. Si la request sale OK, se ejecuta un `next`, que le avisa a express de debe ejecutar el siguiente middleware (en este caso, el endpoint o servicio que genera y responde a una consulta).

#### Autora: Emily Nieves
