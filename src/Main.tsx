import { useState } from "react"
import IngList from "./IngList";
import toast, { Toaster } from 'react-hot-toast';

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]);

    const addIngredient = (FormData: FormData) => {
        let ingredient = FormData.get('ingredient') as string;
        if (ingredient) {
            ingredient = ingredient.trim();
            setIngredients((prev) => [...prev, ingredient]);
        } else {
            toast.error('Please enter an ingredient before adding!', {
                duration: 2000,
              
                // Styling
                className: 'toast-class',
              
                // Additional Configuration
                removeDelay: 1000,
              });
        }
    }

    const removeIngredient = (index: number) => {
        setIngredients((prev) => prev.filter((_, i) => i !== index));
    };

    function getRecipe() {
        return (
            <div className="get-recipe-container mx-auto">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
            </div>
        )
    }

    return (
        <main className="container-xl pt-5">
            <form action={addIngredient} className="row add-ingredient-form d-flex justify-content-evenly mx-auto">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    className="col-12 col-lg-7"
                    name="ingredient"
                />
                <button className="col-4">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (<IngList ingredients={ingredients} removeIngredient={removeIngredient} />)}

            {ingredients.length === 0 ? (
                <span className="row user-guides mt-5">
                    Need a recipe? Give me 4 ingredients!
                </span>
            ) : ingredients.length === 1 ? (
                <span className="row user-guides mt-5">
                    Hooray! 3 more to go.
                </span>
            ) : ingredients.length === 2 ? (
                <span  className="row user-guides mt-5">
                    Keep going! Add more ingredients!
                </span>
            ) : ingredients.length === 3 ? (
                <span  className="row user-guides mt-5">
                    Give me one more ingredient!
                </span>
            ) : null}

            {ingredients.length > 3 && getRecipe()}

            <Toaster position="bottom-right" reverseOrder={false} />
        </main>
    )
}