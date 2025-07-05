import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { get } from 'http';
const cors = require('cors');

const app = express();
const port = 3000;
dotenv.config();

app.use([cors(), express.json()]);

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY as string,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173/", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "Chef Claude", // Optional. Site title for rankings on openrouter.ai.
  },
});

const SYSTEM_PROMPT = `
You are a helpful chef that receives a list of ingredients from a user and suggests a recipe that could be made with some or all of them.

Always follow this exact **Markdown format** in your response:

## 🍽️  *[Recipe Title]*

**Ingredients Needed:**
- Ingredient 1
- Ingredient 2
- Ingredient 3
*(Include both user's ingredients and reasonable extras if needed)*

**Instructions:**
1. Step one of the recipe.
2. Step two.
3. Continue until the recipe is complete.

**Estimated Time:** *X minutes*

**Notes:**  
- Optional tips, substitutions, or serving ideas.

Feel free to end with: “Enjoy your meal! 😊”

---

⚠️ If the ingredients list appears to be gibberish or not recognizable as real ingredients, respond with only the following:

> I am unable to give a recipe for the given ingredients. They appear to be gibberish or not recognizable as real ingredients. If you can provide a list of actual ingredients, I'd be happy to help you with a recipe suggestion. 😊
`;


async function getResponseFromAI(ingredients: string[]) {
  try {
    const completion = await openai.chat.completions.create({
      model: process.env.OPEN_ROUTER_MODEL as string,
      messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": SYSTEM_PROMPT
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `I have ${ingredients.join(', ')}. Provide me with a recipe I can make with these ingredients.`
            }
          ]
        }
      ]
    });
    console.log(completion.choices[0].message);
    return completion.choices[0].message;
  } catch (error) {
    console.error(error);
    return null;
  }
}

app.post('/get-recipe', async(req: Request, res: Response) => {
  const { ingredients } = req.body;
  const recipe = await getResponseFromAI(ingredients);
  res.status(200).json(recipe);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
