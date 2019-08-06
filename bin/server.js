const express = require('express');
const app = express();
const port = 3000;

// Приложение выдает ответ “Hello from Express!” на запросы,
// адресованные корневому URL (/) или маршруту.
app.get('/', (request, response) => {
    response.send('Hello from Express!');
  });

const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server running at http://${host}:${port}/`);
});



//Можно и так по джаваскриптовски, по объектовски:
//const options = {
//  host: 'localhost',
 //   port: 3000,
 //}
 //
 //const server = app.listen(options, () => {
 //   const host = server.address().address;
 //   const port = server.address().port;
 //   console.log(`Server running at ${options.host}:${options.port}/`);
 //});
 

