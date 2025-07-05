import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Recipe(props: { recipe: string | null }) {

    const markdownRecipe = props.recipe;

    return (
        <section className="recipe-section my-3">
            <hr />
            <Markdown remarkPlugins={[remarkGfm]}>
                {markdownRecipe}
            </Markdown>
        </section>
    )
}