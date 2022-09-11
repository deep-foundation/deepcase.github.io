import React from 'react';
import { Box } from '../framework';
import _ from 'lodash';
import { DocumentationContent } from './documentation-content';
import { DocumentationMenu } from './documentation-menu';


const chapters = _.times(10, (i) => {
  return {
    id: i.toString(),
    title: 'Lorem Ipsum',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo ultrices lacus luctus mattis. Quisque hendrerit molestie feugiat. Fusce aliquet tellus sed ex congue, vel commodo mauris dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eleifend ante nulla, sit amet iaculis lacus vulputate in. Proin ipsum lorem, vulputate ac mauris eu, facilisis aliquet magna. Vestibulum dignissim lacinia varius. Sed gravida quam vitae posuere commodo. Phasellus lacus mauris, faucibus eu rhoncus a, pulvinar a ante. Aliquam eu nibh euismod enim porta semper at auctor nisl. Aliquam pharetra varius sapien vitae fermentum. Aliquam rhoncus erat et dui luctus sagittis. Phasellus quis tellus vulputate, pretium ligula ut, iaculis quam. Sed accumsan egestas bibendum. Sed sed finibus eros."
  }
});

export const Documentation = React.memo(() => {

  return (<Box as='main' display='flex' flexDir={{sm: 'column', md: 'row'}}>
      <Box as='nav' w='100%'>
        <DocumentationMenu />
      </Box>
      <Box>
        {chapters.map(c => (<DocumentationContent key={c.id} title={c.title} description={c.description} />))}
      </Box>
    </Box>
  )
})