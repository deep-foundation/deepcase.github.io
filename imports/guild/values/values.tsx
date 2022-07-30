// import React, { useState } from 'react';

// import { Grid } from '../../framework';

// const useStyle = {
//   root: {
//     margin: '32px 0',
//     padding: '0 200px',
//     overflow: 'hidden',
//   },
//   items: {
//     transition: 'all 1s ease'
//   }
// };

// const items = [
//   {
//     title: require('../../images/1-1.jpg'),
//     text: 'освещение кухонной рабочей зоны от Fulogy'
//   },
//   {
//     title: require('../../images/1-2.jpg'),
//     text: 'освещение кухонной рабочей зоны от Fulogy'
//   },
//   {
//     title: require('../../images/1-3.jpg'),
//     text: 'освещение кухонной рабочей зоны от Fulogy'
//   },
//   {
//     title: require('../../images/1-4.jpg'),
//     text: 'освещение кухонной рабочей зоны от Fulogy'
//   },
// ];

// export const Slider = React.memo<any>(() => {
//   const[index, setIndex] = useState(4);

//   const leftSize = index;
//   const rightSize = items.length - (index + 1);
//   const diff = Math.abs(leftSize - rightSize);
  
//   const lastRightIndex = (items.length - 1) - (diff / 2);
//   const lastLeftIndex = (diff / 2);

//   const onPrevClick = () => {
//     setIndex(index>0 ? index - 1 : items.length - 1);
//   };

//   const onNextClick = () => {
//     setIndex(items.length - 1 == index ? 0 : index + 1);
//   };

//   return(<>
//       <Grid justify='center' alignItems='stretch' className={classes.root}>
//         <Grid item md={6}>
//         <Grid item md={7} style={{position: 'relative', height: '40vw'}}>
//           {items.map((item, _i) => {
//             const i = rightSize < leftSize && _i < lastLeftIndex
//             ? (items.length) + _i :
//             rightSize > leftSize && _i > lastRightIndex
//             ? _i - lastRightIndex - lastLeftIndex - 1 :
//             _i;
//             return <div key={_i} className={classes.items}
//               style={{
//                 position: 'absolute',
//                 height: '100%',
//                 width: '100%',
//                 transform: `translateX(${(i - index)*20}%) scale(${(items.length - (i - index < 0 ? index - i : i - index))/10})`,
//                 zIndex: items.length - (i - index < 0 ? index - i : i - index),
//                 filter: `opacity(${(items.length - (i - index < 0 ? index - i : i - index))*11}%)`,
//               }}>
//               <ChildrenResponsive>
//                 <img src={item.src} alt={item.alt} style={{width: '100%'}} />
//               </ChildrenResponsive>
//             </div>
//           })}
//           </Grid>
//         </Grid>
//         <Grid container justify='center' alignItems='center'>
//           <Grid item>
//             <IconButton onClick={onPrevClick}>
//               <ChevronLeftRounded />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton onClick={onNextClick}>
//               <ChevronRightRounded />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </Grid>
//     </>
//   )
// })
export {};