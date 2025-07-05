
interface IngListProps {
    ingredients: string[];
    removeIngredient: (index: number) => void;
    loading?: boolean;
}

export default function IngList(props: IngListProps) {
    return(
        <section className="row ingredient-list mt-5 mb-3 mx-auto">
            <h2 className="fw-bold">Ingredients on hand :</h2>
            <ul className="mt-3">
                {props.ingredients.map((ingredient, index) => (
                    <li key={index} className="d-flex align-items-center list-item ps-3 mb-2 fw-bold">
                        ●&nbsp;{ingredient}
                        <button className="close-btn" onClick={() => props.removeIngredient(index)} disabled={props.loading}
                            style={{ opacity: props.loading ? 0.5 : 1, cursor: props.loading ? 'default' : 'pointer', color: props.loading ? '#ccc' : '#000' }}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}