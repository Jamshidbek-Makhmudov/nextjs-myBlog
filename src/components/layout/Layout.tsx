import { Box } from '@mui/system'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { LayoutProps } from './layout.props'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
