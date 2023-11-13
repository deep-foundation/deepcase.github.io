import React, { memo } from 'react';
import { Box, Grid } from './framework';
import { Masonry } from "masonic";


export const GridArea = React.memo(({
  children, 
  repeat = 8,
  columnsZone = '2/8',
  mediaColumnsZone = '1/9',
  component = 'section',
  innerGridStyles,
  originalPx = '2rem',
  max825Px = '1rem',
  InnerGridProps,
  width,
  ...props
}:{
  children: any;
  repeat?: number;
  columnsZone?: string;
  mediaColumnsZone?: string;
  component?: any;
  innerGridStyles?: any;
  originalPx?: any;
  max825Px?: any;
  InnerGridProps?: any;
  width?: any;
  [key:string]: any;
}) => {

  return (<Grid templateColumns={`repeat(${repeat}, 1fr)`} as={component} {...props}>
      <Box 
        sx={{
          gridColumn: columnsZone,
          px: originalPx,
          '@media only screen and (min-width: 826px) and (max-width: 1260px)': {
            px: 0,
          },
          '@media(max-width: 825px)': {
            gridColumn: mediaColumnsZone,
            px: max825Px,
          },
          ...innerGridStyles
        }}
        {...InnerGridProps}>
        {children}
      </Box>
    </Grid>
  )
});


export const FluidGrid = React.memo<any>(({children}:{children: any;}) => {
  return (<Box display='flex' flexDirection={{sm: 'column', md: 'row'}} pos='relative' alignItems='center' justifyContent='center' w='100%'>
      {children}
    </Box>
  )
})



export const FlexSection = React.memo(({
  children, 
  px = {sm: '1rem', md: '0'},
  ...props
}:{
  children: any; 
  px?: any;
  [props: string]: any;
}) => {

  return (<Box as='section' px={px} display='flex' justifyContent='center' {...props}>
      {children}
    </Box>
  )
})


type GridMasonryProps = {
  children: (item: any) => React.ReactNode;
  items: any[];
}

export const GridMasonry = memo(function GridMasonry(props: GridMasonryProps) {
  const { items, children } = props;
  return (
    <Masonry items={items} render={children} />
  )
});
