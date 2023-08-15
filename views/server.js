// const express = require('express')
// const path = require('path')

// const app = express();
// const port = 8000;


// app.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname, '/about.html'));
// })


// app.get('/', 
// unction (req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/contactpage', function (req, res) {
//     res.sendFile(path.join(__dirname, '/contactpage.html'));
// });


// app.listen(port, () => {
//     console.log("connected")
// })


const express = require('express');
const handlerBar = require("express-handlebars");
const path = require('path')
const app = express();
//const __dirname = path.resolve(path.dirname(''));
const port = 3000;

app.use(express.static("public"));
app.use("/jkb_logo.ico", express.static("images/jkb_logo.ico"));

app.engine("handlebars", handlerBar.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.get("/", (req, res) => {
    res.render("home", { layout: false, title:"Home",
    helpers:{
        listName() {
            let names = ["Purva", "Chiranjeev", "Khushi", "Swaraj"];
            let html = names
            .map((names) => {
                return `<li>${names}</li>`;
            })
            .join("\n");
            return html;
        },
           
    },

});
    
});

app.get("/about", (req, res) => {
    res.render("about", { layout: false,title:"About",
     
 });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



