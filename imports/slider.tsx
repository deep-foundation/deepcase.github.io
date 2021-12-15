import React, { useRef, useCallback, useMemo } from 'react'
import { useGesture } from 'react-use-gesture'
import { useSprings, a } from 'react-spring'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: { 
    position: 'relative', 
    height: '100%', 
    width: '100%', 
  },
  item: { 
    marginRight: '2rem',
    position: 'absolute', 
    height: '100%', 
    willChange: 'transform' 
  },
})

interface IPropertiesSlider {
  items?: any; 
  width?: number; 
  visible?: number; 
  style?: any;
  children: any;
}

export const Slider = React.memo(({ items, width = 600, style, children }:IPropertiesSlider) => {
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [items])
  const getPos = useCallback((i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx), [idx])
  const [springs, api] = useSprings(items.length, (i) => ({ x: (i < items.length - 1 ? i : -1) * width }))
  const prev = useRef([0, 1]);
  const ref = useRef<HTMLInputElement>();

  const _items = useMemo(() => ([...items]), [items]);

  const runSprings = useCallback(
    (y, vy) => {
      const _ref = ref?.current;
      const visibleCount = Math.floor((_ref?.offsetWidth / width) * 1);
      const firstVis = idx(Math.floor(y / width) % _items.length)
      const firstVisIdx = vy < 0 ? _items.length - visibleCount - 1 : 1;
      api.start((i) => {
        const position = getPos(i, firstVis, firstVisIdx)
        const prevPosition = getPos(i, prev.current[0], prev.current[1])
        const rank = firstVis - (y < 0 ? _items.length : 0) + position - firstVisIdx
        const configPos = vy > 0 ? position : _items.length - position
        return {
          x: (-y % (width * _items.length)) + width * rank,
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
          config: { tension: (1 + _items.length - configPos) * 100, friction: 30 + configPos * 40 }
        }
      })
      prev.current = [firstVis, firstVisIdx]
    },
    [idx, getPos, width, api, _items.length]
  )

  const wheelOffset = useRef(0)
  const dragOffset = useRef(0)
  const bind = useGesture({
    onDrag: ({ offset: [x], vxvy: [vx] }) => vx && ((dragOffset.current = -x), runSprings(wheelOffset.current + -x, -vx)),
    onWheel: ({ offset: [, y], vxvy: [, vy] }) => vy && ((wheelOffset.current = y), runSprings(dragOffset.current + y, vy))
  })
  const classes = useStyles();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100%', top: 0, left: 0, width: '100%' }}>
      <div ref={ref} {...bind()} className={classes.container} style={{ ...style, position: 'absolute', height: 274, top: 0, left: '-50%', width: '200%' }}>
        {springs.map(({ x }, i) => (
          <a.div key={i} className={classes.item} style={{ width, x }} children={children(items[i], i)} />
        ))}
      </div>
    </div>
  )
})

