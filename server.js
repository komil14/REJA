const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://4komil:K0m1lj0n%40%40@cluster0.tmfc7ru.mongodb.net/reja?retryWrites=true&w=majority";
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, client) {
    if (err) {
        console.log("MongoDBga ulanishda xatolik yuz berdi");
        throw err;
    } else {
        console.log("MongoDBga ulanish muvaffaqiyatli amalga oshirildi");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3012;

        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}/`);
        });
    }
});

