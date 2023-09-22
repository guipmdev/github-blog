<!-- ===== HEADER ===== -->
<p align="right">
  <img
    src="https://img.shields.io/badge/lang-en-gray?style=flat-square&labelColor=202024"
    alt="lang-en"
  />
  <a href="./README.pt-br.md" title="Ler o README em português brasileiro">
    <img
      src="https://img.shields.io/badge/lang-pt--br-green?style=flat-square&labelColor=202024"
      alt="lang-pt-br"
    />
  </a>
</p>

<h1 align="center">
  <a
    href="https://guipmdev-github-blog.vercel.app/"
    title="Go to the web application"
  >
    <img
      src="./src/assets/github_blog-logo.svg"
      alt="GitHub Blog logo"
      height="80px"
    />
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/github-blog?color=%2304D361&labelColor=202024"
    alt="Repository language count"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/github-blog?labelColor=202024"
    alt="Repository size"
  />
  <img
    src="https://img.shields.io/github/commit-activity/m/guipmdev/github-blog?color=black&labelColor=202024"
    alt="Commit activity"
  />
  <a
    href="https://github.com/guipmdev/github-blog/commits/main"
    title="View repository commits"
  >
    <img
      src="https://img.shields.io/github/last-commit/guipmdev/github-blog?labelColor=202024"
      alt="Last commit"
    />
  </a>
  <a href="./LICENSE" title="View project license">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024"
      alt="Project license"
    />
  </a>
  <a href="https://www.rocketseat.com.br/" title="Go to the Rocketseat website">
    <img
      src="https://img.shields.io/badge/Layout_by-Rocketseat-8257e5?labelColor=202024"
      alt="Layout designer"
    />
  </a>
</p>

