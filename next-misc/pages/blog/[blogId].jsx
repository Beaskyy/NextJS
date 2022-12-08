import Head from 'next/head'
import React from 'react'

const BlogId = ({name, description}) => {
  return (
    <>
    <Head>
      <title>{name}</title>
      <meta name='description' content={description} />
    </Head>
    <h2>Article</h2>
    </>
  )
}

export default BlogId

export const getServerSideProps = async () => {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(`Connecting to database usersname ${user} with password ${password}`)
  return {
    props: {
      name: 'Blog title',
      description: 'Description of the article'
    }
  }
}