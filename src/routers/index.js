import app from "../app";
import { createBookController, listBooksController, retrieveBookController } from "../controllers";
import { verifyBookExistsMiddleware } from "../middlewares";

app.post("/books", createBookController);
app.get("/books", listBooksController);
app.get("/books/:id", verifyBookExistsMiddleware, retrieveBookController);
