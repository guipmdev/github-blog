import { PostContainer, CustomReactMarkdownPreview } from './styles'

import { useState, useEffect } from 'react'

import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

import { PostCard } from './components/PostCard'

import postMarkdown from './md/post.md'

export function Post() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(postMarkdown)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  return (
    <PostContainer>
      <PostCard />

      <CustomReactMarkdownPreview
        source={markdown}
        remarkPlugins={[remarkGfm, remarkEmoji]}
        wrapperElement={{
          'data-color-mode': 'dark',
        }}
      />
    </PostContainer>
  )
}
