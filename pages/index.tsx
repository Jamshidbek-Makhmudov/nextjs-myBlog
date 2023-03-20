import Layout from '@/src/components/layout/Layout'
import { Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const indexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Main Page</title>
      </Head>

      <Button>Click</Button>

    </Layout>
  )
}

export default indexPage
