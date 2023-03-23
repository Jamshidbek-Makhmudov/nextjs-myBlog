import { Content } from '@/src/components'
import Layout from '@/src/components/layout/Layout'
import SEO from '@/src/components/layout/seo/seo'
import { BlogsType } from '@/src/interfaces/blogs.interface'
import { BlogsService } from '@/src/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'

const BlogPage = ({ blogs }: BlogsProps) => {
  return (
    <SEO metaTitle='All blogs'>

      <Layout>
        <Box sx={{ display: 'flex', gap: "20px", padding: "20px", justifyContent: "center", flexDirection: { xs: 'column', md: 'row' }, }}>
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
  const blogs = await BlogsService.getAllBLogs()

  return {
    props: {
      blogs,

    }
  }
}

//bu typescript:
interface BlogsProps {
  blogs: BlogsType[]

}

