require("express-async-errors")

const appError = require("./utils/appError")
const express = require("express");
const  routes  = require("./routes")

const app = express();
app.use(express.json())

app.use(routes);

app.use((error, request, response, next ) => {
  if(error instanceof appError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });

    console.error(error)

    return response.status(500).json({
      status:"error",
      message: "internal server error"
    })

  }
})

const port = 3333;
app.listen(port, () => console.log(`server is running on port ${port}`))