import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/components/layout/Layout'
import { Box } from '@mui/system'
import { BlogsService } from '@/src/services/blog.service'
import { GetServerSideProps } from 'next' //bu typescript nextdan keldi
import { BlogsType } from '@/src/interfaces/blogs.interface'

const indexPage = (props: HomePageProps) => {
  console.log(props)

  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: "20px", padding: "20px", flexDirection: { xs: 'column', md: 'row' }, }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}
export default indexPage


//nextjsdsa SSR ya'ni server side rendering ni functioni:
//GetServerSideProps type faqat SSR ga tegishli uni ichidagi propsni typelari ham alohida generic type qilib kiritib ketishimiz kerak
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBLogs()
  return {
    props: {
      blogs,
    }
  }
}

//bu typescript:
interface HomePageProps {
  blogs: BlogsType[]
}
