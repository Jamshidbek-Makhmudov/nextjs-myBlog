import { Hero } from '@/src/components'
import Layout from '@/src/components/layout/Layout'
import { Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const indexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
export default indexPage
