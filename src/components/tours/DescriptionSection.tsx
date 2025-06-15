import ArticleSegment from "./ArticleSegment"
import { articles } from "../../data/articles"

const DescriptionSection = () => {
  return (
    <section
        className="container-center mt-12"
    >
        {articles.map(article => (
            <ArticleSegment 
                key={article.title}
                title={article.title}
                text={article.text}
                limit={500}
            />
        ))}
    </section>
  )
}

export default DescriptionSection