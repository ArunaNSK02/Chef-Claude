# 👨‍🍳 Chef Claude

**Chef Claude** is a full-stack AI-powered recipe generator built using **React.js** and **Express.js**. Users provide a list of ingredients, and the app responds with a neatly formatted recipe using AI via [OpenRouter.ai](https://openrouter.ai/).

---

## 🌟 Features

- 🍳 Generate recipes based on ingredients you have.
- 🧠 Powered by OpenRouter + AI models (like `deepseek`, `gpt-3.5`, etc.).
- 📄 Responses are formatted in Markdown for easy display.
- ⚛️ Built with React (frontend) and Express (backend).
- 🔐 Uses `.env` for secure API key handling.

---

## 🛠️ Installation & Setup Guide

Follow these steps to run Chef Claude on your local machine:

---

### 📁 Folder Structure

```
chef-claude/
├── client/        # React frontend
├── server/        # Express backend
└── README.md
```

---

## 1. 🔌 Clone the Repository

```bash
git clone https://github.com/yourusername/chef-claude.git
cd chef-claude
```

---

## 2. ⚙️ Set Up the Backend (Express)

```bash
cd server
npm install
```

### 📄 Create `.env` file

Inside the `/server` folder, create a `.env` file with the following content:

```env
OPEN_ROUTER_API_KEY=your_openrouter_api_key
OPEN_ROUTER_MODEL=your_model
```

> 🧠 You can get an API key from [https://openrouter.ai](https://openrouter.ai)

### ▶️ Run the Backend

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## 3. 🖼️ Set Up the Frontend (React)

```bash
cd ../client
npm install
```

### ▶️ Run the Frontend

```bash
npm run dev
```

This will start the React app on `http://localhost:5173`.

---

## 4. 🧪 Test It

- Visit `http://localhost:5173`
- Enter some ingredients like:  
  `eggs, cheese, bread, milk`
- Hit **"Get Recipe"**
- Watch as Chef Claude delivers a recipe with instructions in Markdown format.

---

## 📦 Technologies Used

- **Frontend**: React, Vite
- **Backend**: Express.js, TypeScript, dotenv, cors
- **AI**: OpenRouter API (e.g., `deepseek`, `gpt-3.5`)
- **Markdown Rendering**: (e.g., `react-markdown` on frontend, optional)

---

## 💡 Example Ingredient Inputs

| Type          | Ingredients Example                                 |
|---------------|-----------------------------------------------------|
| Basic         | `eggs, cheese, bread, milk`                         |
| Creative Dish | `chicken, rice, onion, garlic, bell pepper`         |
| Vegan         | `tofu, broccoli, soy sauce, garlic, ginger`         |
| Invalid       | `asdfg123, qwerty` (should trigger fallback message)|

---

## 🔐 Environment Variables

| Key                  | Description                                     |
|----------------------|-------------------------------------------------|
| `OPEN_ROUTER_API_KEY`| Your OpenRouter API key                         |
| `OPEN_ROUTER_MODEL`  | The model to use (e.g., `deepseek/deepseek-r1-0528:free`) |



## 🙋 Need Help?

Feel free to open an issue or message me if you're stuck getting Chef Claude to cook!

Bon Appétit! 🍽️
