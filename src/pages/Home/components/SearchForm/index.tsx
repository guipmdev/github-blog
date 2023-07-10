import { SearchFormContainer } from './styles'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { useEffect } from 'react'

const searchPostsFormSchema = z.object({
  query: z.string(),
})

type SearchPostsFormInputs = z.infer<typeof searchPostsFormSchema>

export function SearchForm() {
  const { register, watch, handleSubmit } = useForm<SearchPostsFormInputs>({
    resolver: zodResolver(searchPostsFormSchema),
  })

  const watchQuery = watch('query')

  function handleSearchPosts(data: SearchPostsFormInputs) {
    console.log({ data })
  }

  useEffect(() => {
    const submitTimeout = setTimeout(() => {
      handleSubmit(handleSearchPosts)()
    }, 2000)

    return () => {
      clearTimeout(submitTimeout)
    }
  }, [handleSubmit, watchQuery])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteudo" {...register('query')} />
    </SearchFormContainer>
  )
}
