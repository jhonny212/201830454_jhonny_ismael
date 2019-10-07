
const express = require ('express');
const path = require('path');
const app = express();
app.set('port', 3000);

/*app.listen(app.get('port'),()=>{
});*/

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views') )
app.use(express.static(path.join(__dirname,'public')));
// use las rutas
app.use(require ('./routes/index'));
// analizar
app.use(require ('./routes/analizador'));

app.listen(app.get('port'), ()=>{

});