![Screenshot of the application initial page](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-github-blog.vercel.app/"
    >Go to the web application ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Table of Contents</h2>
  </summary>

- [📍 Overview](#-overview)
- [✨ Features](#-features)
- [🤖 Demo](#-demo)
- [🎨 Layout](#-layout)
- [🛠 Technologies](#-technologies)
  - [Website](#website)
  - [Utils](#utils)
- [🚀 Getting Started](#-getting-started)
  - [✔️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [⚙️ Usage](#️-usage)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Overview

The project is a _React-based_ web application that provides an interface for reading and searching posts in GitHub repositories. The main functionalities include viewing the basic information of a specific user on the home page, searching for posts using keywords and/or repository filters and reading them in full when accessing them.

The project's purpose is to provide an easy-to-use and visually pleasing application for browsing and exploring blogs, improving the content reading and discovery experience.

## ✨ Features

👤 View the details of **my GitHub user**

🔎 **Search for posts** in all repositories

🏷 Use **filters** to specify in which repo you want to search

📰 **Read amazing posts** directly on the platform, or open them in GH itself

## 🤖 Demo

https://github.com/guipmdev/github-blog/assets/136738335/1d8f30bd-f7ff-4507-84e9-efd0bf121876

## 🎨 Layout

The layout of the application was designed by **Rocketseat** and is available on [Figma](<https://www.figma.com/file/BYpokjkgwb2kamROXb1Z7X/GitHub-Blog-(Community)>).

<p align="center">
  <img
    src="./src/assets/images/layout-cover.webp"
    alt="Web application layout image cover"
    width="50%"
  />
</p>

## 🛠 Technologies

The following tools were used to build the project:

### Website

<p>
  <a href="https://vitejs.dev/">
    <img
      src="https://img.shields.io/badge/Vite-1e1e20?style=for-the-badge&logo=Vite"
      alt="Vite"
    />
  </a>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript"
      alt="TypeScript"
    />
  </a>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
  <a href="https://github.com/rocketseat/eslint-config-rocketseat">
    <img
      src="https://img.shields.io/badge/Rocketseat_ESLint_config-gray?style=for-the-badge"
      alt="Rocketseat ESLint config"
    />
  </a>
</p>

<p>
  <a href="https://reactrouter.com/">
    <img
      src="https://img.shields.io/badge/React_Router-121212?style=for-the-badge&logo=react-router"
      alt="React Router"
    />
  </a>
  <a href="https://axios-http.com/">
    <img
      src="https://img.shields.io/badge/Axios-373747?style=for-the-badge&logo=Axios"
      alt="Axios"
    />
  </a>
  <a href="https://react-hook-form.com/">
    <img
      src="https://img.shields.io/badge/React_Hook_Form-060e21?style=for-the-badge&logo=react-hook-form"
      alt="React Hook Form"
    />
  </a>
  <a href="https://github.com/colinhacks/zod">
    <img
      src="https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod"
      alt="Zod"
    />
  </a>
  <a href="https://date-fns.org/">
    <img
      src="https://img.shields.io/badge/date--fns-fffbf5?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMycHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDMyIDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMSAoMjgyMTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlNsaWNlIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGF0ZS1mbnMtbWluaS1sb2dvIiBmaWxsPSIjNzcwQzU2Ij4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibG9nbyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTb2xpZC1sb2dvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJXaGl0ZS1sb2dvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4wNzczMzc3OTUxLDEyLjk2MTc2NDcgQzAuMDc3MzM3Nzk1MSwxMC40NjU3NTIyIDAuNTQxMzU5OTI2LDguMTEyMDExMDYgMS40Njk0MTgxMSw1LjkwMDQ3MDU5IEMyLjM5NzQ3NjI5LDMuNjg4OTMwMTMgMy43MzM4NjAwMywxLjcyOTc3MzI0IDUuNDc4NjA5NDEsMC4wMjI5NDExNzY0IEw4Ljk4NjY1MTc5LDAuMDIyOTQxMTc2NCBDNS4zNDg2NjM3MiwzLjU4MzQyOTU2IDMuNTI5Njk2OTcsNy44OTYzMjc2MSAzLjUyOTY5Njk3LDEyLjk2MTc2NDcgQzMuNTI5Njk2OTcsMTguMDI3MjAxOCA1LjM0ODY2MzcyLDIyLjM0MDA5OTkgOC45ODY2NTE3OSwyNS45MDA1ODgzIEw1LjQ3ODYwOTQxLDI1LjkwMDU4ODMgQzMuNzMzODYwMDMsMjQuMTkzNzU2MSAyLjM5NzQ3NjI5LDIyLjIzNDU5OTMgMS40Njk0MTgxMSwyMC4wMjMwNTg4IEMwLjU0MTM1OTkyNiwxNy44MTE1MTg0IDAuMDc3MzM3Nzk1MSwxNS40NTc3NzcyIDAuMDc3MzM3Nzk1MSwxMi45NjE3NjQ3IEwwLjA3NzMzNzc5NTEsMTIuOTYxNzY0NyBMMC4wNzczMzc3OTUxLDEyLjk2MTc2NDcgTDAuMDc3MzM3Nzk1MSwxMi45NjE3NjQ3IFogTTMxLjQzNzgxMzcsMTIuOTYxNzY0NyBDMzEuNDM3ODEzNywxNS40NTc3NzcyIDMwLjk3Mzc5MTYsMTcuODExNTE4NCAzMC4wNDU3MzM0LDIwLjAyMzA1ODggQzI5LjExNzY3NTIsMjIuMjM0NTk5MyAyNy43ODEyOTE1LDI0LjE5Mzc1NjEgMjYuMDM2NTQyMSwyNS45MDA1ODgzIEwyMi41Mjg0OTk4LDI1LjkwMDU4ODMgQzI2LjE2NjQ4NzgsMjIuMzQwMDk5OSAyNy45ODU0NTQ1LDE4LjAyNzIwMTggMjcuOTg1NDU0NSwxMi45NjE3NjQ3IEMyNy45ODU0NTQ1LDcuODk2MzI3NjEgMjYuMTY2NDg3OCwzLjU4MzQyOTU2IDIyLjUyODQ5OTgsMC4wMjI5NDExNzY0IEwyNi4wMzY1NDIxLDAuMDIyOTQxMTc2NCBDMjcuNzgxMjkxNSwxLjcyOTc3MzI0IDI5LjExNzY3NTIsMy42ODg5MzAxMyAzMC4wNDU3MzM0LDUuOTAwNDcwNTkgQzMwLjk3Mzc5MTYsOC4xMTIwMTEwNiAzMS40Mzc4MTM3LDEwLjQ2NTc1MjIgMzEuNDM3ODEzNywxMi45NjE3NjQ3IEwzMS40Mzc4MTM3LDEyLjk2MTc2NDcgTDMxLjQzNzgxMzcsMTIuOTYxNzY0NyBMMzEuNDM3ODEzNywxMi45NjE3NjQ3IFoiIGlkPSJQYXJhbnMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSGFuZHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjk1NDA4MSwgMS43MjA1ODgpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkhhbmQiIHg9IjAiIHk9IjAiIHdpZHRoPSIyLjMyMDEzMzg2IiBoZWlnaHQ9IjEzLjE5MTE3NjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkhhbmQiIHBvaW50cz0iMi4zMTg5NTUxIDEzLjE0OTkzNDIgMC44MTUwODc5MTYgMTEuNjYyOTMwMiAxMC4yNDg0MzY2IDIuMzM1MzU5OSAxMS43NTIzMDM4IDMuODIyMzYzODggMi4zMTg5NTUxIDEzLjE0OTkzNDIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
      alt="date-fns"
    />
  </a>
  <a href="https://react-hot-toast.com/">
    <img
      src="https://img.shields.io/badge/react--hot--toast-fff7e2?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGoSURBVHgB7Zc9T8JAGMf/VyqgkIgx0cFEYdIRVicIC7KZiHEwwU3jZvwEfgJmJxx0EQcGgySGiIurfAOqiQMaY0mEEFvubDHyVrC2vGnCb7q7Pn2eX+6eJlcCHYILmJ2w2aIgWIYBKOhdtSJdZp7w+lMcBx0sNuuh0eJfiblV3m7d14sjnRZDK3Y3kWhMGfoZiAs9QMBExpAE5Y7SQkXQPu9QHBK7UYZu9BMGoUInfVlBFLsK5CNhb1n+iDv5CS8GwLss5aYYv+5JpgWNQH4r5Oaq3L2i2tOW/wKRQg54Etc5dVJvQiIjPoTiKi4L+Nj3pCFAiB9DginNjXaBUTFyAV4vwOEPYia6B87hqM3l5wKKF6coZTOm4trR3YHpje160prx3LxSaNd0nGEBNZHmJYfTdJxhgUEzFtD9CrqxeJ5CPxgfwf/tgcfNcMvcbE+Mj+DvC9BySbMmvxRMxxkWeDs5bkmkFiomzkzHtVO/lD5E1hiGyFLiqlZ73ISNWzGQxZBQzvpWI1AFOVA0RAwcIjKJ7WgEPIlUjlqor9mu36i5KRBo/jX7BOYOk9RNOtboAAAAAElFTkSuQmCC"
      alt="react-hot-toast"
    />
  </a>
  <a href="https://www.davidhu.io/react-spinners/">
    <img
      src="https://img.shields.io/badge/React Spinners-gray?style=for-the-badge"
      alt="React Spinners"
    />
  </a>
</p>

<p>
  <a href="https://styled-components.com/">
    <img
      src="https://img.shields.io/badge/styled--components-0c0d0f?style=for-the-badge&logo=styled-components"
      alt="styled-components"
    />
  </a>
  <a href="https://react-icons.github.io/react-icons/">
    <img
      src="https://img.shields.io/badge/React_Icons-1d2021?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2MDBweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U5MUU2MyIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMzcxLjk4NywyMjcuNjQxICAgYzQ3LjYyOCw0Ny42MjgsODUuMDM5LDk4LjcwOCwxMDYuOTE0LDE0My41NTJjMjYuMzU4LDU0LjAzMywzMC4wOTYsOTkuNzIyLDExLjEwMywxMTguNzE0ICAgYy0xOS43OTMsMTkuNzkzLTY4LjI2NywxNS44ODQtMTI1LjczMS0xMi45NzljLTQzLjQ0NS0yMS44MjEtOTIuMDMxLTU5LjExOS0xMzcuMjQyLTEwNC4zMzEgICBjLTQ2LjM1NC00Ni4zNTQtODQuOTUtOTUuNTQ1LTEwNi42NjctMTM5LjgxNmMtMjcuNDgtNTYuMDIzLTMwLjA1Ny0xMDMuNzQzLTEwLjY0My0xMjMuMTU3ICAgYzE4LjgzOC0xOC44MzksNjMuMjQ4LTE2LjA1NiwxMTYuNjk0LDkuNzU3QzI3MS41NzQsMTQxLjE5MywzMjMuODk1LDE3OS41NDgsMzcxLjk4NywyMjcuNjQxeiIvPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U5MUU2MyIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjcyLjkzMSwyMDEuMTI1ICAgYzY1LjA1Mi0xNy40NjUsMTI3Ljk4OS0yNC4zNTQsMTc3Ljc2Ny0yMC45MDJjNTkuOTc0LDQuMTYsMTAxLjQyLDIzLjc0NywxMDguMzg1LDQ5LjY4OCAgIGM3LjI1OSwyNy4wMzMtMjAuMzQ1LDY3LjA3My03NC4wNTQsMTAyLjQzNGMtNDAuNjA4LDI2LjczMy05Ny4xODksNTAuMTg4LTE1OC45NDEsNjYuNzY5ICAgYy02My4zMTIsMTYuOTk4LTEyNS4yMDcsMjUuODU4LTE3NC40MDgsMjIuNTUzYy02Mi4yNi00LjE4MS0xMDQuODg0LTI1Ljc4OS0xMTIuMDA0LTUyLjMwNiAgIGMtNi45MDctMjUuNzMxLDE3LjY4OC02Mi44MTEsNjYuNzUtOTYuMjE0QzE0Ny44NzksMjQ0LjkyMywyMDcuMjQzLDIxOC43NjEsMjcyLjkzMSwyMDEuMTI1eiIvPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U5MUU2MyIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjAwLjQ2OSwyNzMuNzA3ICAgYzE3LjM1Ny02NS4wODEsNDIuODItMTIzLjA1LDcwLjY3MS0xNjQuNDVjMzMuNTU2LTQ5Ljg4Miw3MS4yMjUtNzYuMDA4LDk3LjE3OC02OS4wODZjMjcuMDQ1LDcuMjEyLDQ3Ljk0OSw1MS4xMjMsNTEuNzYsMTE1LjMxNSAgIGMyLjg4Myw0OC41MzMtNS4wNTUsMTA5LjI2Ni0yMS41MzEsMTcxLjA0NmMtMTYuODkyLDYzLjM0MS00MC4xMjYsMTIxLjM4OS02Ny41NjIsMTYyLjM2NSAgIGMtMzQuNzE2LDUxLjg1Mi03NC43MjMsNzcuOTg4LTEwMS4yNTIsNzAuOTEzYy0yNS43NDMtNi44NjUtNDUuNTg0LTQ2LjY5Mi01MC4wMjEtMTA1Ljg4MSAgIEMxNzUuOTYzLDQwMy45MiwxODIuOTQ0LDMzOS40MjQsMjAwLjQ2OSwyNzMuNzA3eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzMiPg0KCTxwYXRoIGZpbGw9IiNFOTFFNjMiIGQ9Ik0zMDAsMzQ5LjM2OWMtMS4wMTksMC0xLjg4MS0wLjM1My0yLjU4Ni0xLjA1OGwtMzYuNjc5LTM1LjM4NmMtMC4zOTItMC4zMTMtMC45MzEtMC44MjItMS42MTctMS41MjggICBjLTAuNjg2LTAuNzA1LTEuNzczLTEuOTg4LTMuMjYyLTMuODUxYy0xLjQ4OS0xLjg2LTIuODIyLTMuNzcxLTMuOTk3LTUuNzNzLTIuMjI0LTQuMzMtMy4xNDUtNy4xMTIgICBjLTAuOTItMi43ODItMS4zODEtNS40ODYtMS4zODEtOC4xMTFjMC04LjYyMSwyLjQ4OC0xNS4zNjEsNy40NjUtMjAuMjIxYzQuOTc3LTQuODU5LDExLjg1NC03LjI4OSwyMC42MzEtNy4yODkgICBjMi40MywwLDQuOTA5LDAuNDIxLDcuNDM2LDEuMjY0YzIuNTI3LDAuODQzLDQuODc5LDEuOTc5LDcuMDU0LDMuNDFjMi4xNzQsMS40Myw0LjA0NiwyLjc3Miw1LjYxMyw0LjAyNnMzLjA1NywyLjU4Niw0LjQ2NywzLjk5NyAgIGMxLjQxMS0xLjQxMSwyLjg5OS0yLjc0Myw0LjQ2Ny0zLjk5N2MxLjU2OC0xLjI1NCwzLjQzOC0yLjU5Niw1LjYxNC00LjAyNmMyLjE3NS0xLjQzMSw0LjUyNS0yLjU2Nyw3LjA1NC0zLjQxICAgYzIuNTI3LTAuODQyLDUuMDA2LTEuMjY0LDcuNDM1LTEuMjY0YzguNzc4LDAsMTUuNjU1LDIuNDMsMjAuNjMyLDcuMjg5YzQuOTc4LDQuODU5LDcuNDY2LDExLjYsNy40NjYsMjAuMjIxICAgYzAsOC42Ni00LjQ4NywxNy40NzctMTMuNDYxLDI2LjQ1MWwtMzYuNjE5LDM1LjI2OEMzMDEuODgxLDM0OS4wMTcsMzAxLjAxOSwzNDkuMzY5LDMwMCwzNDkuMzY5eiIvPg0KPC9nPg0KPC9zdmc+"
      alt="React Icons"
    />
  </a>
  <a href="https://uiwjs.github.io/react-markdown-preview/">
    <img
      src="https://img.shields.io/badge/React_Markdown_Preview-gray?style=for-the-badge"
      alt="React Markdown Preview"
    />
  </a>
  <a
    href="https://github.com/remarkjs/remark/blob/HEAD/doc/plugins.md#list-of-plugins"
  >
    <img
      src="https://img.shields.io/badge/remark_plugins-d80303?style=for-the-badge&logo=remark"
      alt="remark plugins"
    />
  </a>
</p>

_\* See the [<kbd>package.json</kbd>](./package.json) file_

### Utils

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://figma.com/">
    <img
      src="https://img.shields.io/badge/Figma-white?style=for-the-badge&logo=figma"
      alt="Figma"
    />
  </a>
  <a href="https://fonts.google.com/">
    <img
      src="https://img.shields.io/badge/Google_Fonts-white?style=for-the-badge&logo=google-fonts"
      alt="Google Fonts"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following tools installed on your machine: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). It's also good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/Download).

### 📦 Installation

1. Clone the repository:

```sh
git clone https://github.com/guipmdev/github-blog/
```

2. Change to the project directory:

```sh
cd github-blog
```

3. Install the dependencies:

```sh
npm install
```

### ⚙️ Usage

1. Start the web application:

```sh
npm run dev
```

2. Access https://localhost:5173/ to view the application

## 📄 License

This project is licensed under the terms of the `MIT` license. See the
[LICENSE](./LICENSE) file for additional info.

## 👏 Acknowledgments

> - Many thanks to [Rocketseat](https://www.rocketseat.com.br/) for the layout and tips when putting this project together

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Made with 💙 by
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Feel free to
  <a href="mailto:guipm.dev@gmail.com">contact me</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Return to the top &nbsp;&nbsp;↑</b>
  </a>
</p>
