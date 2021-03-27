const axios = require('axios');

class Chess {
  constructor() {
    this.baseURL = {
      player: 'https://api.chess.com/pub/player',
    };
  }

  async getPlayer(username) {
    let response = {};
    try {
      response = await axios.get(`${this.baseURL.player}/${username}`);
    } catch (error) {
      response.status = error.response.status;
    }

    if (response.status !== 200) return null;

    return response.data;
  }
}

module.exports = new Chess();
