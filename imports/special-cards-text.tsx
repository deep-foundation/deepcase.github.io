import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import React from "react";
import { Box, Center, Code, Divider, Text, useMediaQuery, VStack, Img } from './framework';
import { SpecialCard } from "./special-card";


const GridCard = React.memo(({
  children, 
  columns = '1fr 25rem', 
  direction = 'column-reverse',
}:{
  children: any; 
  columns?: any;
  direction?: any;
}) => {
  return (<Box sx={{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: columns,
    columnGap: '4rem',
    alignItems: 'baseline',
    '@media(max-width: 1420px)': {
      alignItems: 'center',
    },
    '@media(max-width: 850px)': {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      flexDirection: direction,
    }
  }}>{children}</Box>)
});

export const SpecialCardsText = React.memo(() => {
  const [max850] = useMediaQuery('(max-width: 850px)');

  return (<VStack spacing={{sm: '7rem', lg: '5rem'}}>
      <GridCard columns='25rem 1fr' direction='column'>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/1.png' />}
            // icon2={<BathtubIcon color='secondary' />}
            // icon3={<BathtubIcon color='error' />}
            title='Операционное пространство'
            description='Больше нет разницы между вашим рабочим столом и пространством вашего мышления'
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}} as='div' width='100%'>
          Представьте себе некоторое абстрактное пространство, в котором возможны, изначально, только операции со связями. С Deep.Case можно находится внутри данных, так, будто бы они дополняют ваше собственное мышление. Закреплять связи в пространстве вокруг себя, и автоматизировать их поведение. Пространство Deep.Case может быть использовано аналитиками, как рабочее пространство для данных, или как пространство сборки, администрирования, использования и мониторинга состояния проекта. Это расширяемая среда построенная на d3/threejs/AFrame.
        </Text>
      </GridCard>
      {max850 && <Divider />}

      <GridCard>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          С одной стороны, Deep это система реализующая идеи Data Driven Development, так как в центре внимания ассоциативное хранимое пространство данных. С другой стороны, эти данные атомарны и представлены минимальной единей хранения смысла - ассоциативной связью, что позволяет описывать ею, любые семантические, смысловые, логические, абстрактные и т. д. конструкции в едином диалекте операций над памятью. Вместо того что бы создавать идеальный язык, или идеальную базу данных, Deep это идеальная среда доступа к ассоциативному подходу, с подменяемым ядром. Это значит в ней может быть использовано множество разных конкурирущих реализаций баз данных и языковых api доступа.
        </Text>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/2.png' />}
            // icon2={<BeachAccessIcon color='secondary' />}
            // icon3={<BeachAccessIcon color='error' />}
            title='Новая парадигма программирования'
            description='Мы реализовали язык без семантической и смысловой предрасположенности'
          />
        </Box>
      </GridCard>
      {max850 && <Divider />}

      <GridCard columns='23rem 1fr' direction='column'>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/3.png' />}
            // icon2={<EmojiSymbolsIcon color='secondary' />}
            // icon3={<EmojiSymbolsIcon color='error' />}
            title='Любые языки и стеки'
            description='Вы можете написать ExecutionProvider для любых языков программирования'
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          В Deep код хранится в связях и может обработать то или иное событие. Например можно реагировать на события как у связей конкретного типа, так и указывая строгие селекторы по диапазонам деревьям с WHERE-like синтаксисом и поддержкой join/traverse механик. Код может быть написан на любом языке, для которого создан ExecutionProvider - это Docker Image согласно нашему стандартному API, в рамках которого запускается код связанный с ним в базе. Очень скоро мы добавим официальную поддержку in-transaction обработчиков, а так-же системы для запуска кода на удаленных машинах в т. ч. на микроконтроллерах.
        </Text>
      </GridCard>
      {max850 && <Divider />}

      <GridCard>
        <Box>
          <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
            Больше не нужно описывать программным кодом бизнес логику и ограничения. Теперь можно описать символы операций которые вам нужны в вашем деле, и привязать к ним правила subject (кому) на object (на какие предметы) и action (на какое действие), используя для описания WHERE-like синтаксис позволяющий семантически анализировать ситуацию в момент попытки произведения операции или проверки права. Всегда можно узнать есть ли правила разрешающие выполнение некоторого action или иной операции выполнив gql запрос. Это позволяет полностью вынести бизнес логику из программных решений.
          </Text>
          <Center py='2rem'>
            <Code variant='solid' colorScheme='linkedin' size='full' sx={{borderRadius: '0.175rem', padding: '1rem'}}>
              {`{
                can(where: {
                  object_id: { _eq: 5 },
                  subject_id: { _eq: 165 },
                  action_id: { _eq: 28 },
                }) {
                  rule_id
                }
              }`}
            </Code>
          </Center>
        </Box>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/4.png' />}
            // icon2={<AppleIcon color='secondary' />}
            // icon3={<AppleIcon color='error' />}
            title='Семантическая система прав'
            description='Всегда именно та система прав, которую вы хотите'
          />
        </Box>
        
      </GridCard>
    </VStack>
  )
})