
interface IngListProps {
    ingredients: string[];
    removeIngredient: (index: number) => void;
}

export default function IngList(props: IngListProps) {
    return(
        <section className="row ingredient-list mt-5 mb-5 mx-auto">
            <h2 className="fw-bold">Ingredients on hand :</h2>
            <ul className="mt-3">
                {props.ingredients.map((ingredient, index) => (
                    <>
                        <li key={index} className="d-flex align-items-center list-item ps-3 mb-3 fw-bold">
                            <span className="material-symbols-outlined me-2 fw-bold">grocery</span>
                            {ingredient}
                            <button className="close-btn" onClick={() => props.removeIngredient(index)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </li>
                    </>
                ))}
            </ul>
        </section>
    );
}