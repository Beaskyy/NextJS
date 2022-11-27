import React from 'react'

const NewsCategory = ({articles, category}) => {
  return (
    <div>
      <h1>News Article for category {category}</h1>

      {articles.map(article => (
        <div key={article.id}>
          <h4>{article.id} {article.title} | {article.category}</h4>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsCategory

export const getServerSideProps = async (context) => {
  const {params} = context
  const {category} = params
  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()

  return {
    props: {
      articles: data,
      category
    }
  }
} 