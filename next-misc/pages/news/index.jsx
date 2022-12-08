import React from 'react'

const News = ({data}) => {
  return (
    <div>
      <h4>{data}</h4>
    </div>
  )
}

export default News

export const getStaticProps = async () => {
  return {
    props: {
      data: 'List of published articles'
    }
  }
}