import { Avatar, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Sidebar } from 'src/components';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { BlogsService } from 'src/services/blog.service';
import { format } from 'date-fns';
import { calculateEstimatedTimeToRead } from 'src/helpers/time.format';
import { CategoryType } from 'src/interfaces/categories.interface';
import Layout from '@/src/components/layout/Layout';
import { useRouter } from 'next/router';
import SEO from '@/src/components/layout/seo/seo';

const DetailedBlogsPage = ({ blog, lastBlogs, categories }: DetailedBlogsPageProps) => {
  const router = useRouter()
  return (
    <SEO metaTitle={`${router.query.slug} -category`}>


      <Layout>
        <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
          <Box width={{ xs: '100%', md: '70%' }}>
            <Box
              sx={{
                backgroundColor: 'black',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)',
              }}
              position={'relative'}
              width={'100%'}
              height={{ xs: '30vh', md: '50vh' }}
              marginBottom={'20px'}
            >
              <Image src={blog.image.url} alt={blog.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} rowGap={'10px'}>
              <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                <Box>
                  <Typography>{blog.author.name}</Typography>
                  <Box color={'gray'}>
                    {format(new Date(blog.createdAt), 'dd MMM, yyyy')} &#x2022;{' '}
                    {calculateEstimatedTimeToRead(blog.description.text)}
                    min read
                  </Box>
                </Box>
              </Box>
              <Typography variant='h3'>{blog.title}</Typography>
              <Typography color={'gray'}>{blog.excerpt}</Typography>
              <Divider />
              <div style={{ opacity: '.8' }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
            </Box>
          </Box>
          <Sidebar lastBlogs={lastBlogs} categories={categories} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({ query }) => {
  const blog = await BlogsService.getDetailedBlog(query.slug as string);
  const lastBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blog,
      lastBlogs,
      categories,
    },
  };
};

interface DetailedBlogsPageProps {
  blog: BlogsType;
  lastBlogs: BlogsType[];
  categories: CategoryType[];
}