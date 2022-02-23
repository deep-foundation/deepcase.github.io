import { TriangleDownIcon } from '@chakra-ui/icons';
import React, { useCallback, useState } from 'react';
import { Box, ButtonGroup, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, HStack } from './framework';


const ButtonMenu = React.memo(() => {
  return (
    <Button 
      variant='outline' 
      colorScheme='second' 
      size='lg'
      aria-label='download deep cased'
      w='100%'
    >
      <HStack>
        <Text fontSize='sm'>Download</Text>
        <Text fontSize='xs'>(electron)</Text>
      </HStack>
    </Button>
  )
})

export const ButtonGroupDownload = React.memo(() => {

  const [electronOpen, setElectronOpen] = useState(null);

  const handleClose = useCallback(() => {
    setElectronOpen(null);
  }, []);

  return(<ButtonGroup>
      <ButtonMenu />
      <Menu autoSelect={false}>
        <MenuButton as={IconButton} icon={<TriangleDownIcon />} size='lg' borderRadius='0.175rem' colorScheme='second' aria-label='download deep cased file format' />
        <MenuList bg='menuItem.100' borderColor='second.500'>
          <MenuItem onClick={handleClose} _hover={{bg: 'menuItem.200'}} _focus={{bg: 'menuItem.200'}}>.app</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: 'menuItem.200'}} _focus={{bg: 'menuItem.200'}}>.exe</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: 'menuItem.200'}} _focus={{bg: 'menuItem.200'}}>.deb</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: 'menuItem.200'}} _focus={{bg: 'menuItem.200'}}>docker</MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  )
})