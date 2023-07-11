import { Routes, Route, Navigate } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:owner/:repo/post/:id" element={<Post />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
