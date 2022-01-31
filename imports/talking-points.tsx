import Chance from 'chance';
import cn from 'classnames';
import jquery from 'jquery';
import random from 'lodash/random';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { a } from 'react-spring';
import { makeStyles, useMediaQuery } from './framework';

const chance = new Chance();

const useStyles = makeStyles(theme => ({
  containerListTalkingPoints: {
    position: 'relative',
    height: '100%',
  },
  mainTalkingPoints: {
    height: '100%', 
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0, left: 0,
    opacity: 0,
  },
  leftColumnTalkingPoints: {
    position: 'relative',
    height: '60vh',
    '@media(min-width: 1620px)': {
      height: '65vh',
    }
  },
  mainTalkingPoint: {
    opacity: 0,
    fontSize: 'calc(22px + 1.9vmax)',
    lineHeight: 'calc(1.45em + 0.5vmax)',
    fontFamily:  "'Comfortaa', 'sans-serif'",
    color: '#fff',
    textTransform: 'uppercase',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%', height: '100%',
    top: 0, left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  talkingPoint: {
    textAlign: 'right',
    fontSize: 'calc(9px + 0.3vmax)',
    lineHeight: 'calc(1.25em + 0.5vmax)',
    fontFamily:  "'Comfortaa', 'sans-serif'",
    textTransform: 'uppercase',
    color: '#fff',
    opacity: 0.2,
    height: '100%',
  },
  active: {
    opacity: 1,
    fontSize: 'calc(22px + 1.9vmax)',
  }
}))

export const TalkingPoints = React.memo(({
  refScrollContainer,
}: {
  refScrollContainer: any;
}) => {
  const classes = useStyles();
  const [ index, setIndex ] = useState(-1);
  const enabledRef = useRef(true);

  useEffect(() => {
    const action = () => {
      if (enabledRef.current) {
        setIndex((index) => {
          let target = index;
          do {
            target = random(0, list.length - 1);
          } while (target == index);
          return target;
        });
      }
    };
    action();
    const interval = setInterval(action, 3000);
    return () => {
      clearInterval(interval);
    };
  },[]);

  const mainTalkingPointRef = useRef<any>();
  const leftColumnTalkingPointsRef = useRef<any>();

  const calcWordPosition = useCallback(function calcWordPosition(si, li) {
    if (!mainTalkingPointRef.current || !leftColumnTalkingPointsRef.current) return { left: 0, top: 0 };
    const e = jquery(mainTalkingPointRef?.current).children(`div:nth-child(${si + 1})`).children(`div`).children(`div`).children(`span:nth-child(${li + 1})`)[0]?.getBoundingClientRect();
    const a = leftColumnTalkingPointsRef.current.getBoundingClientRect();
    const p = jquery(leftColumnTalkingPointsRef.current).children(`div:nth-child(${si + 1})`)[0].getBoundingClientRect();
    return {
      left: (e.left / a.width) + 0.05, 
      top: ((e.top / a.height))
      // top: ((e.top / a.height) - (e.height / a.height) - 0.3)
    };
  }, []);

  const list = useMemo(() => [
    { text: 'Готовый к использованию backend', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: (i + 1.5) / (arr.length - 1), top: (chance.weighted([0.8, 0.85, 0.9, 0.92, 0.95, 0.97], [1, 5, 10, 20, 40, 50])) };
        });
      }
    } },
    { text: 'Без рефакторинга', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
    
    { text: 'Поддержка любых языков и стеков', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          // return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
          const o = ((i + index) % 5);
          return { content: l, left: (i + 2) / (arr.length - 0.5), top: 0.06 + (o * 0.03) };
        });
      }
    } },
  
    { text: 'Гибкая система правил и прав', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
  
    { text: 'Среда запускающаяся везде', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
  
  
    { text: 'Вся разработка ведется в одном приложении', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0.6, 1, true), top: random(0, 1, true) };
        });
      }
    } },
    { text: 'Бизнес логика и сценарии в одном месте', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    }  },
    { text: 'Готовая среда хранения и работы с данными', formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
  ], []);

  const list2 = useMemo(() => {
    return list.map((sv, si) => {
      return sv.formula(si, index);
    });
  }, [index]);

  const xlUp = useMediaQuery('min-width: 1620px');
  const down1024 = useMediaQuery('max-width: 1025px');

  return(<div className={classes.containerListTalkingPoints} onClick={() => {
    enabledRef.current = !enabledRef.current;
  }}>
      <div className={classes.leftColumnTalkingPoints}  ref={leftColumnTalkingPointsRef}>
        {list2.map((l, i) => {
          return <div key={i} className={cn(classes.talkingPoint, index == i && classes.active)}>{l.map((item, i) => {
            return <div key={i} style={{
              position: 'absolute',
              left: `${(item.left * 89)}vw`,
              top: `${item.top * (xlUp ? 65 : 50)}vh`,
              transition: `all ${1}s ease`,
            }}>{item.content}</div>
          })}</div>
        })}
      </div>
      <div className={classes.mainTalkingPoints} ref={mainTalkingPointRef}>
        {list2.map((l, i) => (
          <a.div key={i} style={{
            position: 'absolute',
            width: '100%', height: '100%',
            top: 0,
            left: 0,
            // transition: 'all 1s ease',
          }}
          >
            <div className={classes.mainTalkingPoint}><div>
              {l.map((item, i) => {
              return <span key={i}>{item.content}{item.content === ' ' ? <>&nbsp;</> : ''}</span>
            })}
            </div></div>
          </a.div>
        ))}
      </div>
    </div>
  )
})