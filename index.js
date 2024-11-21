const express = require('express'); 
const app = express();              
const port = 5000;               

app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});      
                                                        
});
app.get('/pass.html', (req, res) => {       
    res.sendFile('pass.html', {root: __dirname});      
                                                      
});
app.get('/signup.html', (req, res) => {        
    res.sendFile('signup.html', {root: __dirname});      
                                                        
});

app.listen(port, () => {           
    console.log(Now listening on port ${port}); 
});
