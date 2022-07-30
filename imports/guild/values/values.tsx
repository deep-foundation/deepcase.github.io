
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Center, Container, Stack, Text } from '../../framework';
import { Value, ValuesGrid } from './value';

const useStyle = {
  items: {
    transition: 'all 1s ease'
  }
};

const items = [
  {
    title: 'guild--publicity',
    text: 'Голос истины неизящен, а изящная речь лжива. Нравственный человек не красноречив, а красноречивый - лжец.'
  },
  {
    title: 'guild--binary_trust',
    text: 'Великий человек держится существенного и оставляет ничтожное. Он все делает по правде, но никогда не будет опираться на законы.'
  },
  {
    title: 'guild--atomic_responsibility',
    text: 'Хотя в мире нет предмета, который был бы слабее и нежнее воды, но она может разрушить самый твердый предмет.'
  },
  {
    title: 'guild--counseling',
    text: 'Кто делает вид, что много знает и ко всему способен, тот ничего не знает и ни к чему не способен.'
  },
];

export const Values = React.memo<any>(() => {
  const[index, setIndex] = useState(2);
  const { t } = useTranslation();

  const leftSize = index;
  const rightSize = items.length - (index + 1);
  const diff = Math.abs(leftSize - rightSize);
  
  const lastRightIndex = (items.length - 1) - (diff / 2);
  const lastLeftIndex = (diff / 2);

  const onPrevClick = () => {
    setIndex(index>0 ? index - 1 : items.length - 1);
  };

  const onNextClick = () => {
    setIndex(items.length - 1 == index ? 0 : index + 1);
  };

  return(<Box display='flex' flexDir='row' width='100%' justifyContent='center' pl={8} pr={8}>
      <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='stretch' 
        w='100%'
        sx={{
          overflow: 'hidden',
        }}
      >
        <Center sx={{position: 'relative', height: '40vw', width: '100%'}}>
          {items.map((item, _i) => {
            const i = rightSize < leftSize && _i < lastLeftIndex
            ? (items.length) + _i :
            rightSize > leftSize && _i > lastRightIndex
            ? _i - lastRightIndex - lastLeftIndex - 1 :
            _i;
            return <Box key={_i}
              id={`${i}`}
              boxShadow='xs'
              p={8}
              bg='teal.300'
              sx={{
                position: 'absolute',
                height: 'max-content',
                width: 'max-content',
                borderTopLeftRadius: 'md',
                borderTopRightRadius: '2xl',
                borderBottomLeftRadius: '2xl',
                borderBottomRightRadius: 'md',
                transition: 'all 1s ease',
                ...((
                  i >= index - 1 && i <= index + 1
                ) ? ({
                  transform: `translateX(${(i - index)*20}%) scale(${(items.length - (i - index < 0 ? index - i : i - index))/4})`,
                  zIndex: items.length - (i - index < 0 ? index - i : i - index),
                  filter: `opacity(${(items.length - (i - index < 0 ? index - i : i - index))*25}%)`,
                }) : ({
                  transform: `translateX(0%) scale(${(items.length - (i - index < 0 ? index - i : i - index))/4})`,
                  zIndex: items.length - (i - index < 0 ? index - i : i - index),
                  filter: `opacity(${(items.length - (i - index < 0 ? index - i : i - index))*25}%)`,
                }))
              }}>
              <Container maxW='2xs'>
                <Text>{item.text}</Text>
              </Container>
            </Box>
          })}
        </Center>
      </Box>
      <Stack spacing={2} direction={{sm: 'row', md: 'column'}} justifyContent='center'>
        <Value onClick={() => setIndex(0)} text={t('guild--publicity')} />
        <Value onClick={() => setIndex(1)} text={t('guild--binary_trust')} />
        <Value onClick={() => setIndex(2)} text={t('guild--atomic_responsibility')} />
        <Value onClick={() => setIndex(3)} text={t('guild--counseling')} />
      </Stack>
    </Box>
  )
})
