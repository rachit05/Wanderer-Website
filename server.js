let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');
let jquery = require('jquery')
let router = require('./routes/routes')

var app = express()
app.use(bodyParser.urlencoded( { extended:true } ))


const mustacheExpressInstance = mustacheExpress()
mustacheExpressInstance.cache = null

app.engine('mustache',mustacheExpressInstance)
app.set('view engine','mustache')
app.set('views' , __dirname + '/views')

app.use(express.static('./static'))

app.use('/',router)
app.listen(8080,()=>{
    console.log('connected')
})