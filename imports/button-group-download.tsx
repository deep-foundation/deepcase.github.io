import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, HStack, Text } from './framework';


const ButtonMenu = memo(() => {
  const { t } = useTranslation();
  return (
    <Button 
      variant='outline' 
      colorScheme='second' 
      size='lg'
      aria-label='download deep cased'
      w='100%'
      as='a'
      target='_blank'
      href='https://www.notion.so/ivansglazunov/Install-and-Using-8f213fbd532e4c869626b061b691ba2c'
      _focus={{ boxShadow: "none" }} _active={{ bg: "second.600", color: "gray.50" }}
    >
      <HStack>
        <Text fontSize='sm'>{t('iframe--install')}</Text>
        <Text fontSize='xs'>(electron)</Text>
      </HStack>
    </Button>
  )
})

export const ButtonGroupDownload = memo(() => {

  const [electronOpen, setElectronOpen] = useState(null);

  const handleClose = useCallback(() => {
    setElectronOpen(null);
  }, []);

  return(<ButtonGroup>
      <ButtonMenu />
      {/* <Menu autoSelect={false}>
        <MenuButton as={IconButton} icon={<TriangleDownIcon />} size='lg' borderRadius='0.175rem' colorScheme='second' aria-label='download deep cased file format' />
        <MenuList bg='menuItem.100' borderColor='second.500'>
          <MenuItem onClick={handleClose} _hover={{bg: "menuItem.200"}} _focus={{bg: "menuItem.200"}}>.app</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: "menuItem.200"}} _focus={{bg: "menuItem.200"}}>.exe</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: "menuItem.200"}} _focus={{bg: "menuItem.200"}}>.deb</MenuItem>
          <MenuItem onClick={handleClose} _hover={{bg: "menuItem.200"}} _focus={{bg: "menuItem.200"}}>docker</MenuItem>
        </MenuList>
      </Menu> */}
    </ButtonGroup>
  )
})