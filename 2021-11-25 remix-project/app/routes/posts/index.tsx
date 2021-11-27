import * as React from 'react'
import { getPosts } from '~/post'
import type { Post } from '~/post'
import { Link, useLoaderData } from 'remix'

export let loader = () => {
  return getPosts()
}

const Posts = () => {
  let posts = useLoaderData<Post[]>()

  console.log(posts)
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts