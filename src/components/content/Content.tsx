import { Avatar, Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { format } from 'date-fns';

const Content = () => {
  return (
    <Box width={{ xs: '100%', md: '70%' }}>
      {data.map(item => (
        <Box
          key={item.image}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, .5)',
            padding: '20px',
            marginTop: '20px',
            borderRadius: '8px',
            boxShadow: '0px 8px 16px rgba(255, 255, 255, .5)',
          }}
        >
          <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
            <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
          <Typography variant='h4' marginTop={'30px'}>
            {item.title}
          </Typography>
          <Typography variant='body1' color={'gray'}>
            {item.exerpt}
          </Typography>
          <Divider sx={{ marginTop: '30px' }} />
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box color={'gray'}>{format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read</Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;

const data = [
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Technical SEO with Hygraph',
    exerpt: 'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Jamshid Makhmudov',
      image: "https://media.licdn.com/dms/image/D5603AQHwITjK2vPESQ/profile-displayphoto-shrink_400_400/0/1672994847136?e=1684972800&v=beta&t=z6wLehFWYTd7AqWi0xrvDB65HVlZ2tqeKFoN26BbXGA",
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Jamshid Makhmudov',
      image: "https://media.licdn.com/dms/image/D5603AQHwITjK2vPESQ/profile-displayphoto-shrink_400_400/0/1672994847136?e=1684972800&v=beta&t=z6wLehFWYTd7AqWi0xrvDB65HVlZ2tqeKFoN26BbXGA",
    },
  },
];