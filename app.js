const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.get('/alumnos',(request,response)=>{
    const data = [];
    for (let index = 0; index < 50; index++) {
        const alumno = {name: `Alumno ${index}`, lastname: `Apellido ${index}`};
        // alumno.age= alumno.age + index;
        data.push(alumno);
    }
    response.status(200).json(data)
})
// export default app
module.exports = {app}

