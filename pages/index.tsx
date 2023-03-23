import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/components/layout/Layout'
import { Box } from '@mui/system'
import { BlogsService } from '@/src/services/blog.service'
import { GetServerSideProps } from 'next' //bu typescript nextdan keldi
import { BlogsType } from '@/src/interfaces/blogs.interface'
import { CategoryType } from '@/src/interfaces/categories.interface'
import SEO from '@/src/components/layout/seo/seo'

const indexPage = ({ blogs, lastBlogs, categories }: HomePageProps) => {


  return (
    <SEO>

      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
        <Box sx={{ display: 'flex', gap: "20px", padding: "20px", flexDirection: { xs: 'column', md: 'row' }, }}>
          <Sidebar lastBlogs={lastBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  )
}
export default indexPage


//nextjsdsa SSR ya'ni server side rendering ni functioni:
//GetServerSideProps type faqat SSR ga tegishli uni ichidagi propsni typelari ham alohida generic type qilib kiritib ketishimiz kerak
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBLogs()
  const lastBlogs = await BlogsService.getLatestBlog()
  const categories = await BlogsService.getCategories()
  return {
    props: {
      blogs,
      lastBlogs,
      categories,
    }
  }
}

//bu typescript:
interface HomePageProps {
  blogs: BlogsType[]
  lastBlogs: BlogsType[]
  categories: CategoryType[]
}
