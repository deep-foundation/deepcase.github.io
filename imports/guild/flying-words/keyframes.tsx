import { keyframes } from '../../framework';

export const anim1 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(-0.1,0,0.00,0,0.00,0.1,0.00,-0.001,0,0,-1,0,0,500,500,1); 
    // matrix3d(0,0,1.00,0,0.00,1,0.00,0.002,-1,0,0,0,300,10,10,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim2 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(0.2,0,0.00,0,0.00,-0.6,0.00,0.001,0,0,-1,0,0,0,1800,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim3 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(0,-1,0.00,0.001,1.00,0,0.00,0.001,0,0,1,0,2000,0,0,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim4 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(-0.1,0,0.00,0,0.00,0.1,0.00,-0.001,0,0,-1,0,0,500,500,1); 
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim5 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(0,-1,0.00,-0.001,1.00,0,0.00,-0.001,0,0,1,0,-2000,0,0,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim6 = keyframes`
  from {
    opacity: 0;
    transform:  matrix3d(-0.1,0,0.00,0,0.00,0.1,0.00,0,0,0,-1,0,0,0,-200,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim7 = keyframes`
  from {
    opacity: 0;
    transform:  matrix3d(-0.05,0,-0.87,-0.001,0.00,0.1,0.00,0,0.87,0,-0.5,0,-1000,0,800,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
export const anim8 = keyframes`
  from {
    opacity: 0;
    transform: matrix3d(0,0,-1.00,0.01,0.00,-1,0.00,0,1,0,0,0,0,-2500,0,1);
  }

  to {
    opacity: 1;
    transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
  }
`;
