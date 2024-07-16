const appError = require("../utils/appError");
const sqliteConnection = require("../database/sqlite")

class UsersControllers {
  async create(request, response) {
    
    const { name, email, password } = request.body;

    const dataBase = await sqliteConnection();
    const checkUsersExist = await dataBase.get("select * from users where email = (?)", [email]);
    
    if(checkUsersExist){
      throw new appError("this email is already in use")
    }
    return response.status(201).json();
  }
}

module.exports = UsersControllers;