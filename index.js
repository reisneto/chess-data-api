const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (request, response) => {
  return response.json({status: 'online'});
});

app.get('/username/:username', (request, response) => {
  const { username } = request.params;
  // check username in redis
  // check username inside our database
  // check username on chess.com
  
  return response.json({received: username });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
})