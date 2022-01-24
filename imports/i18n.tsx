// import { useLocalStore } from '@deepcase/store/local';
// import useInterval from "@use-it/interval";
// import i18n from 'i18next';
// import _ from 'lodash';
// import 'moment/locale/ru';
// import { pluralize as _pluralize } from 'numeralize-ru';
// import React, { useCallback, useEffect, useState } from 'react';
// import { initReactI18next, useTranslation as _useTranslation } from 'react-i18next';
// import { useQuery } from '../deepcase/hasura/use';


// const resources = {
//   ru: {
//     translation: {
      
//     }
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'ru',

//   nsSeparator: true,
//   keySeparator: true,

//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

// function useTranslation(){
//   const r = _useTranslation();
//   const t = useCallback((v, o) => {
//     return r.t(v, { ...o, 'variable-currency-rub': '\u20BD' });
//   }, []);
//   return { ...r, t };
// }

// export { useTranslation };

// export const tnum = (count: number, key: string, t: (key: string) => string) => {
//   return _pluralize(count, t(`${key}-1`), t(`${key}-2`), t(`${key}-5`));
// };

// const I18NDICS = `query I18NDICS($cats: [String!], $updated: timestamptz_comparison_exp) {
//   nodes(where: {
//     type: { _eq: "instance" },
//     key: { _eq: "ru" },
//     last_update: $updated,
//     _and:[{
//       nodes_by_source: {
//         type: { _eq: "of" },
//         key: { _eq: "depends" },
//         target: {
//           type: { _eq: "instance" },
//           id: { _in: $cats }
//         },
//       },
//     },
//     {
//       nodes_by_source: {
//         type: { _eq: "of" },
//         key: { _eq: "depends" },
//         target: {
//           type: { _eq: "prototype" },
//           key: { _eq: "i18n_dictionary" }
//         },
//       },
//     }],
//   }) {
//     id type key json
//   }
// }`;

// export const TranslationProvider = React.memo<any>(function TranslationProvider({
//   categoryIds = ['kq7ypfp7'],
//   language = 'ru',
//   children,
// }: {
//   categoryIds?: string[];
//   language?: string;
//   children?: any;
// }) {
//   const [cache, setCache] = useLocalStore('web-app-ui-i18n', {});
//   const [lastUpdate, setLastUpdate] = useState({ date: new Date('1995-12-17T03:24:00') });
//   const dics = useQuery(I18NDICS, {
//     variables: {
//       cats: categoryIds,
//       updated: { _gt: new Date('1995-12-17T03:24:00') },
//     },
//     skip: true,
//   });
//   const intervalist = async () => {
//     const _c = { ...cache };
//     const last = lastUpdate.date;
//     const q = await dics.refetch({"cats": categoryIds, updated: { _gt: lastUpdate.date } });
//     setLastUpdate({ date: new Date() });
//     if (q?.data?.nodes) {
//       for (let i = 0; i < q?.data?.nodes.length; i++) {
//         _c[q?.data?.nodes[i]?.id] = q?.data?.nodes[i];
//         i18n.addResources('ru', 'translation', q?.data?.nodes[i].json);
//       }
//     }
//     setCache(_c);
//   };
//   useEffect(() => {
//     intervalist();
//     _.forEach(v =>i18n.addResources('ru', 'translation', v.json));
//   }, []);
//   useInterval(intervalist, 10000);
//   return <>
//     {children}
//   </>;
// })

