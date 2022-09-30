import React from 'react';
import { IconContext } from 'react-icons/';
import { BsFillPlayFill } from 'react-icons/bs';
import { Box } from '../framework';


const PlayIcon = React.memo<any>(() => {
  return (<IconContext.Provider value={{ color: "#008fcc", size: '4.5rem' }}>
      <div>
        <BsFillPlayFill />
      </div>
    </IconContext.Provider>
  )
})

export const DeepCasePlayButton =  React.memo<any>(() => {

  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#19202B",
        cursor: "pointer",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: "1.8rem"
      }}
    >
      <PlayIcon />
    </Box>
  );
})