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
        elevation: 0,
        style: {
          borderRadius: 16,
          boxShadow: 'none',
          background: '#f7f7f7eb',
          overflow: 'hidden',
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
