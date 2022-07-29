import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { Flex, IconButton, Spacer } from '../../framework';


export const Menu = React.memo<any>((props) => {

  return (<Flex {...props}>
      <IconButton variant='outline' isRound colorScheme='purple' aria-label='menu button' icon={<IoIosMenu />} />
      <Spacer />
      <IconButton variant='outline' isRound colorScheme='purple' aria-label='russian language button' icon={<FaLanguage />} />
    </Flex>
  )
})