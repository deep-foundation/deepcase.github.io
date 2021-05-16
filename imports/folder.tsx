import React, { useRef, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { useSpring, animated } from 'react-spring';
import { ButtonBase, makeStyles, Paper, Popover } from '@material-ui/core';

export function Folder({
  children,
  content,
  ...props
}: {
  children: any;
  content?: any;
  [prop: string]: any;
}) {
  const [anchor, setAnchor] = useState<any>(null);

  return (<>
    <Popover
      open={!!anchor}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      onClose={() => setAnchor(null)}
      PaperProps={{
        style: {
          borderRadius: 16,
        },
      }}
    >
      {content}
    </Popover>
    <span onClick={e => setAnchor(e.currentTarget)}>
      {children}
    </span>
  </>);
};
