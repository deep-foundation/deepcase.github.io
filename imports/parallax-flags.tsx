import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import cn from 'classnames';
import React, { useRef } from "react";
import { makeStyles, Typography } from '@material-ui/core';
import { Flag } from "./flag";


const useStyles = makeStyles(theme => ({
  containerParallax: {
    position: 'relative',
    width: '100%', 
    height: '100%', 
    background: 'transparent',
  },
  relativePointParallax: {
    position: 'relative',
    height: 0,
    width: '100%',
  },
  absoluteLeftFlagContainerParallax: {
    position: 'absolute',
    top: 0, left: 0,
    transform: 'translate(10vw, -50%)',
  },
  absoluteRightFlagContainerParallax: {
    position: 'absolute',
    top: 0, right: 0,
    transform: 'translate(-10vw, -50%)',
  },
  typography: {
    color: '#ffffffba',
  },
  textParallax: {
    width: '45vw', 
    height: '30vh',
    position: 'absolute',
    top: 0, 
    transform: 'translate(calc(100vw - 45vw - 10vw), -50%)',
  },
  
  textLeftParallax: {
    width: '45vw', 
    height: '30vh',
    opacity: 0.85,
    position: 'absolute',
    top: 0, 
    transform: 'translate(10vw, -50%)',
  },
  flagParallax: {
    height: '30vh',
    width: '35vw',
    maxWidth: '25rem', 
  },
  textShapePolygon: {
    // width: '100%', 
    // height: '30vh',
    // opacity: 0.85,
    // position: 'absolute',
    // top: 0, 
    // transform: 'translateY(-50%)',
  },
}))

export const ParallaxFlags = React.memo(() => {
  const parallaxRef = useRef();

  const classes = useStyles();

  // return null;
  // ЗДЕСЬ
  // Если добавить этот return - тем самым оборвать функцию и не дать ей сделать что ниже - то ошибки нет. Ошибка тут.
  // Я удалил все флаги кроме первого, ошибка осталась. Я не стал дебажить дальше, но если нужна помощь поймать этого гада,
  // Пожалуйста скажи сразу, и мы его вместе замочим. Подозреваю противная ошибка, я вот сейчас не знаю куда ее копать если честно.
  // Посмотрим вместе?§

  return (<>
        <ParallaxLayer offset={1.9} speed={0.1}>
          <div className={classes.relativePointParallax}>
            <div className={classes.textParallax}>
              <Typography variant='body1' align='right' className={classes.typography}>
                Представьте себе некоторое абстрактное пространство, в котором возможны, изначально, только операции со связями. С Deep.Case можно находится внутри данных, так, будто бы они дополняют ваше собственное мышление. Закреплять связи в пространстве вокруг себя, и автоматизировать их поведение. Пространство Deep.Case может быть использовано аналитиками, как рабочее пространство для данных, или как пространство сборки, администрирования, использования и мониторинга состояния проекта. Это расширяемая среда построенная на d3/threejs/AFrame.
              </Typography>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.35} factor={1}>
          <div className={classes.relativePointParallax}>
            <div className={classes.absoluteLeftFlagContainerParallax}>
              <Flag
                className={classes.flagParallax}
                icon1={<BathtubIcon />}
                icon2={<BathtubIcon color='secondary' />}
                icon3={<BathtubIcon color='error' />}
                title='Операционное пространство'
                description='Больше нет разницы между вашим рабочим столом и пространством вашего мышления'
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.55} speed={0.1}>
          <div className={classes.relativePointParallax}>
            <div className={classes.textLeftParallax}>
              <Typography variant='body1' className={classes.typography}>
                С одной стороны, Deep это система реализующая идеи Data Driven Development, так как в центре внимания ассоциативное хранимое пространство данных. С другой стороны, эти данные атомарны и представлены минимальной единей хранения смысла - ассоциативной связью, что позволяет описывать ею, любые семантические, смысловые, логические, абстрактные и т. д. конструкции в едином диалекте операций над памятью. Вместо того что бы создавать идеальный язык, или идеальную базу данных, Deep это идеальная среда доступа к ассоциативному подходу, с подменяемым ядром. Это значит в ней может быть использовано множество разных конкурирущих реализаций баз данных и языковых api доступа.
              </Typography>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.55} speed={0.35}>
          <div className={classes.relativePointParallax}>
            <div className={classes.absoluteRightFlagContainerParallax}>
              <Flag
                className={classes.flagParallax}
                icon1={<BeachAccessIcon />}
                icon2={<BeachAccessIcon color='secondary' />}
                icon3={<BeachAccessIcon color='error' />}
                title='Новая парадигма программирования'
                description='Мы реализовали язык без семантической и смысловой предрасположенности'
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0.1}>
          <div className={classes.relativePointParallax}>
            <div className={classes.textParallax}>
              <Typography variant='body1' align='right' className={classes.typography}>
                В Deep код хранится в связях и может обработать то или иное событие. Например можно реагировать на события как у связей конкретного типа, так и указывая строгие селекторы по диапазонам деревьям с WHERE-like синтаксисом и поддержкой join/traverse механик. Код может быть написан на любом языке, для которого создан ExecutionProvider - это Docker Image согласно нашему стандартному API, в рамках которого запускается код связанный с ним в базе. Очень скоро мы добавим официальную поддержку in-transaction обработчиков, а так-же системы для запуска кода на удаленных машинах в т. ч. на микроконтроллерах.
              </Typography>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0.35}>
          <div className={classes.relativePointParallax}>
            <div className={classes.absoluteLeftFlagContainerParallax}>
              <Flag
                className={classes.flagParallax}
                icon1={<EmojiSymbolsIcon />}
                icon2={<EmojiSymbolsIcon color='secondary' />}
                icon3={<EmojiSymbolsIcon color='error' />}
                title='Любые языки и стеки'
                description='Вы можете написать ExecutionProvider для любых языков программирования'
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1}>
          <div className={classes.relativePointParallax}>
            <div className={classes.textLeftParallax}>
              <Typography variant='body1' className={classes.typography}>
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
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.35}>
          <div className={classes.relativePointParallax}>
            <div className={classes.absoluteRightFlagContainerParallax}>
              <Flag
                className={cn(classes.flagParallax)}
                icon1={<AppleIcon />}
                icon2={<AppleIcon color='secondary' />}
                icon3={<AppleIcon color='error' />}
                title='Семантическая система прав'
                description='Всегда именно та система прав, которую вы хотите'
              />
            </div>
          </div>
        </ParallaxLayer>
      </>
  )
})