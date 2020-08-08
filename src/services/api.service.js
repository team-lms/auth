const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const ApiService = {
  /**
   * Send data to the server
   * @param {object} data Data to send
   */
  async post(data) {
    try {
      const response = await fetch(`${apiBaseUrl}/auth/login`, {
        method: 'POST',
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
