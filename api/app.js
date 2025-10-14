import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/common.middleware.js";
import listRoutes from "./routes/list.routes.js";
import cardRoutes from "./routes/card.routes.js";
import tagRoutes from "./routes/tag.routes.js";
import authRoutes from "./routes/auth.routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

// par défaut les requetes en js sont bloqués si elles ne sont pas faites depuis le meme site
// ce comportement est configurable avec le middleware des cors.
// par défaut il autorise l'accès depuis toutes les URLs
app.use(cors());
app.use(express.json());

app.use("/lists", listRoutes);
/*
  app.get('/lists/', (req, res) {
    const includeOptions = [];
    const includes = req.query.include ? req.query.include.split(',') : [];
  
    if (includes.includes('cards')) {
      const includeCards = { model: Card, as: "cards" };
      if (includes.includes('tags')) {
        includeCards.include = [
          { model: Tag, as: "tags" }
        ];
      }
      includeOptions.push(includeCards);
    }
  
    const lists = await List.findAll({
      include: includeOptions
    });
    res.status(StatusCodes.OK).json(lists);
  });

  router.get('/:id', validateId, getById);
  router.post('/', validateListCreation, create);
  router.patch('/:id', validateId, validateListUpdate, update);
  router.delete('/:id', validateId, deleteById);
*/
app.use("/cards", cardRoutes);
app.use("/tags", tagRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
