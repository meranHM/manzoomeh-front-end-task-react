import { useState } from 'react'

interface ArticleSegmentProps {
    title: string
    text: string
    limit?: number
}

const ArticleSegment = ({ title, text, limit }: ArticleSegmentProps) => {
    const [expanded, setExpanded] = useState(false)

    if (!limit) return

    const isClipped = text.length > limit
    const displayText = expanded || !isClipped ? text : text.slice(0, limit) + "..."

  return (
    <article
        className="w-full flex flex-col gap-3"
    >
        <h3
            className="font-dana font-bold text-3xl"
        >
            {title}
        </h3>
        <p
            className="font-dana"
        >
            {displayText}
        </p>
        {isClipped && (
            <button
                onClick={() => setExpanded(!expanded)}
                className="self-end bg-transparent text-blue-500 hover:text-blue-600 hover:underline transition-colors inline-block"
            >
                {expanded ? "Read Less" : "Read More"}
            </button>
        )}
    </article>
  )
}

export default ArticleSegment