const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const ApiService = {
  /**
   * Send POST request to the server
   * @param {object} data Data to send
   */
  async post(url, data) {
    try {
      const response = await fetch(`${apiBaseUrl}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    } catch (error) {
      return error;
    }
  },

  /**
  * Send PUT request to the server
  * @param {object} data Data to send
  */
  async put(url, data) {
    try {
      const response = await fetch(`${apiBaseUrl}${url}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    } catch (error) {
      return error;
    }
  }
};
export default ApiService;
