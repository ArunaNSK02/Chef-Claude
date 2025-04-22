import { useState } from "react"

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]);

    const addIngredient = (FormData: any) => {
        let ingredient = FormData.get('ingredient') as string;
        if (ingredient) {
            ingredient = ingredient.trim();
            setIngredients((prev) => [...prev, ingredient]);
        } else {
            alert('Please add an ingredient');
        }
    }

    const removeIngredient = (index: number) => {
        setIngredients((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <main className="container-xl pt-5">
            <form onSubmit={addIngredient} className="row add-ingredient-form d-flex justify-content-evenly mx-auto">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    className="col-12 col-lg-7"
                    name="ingredient"
                />
                <button className="col-4">Add ingredient</button>
            </form>
            <ul className="list-group mt-3">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {ingredient}
                        <button className="btn btn-danger btn-sm" onClick={() => removeIngredient(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}