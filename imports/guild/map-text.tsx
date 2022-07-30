import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../framework';


export const MapText = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Text 
      fontSize='calc(1rem + 3vmin)'
      fontWeight='bold'
      align='center'
      sx={{
        color: 'transparent',
        background: 'conic-gradient(#DF3A86 12%, #45CF7A 12%, #7556F6 33%, #FC8335 3%, #5688E8 55%, #DB4E73 55%, #38D2BC 70%, #F7C331 70%, #EE696D 47%,  #643EE2 87%)',
        backgroundSize: '50%',
        backgroundClip: 'text', 
        WebkitTextStrokeColor: '#6f6e6f',
        WebkitTextStrokeWidth: '0.1rem', 
      }}
    >
      {t('guild--geography')}
    </Text>
  )
})