import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const HELLO_QUERY = gql`
  query HELLO_QUERY {
    hello
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

function LambdaDemo() {
  const { error, loading, data } = useQuery(HELLO_QUERY)
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && data.hello && <h3>{data.hello}</h3>}
    </>
  )
}

export default function App() {
  return <LambdaDemo />
}
