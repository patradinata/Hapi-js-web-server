// method Verb/request dan routing

const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server Berjalan pada ${server.info.uri}`);
};

init();

//====== cara mengakses di terminal //=============

// curl -X GET http://localhost:5000
// // output: Homepage
// curl -X GET http://localhost:5000/about
// // output: About page
// curl -X GET http://localhost:5000/test
// // output: Halaman tidak ditemukan
// curl -X POST http://localhost:5000
// // output: Halaman tidak dapat diakses dengan method tersebut
