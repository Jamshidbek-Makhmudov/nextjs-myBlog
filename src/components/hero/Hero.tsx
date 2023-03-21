import { Avatar, Box, Typography } from '@mui/material'
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import me from '../../assets/me.jpeg'

const Hero = () => {
  return (
    <Box width={'100%'} height={"70vh"} sx={{}}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
          }
        }
        }>

        {data.map(item => (
          <Box key={item.image}>
            <Box sx={{ position: 'relative', width: '100%', height: '70vh' }}>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, .6)',
                }}
              />
              <Box
                width={{ xs: '100%', sm: '70%' }}
                position={'relative'}
                color={'white'}
                sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: { xs: '10px', sm: '50px' } }}
                zIndex={999}
              >
                <Typography variant='h2'>{item.title}</Typography>
                <Typography variant='h5'>{item.exerpt}</Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <Avatar alt={item.author.name} src={item.author.image} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>{format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}

      </Carousel>
    </Box >
  )
}

export default Hero

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