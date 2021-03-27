const axios = require('axios');

class chess {
  async getPlayer(username) {
    const baseURL = "https://api.chess.com/pub/player";
    let response = {};
    try {      
      response = await axios.get(`${baseURL}/${username}`);
    } catch (error) {
      response.status = error.response.status;
    } 
    
    if(response.status !== 200)
      return null;
    
    return response.data;
  }
}

module.exports = new chess();