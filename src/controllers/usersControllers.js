const appError = require("../utils/appError")

class UsersControllers {
  create(request, response) {
    
    const { name, email, password } = request.body;

    if(!name) {
      throw new appError("name is required")
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersControllers;