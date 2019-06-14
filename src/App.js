import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Link } from '@reach/router'

export const HELLO_QUERY = gql`
  query HELLO_QUERY {
    hello
  }
`

export const WORLD_QUERY = gql`
  query WORLD_QUERY {
    world
  }
`

function Loading() {
  return <p>Loading...</p>
}

function Error({ error }) {
  return (
    <p>
      <strong>Error: {error.message}</strong>
    </p>
  )
}

function Hello() {
  const { error, loading, data } = useQuery(HELLO_QUERY)
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && data.hello && <h1>{data.hello}</h1>}
    </>
  )
}

function World() {
  const { error, loading, data } = useQuery(WORLD_QUERY)

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && data.world && <h1>{data.world}</h1>}
    </>
  )
}

function Demo() {
  return (
    <>
      <Hello />
      <World />
    </>
  )
}

export default function App() {
  return (
    <div
      style={{
        display: `grid`,
        gridTemplateRows: `auto 1fr`,
        minHeight: `100vh`,
      }}
    >
      <header
        style={{
          padding: `1rem`,
          background: `papayawhip`,
        }}
      >
        <Link to="/">Apollo-Lambda Netlify Demo</Link>
      </header>
      <main
        style={{
          margin: `1rem`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Demo />
      </main>
    </div>
  )
}
