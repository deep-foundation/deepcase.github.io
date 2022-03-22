import React from 'react';
import { Text } from '../framework';


export const MapText = React.memo(() => {
  return (
    <Text 
      fontSize='5rem'
      fontWeight='bold'
      align='center'
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '60%',
        color: 'transparent',
        background: 'conic-gradient(#DF3A86 12%, #45CF7A 12%, #7556F6 33%, #FC8335 3%, #5688E8 55%, #DB4E73 55%, #38D2BC 70%, #F7C331 70%, #EE696D 47%,  #643EE2 87%)',
        backgroundSize: '50%',
        backgroundClip: 'text', 
         WebkitTextStrokeColor: '#3f02e5',
         WebkitTextStrokeWidth: '0.125rem', 
      }}
    >
      Культ глубины не имеет ни географических, ни границ мышления. Любой, разделяющий наши ценности может стать одним из нас.
    </Text>
  )
})