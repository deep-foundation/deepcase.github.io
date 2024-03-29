import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from "next/dynamic";
import { useScroll } from "framer-motion";

const TypeWriterEffect: any = dynamic(() => import('react-typewriter-effect').then(m => m.default), { ssr: false });


export const TypistEffect = React.memo(({
  text,
  textAlign = 'left',
}:{
  text: string;
  textAlign?: any;
}) => {
  const { t } = useTranslation();
  const content = t(text);

  return (<>
    {[<TypeWriterEffect
      key={content}
      textStyle={{
        fontFamily: 'Zen Kaku Gothic Antique',
        color: '#3F3D56',
        fontWeight: 500,
        fontSize: 'calc(1rem + 3vmin)',
        textAlign: textAlign,
      }}
      cursorColor="#3F3D56"
      hideCursorAfterText={true}
      text={content}
    />]}
  </>)
})