import Layout from '@/src/components/layout/Layout';
import SEO from '@/src/components/layout/seo/seo';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Content, Sidebar } from 'src/components';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from 'src/interfaces/categories.interface';

import { BlogsService } from 'src/services/blog.service';

const CategoryDetailedPage = ({ blogs, lastBlogs, categories }: DetailedCategoriesPageProps) => {
  const router = useRouter()
  return (
    <SEO metaTitle={`${router.query.slug}-category`}>

      <Layout>
        <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
          <Sidebar lastBlogs={lastBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
  const blogs = await BlogsService.getDetaieldCateogriesBlog(query.slug as string);
  const lastBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blogs,
      lastBlogs,
      categories,
    },
  };
};

interface DetailedCategoriesPageProps {
  blogs: BlogsType[];
  lastBlogs: BlogsType[];
  categories: CategoryType[];
}