import { Content, Hero, Sidebar } from '@/src/components'
import Layout from '@/src/components/layout/Layout'
import { Box } from '@mui/system'
const indexPage = () => {
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
