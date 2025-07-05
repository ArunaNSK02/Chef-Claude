import { useState } from "react"
import IngList from "./IngList";
import Recipe from "./Recipe";
import toast, { Toaster } from 'react-hot-toast';
import { useProgress } from "@bprogress/react";

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {start, stop, setOptions} = useProgress();

    setOptions({ showSpinner: false });


    const addIngredient = (FormData: FormData) => {
        let ingredient = FormData.get('ingredient') as string;
        if (ingredient) {
            ingredient = ingredient.trim();
            setIngredients((prev) => [...prev, ingredient]);
        } else {
            toast('Field is empty!', {
                icon: '⚠️',
                duration: 2000,
                removeDelay: 1000
              });
        }
    }

    const removeIngredient = (index: number) => {
        setIngredients((prev) => prev.filter((_, i) => i !== index));
        toast('Ingredient removed!', {
            icon: '✅',
            duration: 2000,
            removeDelay: 1000
        });
        if (recipe) {
            setRecipe(null);
        }
    };

    function getRecipe() {
        return (
            <div className="get-recipe-container mx-auto mb-5">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={() => {getRecipeResponse(); start();}}>Get a recipe</button>
            </div>
        )
    }

    async function getRecipeResponse() {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/get-recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingredients }),
            });
            const dataObj = await response.json();
            setLoading(false);
            console.log(dataObj);
            console.log(dataObj.content);
            setRecipe(dataObj.content);
            stop();
        } catch (error) {
            console.error(error);
            toast('Something went wrong! Try again.', {
                icon: '⚠️',
                duration: 2000,
                removeDelay: 1000
            });
            setLoading(false);
            stop();
        }
    };

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

            {ingredients.length > 0 && (<IngList ingredients={ingredients} removeIngredient={removeIngredient} loading={loading} />)}

            {ingredients.length === 0 ? (
                <span className="row user-guides mt-5">
                    Need a recipe? Give me 4 ingredients!
                </span>
            ) : null}

            {ingredients.length > 3 && getRecipe()}

            {recipe && ingredients.length > 3 && (<Recipe recipe={recipe} />)}

            <Toaster position="bottom-right" reverseOrder={false} />
        </main>
    )
}