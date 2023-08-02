const express = require("express");
const gpt4all = require("gpt4all");
const { createCompletion, loadModel } = gpt4all;

const app = express();
app.use(express.json()); // For parsing application/json

let ll;

const modeName = process.env.MODEL_NAME;
const modelPath = process.env.MODEL_PATH;

const loadGptModel = async () => {
  ll = await loadModel(modeName, {
    modelPath: modelPath,
    verbose: true,
  });
};

loadGptModel()
  .then(() => {
    app.post("/generate-text", async (req, res) => {
      const { prompt, options } = req.body;
      const response = await createCompletion(ll, prompt, options);

      res.send(response.choices[0]);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.error("Failed to load the model:", error);
  });
