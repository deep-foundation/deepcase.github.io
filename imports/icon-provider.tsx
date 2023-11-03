import { memo } from "react";
import { IconContext } from "react-icons";

export const IconProvider = memo(function IconProvider({
  icon, 
  color, 
  size = '1em',
  ...props
}:{
  icon?:any; 
  color?: string;
  size?: string;
  [key:string]: any;
}) {
  return (<IconContext.Provider value={{ color: color, size: size, ...props }}>
      {icon}
    </IconContext.Provider>
  )
})