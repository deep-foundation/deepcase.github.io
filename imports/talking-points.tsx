import Chance from 'chance';
import jquery from 'jquery';
import random from 'lodash/random';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { a } from 'react-spring';
import { Box, useMediaQuery } from './framework';


const chance = new Chance();


const classes = {
  talkingPoint: {
    fontSize: 'calc(9px + 0.3vmax)',
    lineHeight: 'calc(1.25em + 0.5vmax)',
    fontFamily:  "'Zen Kaku Gothic Antique', sans-serif",
    textTransform: 'uppercase',
    color: '#6e6e6e',
    height: '100%',
  },
  active: {
    opacity: 1,
    color: '#EAEAEA',
    fontSize: 'calc(15px + 1.9vmax)',
  },
};

const root = {
  position: 'relative',
};
const mainTalkingPoints = {
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  top: 0, left: 0,
  opacity: 0,
};
const flyingLetter = {
  position: 'absolute',
  top: 0, left: 0,
  width: '100%', height: '100%',
};
const mainTalkingPoint = {
  padding: '10rem', // HEIGHT
  textAlign: 'center',
  opacity: 1,
  fontSize: 'calc(22px + 1.9vmax)',
  lineHeight: 'calc(1.45em + 0.5vmax)',
  fontFamily:  "'Zen Kaku Gothic Antique', sans-serif",
  color: 'light',
  textTransform: 'uppercase',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  top: 0, left: 0,
  width: '100%',
};

export const TalkingPoints = React.memo(({
  refScrollContainer,
}: {
  refScrollContainer: any;
}) => {
  const [ index, setIndex ] = useState(-1);
  const enabledRef = useRef(true);
  const { t } = useTranslation();

  const wordsRef = useRef<any>();
  const flyingLetterRef = useRef<any>();

  const calcWordPosition = useCallback(function calcWordPosition(si, li) {
    if (!wordsRef.current || !flyingLetterRef.current) return { left: 0, top: 0 };
    const e = jquery(wordsRef?.current).children(`div:nth-child(${si + 1})`).children(`div`).children(`div`).children(`span:nth-child(${li + 1})`)[0]?.getBoundingClientRect();
    const a = flyingLetterRef.current.getBoundingClientRect();
    const p = jquery(flyingLetterRef.current).children(`div:nth-child(${si + 1})`)[0].getBoundingClientRect();
    
    return {
      left: (e.left / a.width) + 0.05, 
      top: ((e.top - a.top) / a.height),
      // top: ((e.top / a.height) - (e.height / a.height) - 0.3)
    };
  }, []);

  const list = useMemo(() => [
    { text: t('points--backend'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: (i + 1.5) / (arr.length - 1), top: (chance.weighted([0.8, 0.85, 0.9, 0.92, 0.95, 0.97], [1, 5, 10, 20, 40, 50])) };
        });
      }
    } },
    { text: t('points--no-more-refactoring'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
    
    { text: t('points--supports-all-code'), formula: (si, ci) => {
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
  
    { text: t('points--flexible-system'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
  
    { text: t('points--launch-anywhere'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    } },
  
  
    { text: t('points--all-stages-on-single-platform'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0.6, 1, true), top: random(0, 1, true) };
        });
      }
    } },
    { text: t('points--business-logic'), formula: (si, ci) => {
      if (ci === si) {
        return list[si].text.split('').map((l, i, arr) => ({ content: l, ...calcWordPosition(si, i) }));
      } else {
        return list[si].text.split('').map((l, i, arr) => {
          return { content: l, left: random(0, 1, true), top: random(0, 1, true) };
        });
      }
    }  },
    { text: t("points--data-management"), biggest: true, formula: (si, ci) => {
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

  useEffect(() => {
    const action = () => {
      if (enabledRef.current) {
        setIndex((index) => {
          return index == list.length - 1 ? 0 : index + 1;
        });
      }
    };
    action();
    const interval = setInterval(action, 3000);
    return () => {
      clearInterval(interval);
    };
  },[]);

  const xlUp = useMediaQuery('min-width: 1620px');
  const down1024 = useMediaQuery('max-width: 1025px');

  return(<Box as='section' sx={root} onClick={() => {
    enabledRef.current = !enabledRef.current;
  }}>
      <Box sx={flyingLetter}  ref={flyingLetterRef}>
        {list2.map((l, i1) => {
          // @ts-ignore
          return <div key={i1} style={{ ...classes.talkingPoint, ...(index == i1 ? classes.active : {}) }}>{l.map((item, i) => {
            return <div key={i} style={{
              position: 'absolute',
              left: `${(item.left * 89)}vw`,
              top: `${item.top * (index === i1 ? 100 : 500)}%`,
              transition: `all ${1}s ease`,
            }}>{item.content}</div>
          })}</div>
        })}
      </Box>
      <Box sx={mainTalkingPoints} ref={wordsRef}>
        {list2.map((l, i) => (
          <a.div key={i} style={{
            position: list[i].biggest ? 'static' : 'absolute',
            width: '100%', height: '100%',
            top: 0,
            left: 0,
            // transition: 'all 1s ease',
          }}
        >
            <Box sx={mainTalkingPoint} position={list[i].biggest ? 'static' : 'absolute'}>
              <div>
                {l.map((item, i) => {
                return <span key={i}>{item.content}{item.content === ' ' ? <>&nbsp;</> : ''}</span>
              })}
              </div>
            </Box>
          </a.div>
        ))}
      </Box>
    </Box>
  )
})