
// obtener modulos
const express = require ('express');
const path = require('path');
const app = express();
// puerto 
app.set('port', 3000);



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views') )
// acceder a archivos publicos
app.use(express.static(path.join(__dirname,'public')));

// usar las rutas
app.use(require ('./routes/index'));
// analizador
app.use(require ('./routes/analizador'));

app.listen(app.get('port'), ()=>{

});
