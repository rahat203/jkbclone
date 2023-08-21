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


// const { log } = require('console');
// const express = require('express');
// const handlerBar = require("express-handlebars");
// const path = require('path');
// const hbs = require('hbs');
// const app = express();
// const port = 8000;
// const views_path = path.join(__dirname, "/views")
// // app.use(express.static("views_path"));
// app.use("/jkb_logo.ico", express.static("images/jkb_logo.ico"));


// // app.engine("handlebars", handlerBar.engine());
// app.set("view engine", "handlebars");
// app.set("views", views_path)

// // console.log(__dirname +'/views' );

// app.get("/", (req, res) => {
//     res.render("index")

// });

// app.get("/about", (req, res) => {
//     res.render("about", {
//         layout: false, title: "About",

//     });
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });








const express = require('express');

const path = require('path');
const serveStatic = require('serve-static');
const hbs = require("hbs");
const { log } = require('console');

const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.use("/node_modules", express.static('node_modules'));
// const views_path = path.join(__dirname, "../views")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
console.log(template_path);

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", function (req, res) {
    res.render("index")
});

app.get("/about", function (req, res) {
    res.render("about")
});
app.get("/coaching", function (req, res) {
    res.render("coaching")
});
app.get("/contactpage", function (req, res) {
    res.render("contactpage")
});
app.get("/counselling", function (req, res) {
    res.render("counselling")
});
app.get("/financial", function (req, res) {
    res.render("financial")
});
app.get("/itservices", function (req, res) {
    res.render("ITservices")
});
app.get("/ms", function (req, res) {
    res.render("Ms")
});
app.get("/program", function (req, res) {
    res.render("program")
});
app.get("/project", function (req, res) {
    res.render("project")
});
app.get("/sec-programs", function (req, res) {
    res.render("sec-programs")
});
app.get("/thirdyear", function (req, res) {
    res.render("thirdyear")
});
app.get("/youth", function (req, res) {
    res.render("youth")
});






app.listen(port, () => {
    console.log(`connected at port number: ${port}`)
})


