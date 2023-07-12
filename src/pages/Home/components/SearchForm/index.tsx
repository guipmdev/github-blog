import { SearchFormContainer } from './styles'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext, useCallback, useEffect } from 'react'

import { useForm } from 'react-hook-form'

import {
  PostsContext,
  SearchPostsPayload,
} from '../../../../contexts/PostsContext'

const searchPostsFormSchema = z.object({
  query: z.string().min(1),
})

type SearchPostsFormInputs = z.infer<typeof searchPostsFormSchema>

export function SearchForm() {
  const { fetchPosts, posts } = useContext(PostsContext)

  const {
    register,
    watch,
    handleSubmit,
    formState: { isDirty, isSubmitted },
    reset,
  } = useForm<SearchPostsFormInputs>({
    resolver: zodResolver(searchPostsFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const watchQuery = watch('query')

  const handleSearchPosts = useCallback(
    async ({ query }: SearchPostsFormInputs) => {
      const trimmedQuery = query.trim()

      if (trimmedQuery.length === 0) return

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

      await fetchPosts(payload)
    },
    [fetchPosts],
  )

  useEffect(() => {
    if (!isDirty || isSubmitted) return

    const submitTimeout = setTimeout(() => {
      handleSubmit(handleSearchPosts)()
    }, 2000)

    return () => {
      clearTimeout(submitTimeout)
    }
  }, [isDirty, isSubmitted, handleSubmit, handleSearchPosts, watchQuery])

  useEffect(() => {
    if (isSubmitted) reset({}, { keepDirtyValues: true })
  }, [isSubmitted, reset])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div className="header-form">
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />

      <div className="tooltip">
        <span>
          Use <code>repo:owner/repo-name</code> para filtrar por repositório
        </span>
      </div>
    </SearchFormContainer>
  )
}
