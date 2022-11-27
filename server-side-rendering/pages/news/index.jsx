import React from 'react'

const NewsArticle = ({ articles }) => {
  return (
    <div>
    <h1>List of News Article</h1>
    {articles.map(article => (
      <div key={article.id}>
        <h3>{article.id} {article.title} | {article.category}</h3>
      </div>
    ))}
    </div>
  )
}

export default NewsArticle

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      articles: data
    }
  }
}