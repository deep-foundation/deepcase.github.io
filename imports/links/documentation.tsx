import React, { useEffect, useState } from 'react';
import { Box, Img, Circle, Hide, Show, useMediaQuery } from '../framework';
import _ from 'lodash';
import { DocumentationContent } from './documentation-content';
import { DocumentationMenuItem, Menu } from './documentation-menu-item';
import { H1 } from '../headers';
import { motion, useAnimation } from 'framer-motion';
import { DocumentationMenu } from './documentation-menu';


const chapters = _.times(10, (i) => {
  return {
    id: i.toString(),
    title: 'Lorem Ipsum',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis. Quisque hendrerit molestie feugiat. Fusce aliquet tellus sed ex congue, vel commodo mauris dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eleifend ante nulla, sit amet iaculis lacus vulputate in. Proin ipsum lorem, vulputate ac mauris eu, facilisis aliquet magna. Vestibulum dignissim lacinia varius. Sed gravida quam vitae posuere commodo. Phasellus lacus mauris, faucibus eu rhoncus a, pulvinar a ante. Aliquam eu nibh euismod enim porta semper at auctor nisl. Aliquam pharetra varius sapien vitae fermentum. Aliquam rhoncus erat et dui luctus sagittis. Phasellus quis tellus vulputate, pretium ligula ut, iaculis quam. Sed accumsan egestas bibendum. Sed sed finibus eros."
  }
});

const menuVariants = {
  visible: { borderRadius: '50%', transition: { duration: 0.8 } },
  hidden: { borderRadius: 'none', transition: { duration: 0.8 } }
};

export const Documentation = React.memo<any>(() => {
  const [expanded, setExpanded] = useState(0);

  const placeholderMenu: Menu = [
    {
      id: 123,
      title: 'Abc',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
      children: [
        {
          id: 234,
          title: 'Qwe',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
        },
        {
          id: 274,
          title: 'Qwe',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
          children: [
            {
              id: 734,
              title: 'Pere',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
            },
          ]
        },
      ],
    },
    {
      id: 1223,
      title: 'Abc',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis.',
    },
  ];
  const controls = useAnimation();
  const [max820] = useMediaQuery('(max-width: 820px)');
  const [min820] = useMediaQuery('(min-width: 820px)');
  // useEffect(() => {
  //   if (max820) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, max820]);
  

  return (<Box display='grid' gridTemplateColumns={{sm: '1fr', md: 'minmax(4rem, 20rem) 1px 1fr'}} gridTemplateRows={{sm: '0.2fr 1fr', md: '1fr'}}>
        <Box as='nav' w='100%' display='flex' flexDirection={min820 ? 'column' : 'row-reverse'}>
          <Box display='flex' flexDirection='row' alignItems='center' p={4} boxSize='border-box'>
            <Circle size='3rem'>
              <Img src='./logo_n.svg' alt='logo' />
            </Circle>
            <H1>Deep.Case</H1>
          </Box>
          <Box w='100%' h='1px' bg='blackAlpha.200' />
          {/* <Box pos='relative'> */}
            <DocumentationMenu menuList={
              <Box sx={{
                p: 4,
                // position: 'absolute',
                top: min820 ? 0 : 100,
                width: '100%',
              }}>
                {placeholderMenu.map((p, i) => (
                  <DocumentationMenuItem 
                    key={p.id}
                    i={i}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={p.title}
                    children={p.children} 
                    id={p.id}
                  />
                ))}
              </Box>}
              breakpoint='(min-width: 820px)' 
            />
          {/* </Box> */}
        </Box>
      <Hide breakpoint='(max-width: 820px)'>
        <Box h='100vh' w='1px' bg='blackAlpha.200' />
      </Hide>
      <Box boxSize='border-box' p={8}>
        {placeholderMenu.map(p => (<DocumentationContent key={p.id} {...p} />
        ))}
      </Box>
    </Box>
  )
})
