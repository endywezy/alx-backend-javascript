/**
 * Contains the miscellaneous route handlers.
 * @author Ossai Endurance <https://github.com/endywezy>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
