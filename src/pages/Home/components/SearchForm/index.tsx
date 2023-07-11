import { SearchFormContainer } from './styles'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext, useEffect, useCallback } from 'react'

import { useForm } from 'react-hook-form'

import {
  PostsContext,
  SearchPostsPayload,
} from '../../../../contexts/PostsContext'

const searchPostsFormSchema = z.object({
  query: z.string(),
})

type SearchPostsFormInputs = z.infer<typeof searchPostsFormSchema>

export function SearchForm() {
  const { fetchPosts, posts } = useContext(PostsContext)

  const { register, watch, handleSubmit } = useForm<SearchPostsFormInputs>({
    resolver: zodResolver(searchPostsFormSchema),
  })

  const watchQuery = watch('query')

  const handleSearchPosts = useCallback(
    ({ query }: SearchPostsFormInputs) => {
      const trimmedQuery = query.trim()

      const payload: SearchPostsPayload = {
        repo: undefined,
        query: trimmedQuery,
      }

      const flag = 'repo:'
      const hasFlag = query.includes(flag)

      if (hasFlag) {
        const flagIndex = trimmedQuery.indexOf(flag)

        const querySubstring = trimmedQuery
          .substring(flagIndex + flag.length)
          .trim()

        const firstWhitespaceAfterFlagIndex = querySubstring.indexOf(' ')

        const repoName =
          firstWhitespaceAfterFlagIndex >= 0
            ? querySubstring.substring(0, firstWhitespaceAfterFlagIndex)
            : querySubstring

        const repoWithFlagLength = repoName.length + flag.length

        const queryWithoutRepo =
          flagIndex > 0
            ? trimmedQuery
                .substring(0, trimmedQuery.length - repoWithFlagLength)
                .trim()
            : trimmedQuery.substring(repoWithFlagLength).trim()

        payload.repo = repoName
        payload.query = queryWithoutRepo.replace(/ /g, '%20')
      }

      fetchPosts(payload)
    },
    [fetchPosts],
  )

  useEffect(() => {
    const submitTimeout = setTimeout(() => {
      handleSubmit(handleSearchPosts)()
    }, 2000)

    return () => {
      clearTimeout(submitTimeout)
    }
  }, [handleSearchPosts, handleSubmit, watchQuery])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteudo" {...register('query')} />
    </SearchFormContainer>
  )
}
