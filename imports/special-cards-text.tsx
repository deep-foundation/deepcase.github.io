import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import cn from 'classnames';
import React, { useRef } from "react";
import { makeStyles, Typography, useMediaQuery } from './framework';
import { SpecialCard } from "./special-card";


const useStyles = makeStyles(theme => ({
  containerSpecialCards: {
    display: 'grid',
    gridColumn: '2 / 8',
    rowGap: '6rem',
    '@media(max-width: 1420px)': {
      gridColumn: '1 / 9',
      padding: '0 2rem',
      boxSizing: 'border-box',
    },
    '@media(max-width: 900px)': {
      rowGap: '14rem',
    }
  },
  
  gridCardLeft: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '23rem 1fr',
    columnGap: '4rem',
    alignItems: 'baseline',
    '@media(max-width: 1420px)': {
      alignItems: 'center',
    },
    '@media(max-width: 900px)': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  },
  gridCardRight: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 23rem',
    columnGap: '4rem',
    alignItems: 'baseline',
    '@media(max-width: 1420px)': {
      alignItems: 'center',
    },
    '@media(max-width: 900px)': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column-reverse',
    }
  },
  
  typography: {
    color: '#ffffffba',
  },
  // shapePolygonLeft: {
  //   float: 'left',
  //   height: '100%',
  //   shapeOutside: 'polygon(0 100%, 100% 0, 0 0)',
  //   clipPath: 'polygon(0 100%, 100% 0, 0 0)',
  //   width: '50%',
  // },
  // shapePolygonRight: {
  //   float: 'right',
  //   height: '100%',
  //   shapeOutside: 'polygon(0 0, 100% 100%, 100% 0)',
  //   clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
  //   width: '50%',
  // },
  // textShapePolygon: {
  //   width: '100%', 
  //   height: '30vh',
  //   opacity: 0.85,
  //   position: 'absolute',
  //   top: 0, 
  //   transform: 'translateY(-50%)',
  // },

  specialCardsTablet: {
    '@media(max-width: 900px)': {
      width: '20rem',
    }
  }
}))

export const SpecialCardsText = React.memo(() => {

  const classes = useStyles();
  const max900 = useMediaQuery('@media(max-width: 900px');

  return (<div className={classes.containerSpecialCards}>
      
          <div className={classes.gridCardLeft}>
            
              {/* <div className={classes.shapePolygonLeft} />
              <div className={classes.shapePolygonRight} /> */}
            <div className={classes.specialCardsTablet}>
              <SpecialCard
                icon1={<BathtubIcon />}
                icon2={<BathtubIcon color='secondary' />}
                icon3={<BathtubIcon color='error' />}
                title='Операционное пространство'
                description='Больше нет разницы между вашим рабочим столом и пространством вашего мышления'
              />
            </div>
            <Typography variant='body1' align={max900 ? 'justify' : 'center'} className={classes.typography}>
              Представьте себе некоторое абстрактное пространство, в котором возможны, изначально, только операции со связями. С Deep.Case можно находится внутри данных, так, будто бы они дополняют ваше собственное мышление. Закреплять связи в пространстве вокруг себя, и автоматизировать их поведение. Пространство Deep.Case может быть использовано аналитиками, как рабочее пространство для данных, или как пространство сборки, администрирования, использования и мониторинга состояния проекта. Это расширяемая среда построенная на d3/threejs/AFrame.
            </Typography>
          </div>

      
          <div className={classes.gridCardRight}>
            <Typography variant='body1' align={max900 ? 'justify' : 'center'} className={classes.typography}>
              С одной стороны, Deep это система реализующая идеи Data Driven Development, так как в центре внимания ассоциативное хранимое пространство данных. С другой стороны, эти данные атомарны и представлены минимальной единей хранения смысла - ассоциативной связью, что позволяет описывать ею, любые семантические, смысловые, логические, абстрактные и т. д. конструкции в едином диалекте операций над памятью. Вместо того что бы создавать идеальный язык, или идеальную базу данных, Deep это идеальная среда доступа к ассоциативному подходу, с подменяемым ядром. Это значит в ней может быть использовано множество разных конкурирущих реализаций баз данных и языковых api доступа.
            </Typography>
            <div className={classes.specialCardsTablet}>
              <SpecialCard
                icon1={<BeachAccessIcon />}
                icon2={<BeachAccessIcon color='secondary' />}
                icon3={<BeachAccessIcon color='error' />}
                title='Новая парадигма программирования'
                description='Мы реализовали язык без семантической и смысловой предрасположенности'
              />
            </div>
          </div>

      
          <div className={classes.gridCardLeft}>
            <div className={classes.specialCardsTablet}>
              <SpecialCard
                icon1={<EmojiSymbolsIcon />}
                icon2={<EmojiSymbolsIcon color='secondary' />}
                icon3={<EmojiSymbolsIcon color='error' />}
                title='Любые языки и стеки'
                description='Вы можете написать ExecutionProvider для любых языков программирования'
              />
            </div>
            <Typography variant='body1' align={max900 ? 'justify' : 'center'} className={classes.typography}>
              В Deep код хранится в связях и может обработать то или иное событие. Например можно реагировать на события как у связей конкретного типа, так и указывая строгие селекторы по диапазонам деревьям с WHERE-like синтаксисом и поддержкой join/traverse механик. Код может быть написан на любом языке, для которого создан ExecutionProvider - это Docker Image согласно нашему стандартному API, в рамках которого запускается код связанный с ним в базе. Очень скоро мы добавим официальную поддержку in-transaction обработчиков, а так-же системы для запуска кода на удаленных машинах в т. ч. на микроконтроллерах.
            </Typography>
          </div>

          <div className={classes.gridCardRight}>
            <div>
              <Typography variant='body1' align={max900 ? 'justify' : 'center'} className={classes.typography}>
                Больше не нужно описывать программным кодом бизнес логику и ограничения. Теперь можно описать символы операций которые вам нужны в вашем деле, и привязать к ним правила subject (кому) на object (на какие предметы) и action (на какое действие), используя для описания WHERE-like синтаксис позволяющий семантически анализировать ситуацию в момент попытки произведения операции или проверки права. Всегда можно узнать есть ли правила разрешающие выполнение некоторого action или иной операции выполнив gql запрос. Это позволяет полностью вынести бизнес логику из программных решений.
              </Typography>
              <pre>
                <code>
                  {/* {
                    can(where: {
                      object_id: { _eq: 5 },
                      subject_id: { _eq: 165 },
                      action_id: { _eq: 28 },
                    }) {
                      rule_id
                    }
                  } */}
                </code>
              </pre>
            </div>
            <div className={classes.specialCardsTablet}>
              <SpecialCard
                icon1={<AppleIcon />}
                icon2={<AppleIcon color='secondary' />}
                icon3={<AppleIcon color='error' />}
                title='Семантическая система прав'
                description='Всегда именно та система прав, которую вы хотите'
              />
            </div>
            
          </div>
      </div>
  )
})