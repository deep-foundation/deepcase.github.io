import React from 'react';
import { Box, Text } from '../framework';
import { H1 } from '../headers';


interface IChapter {
  title: string;
  description: string;
}

export const DocumentationContent = React.memo(({title, description}:IChapter) => {

  return (<Box as='article'>
      <H1 as='header'>{title}</H1>
      <Text fontSize='sm'>{description}</Text>
    </Box>
  )
})