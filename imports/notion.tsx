import { Text } from '@chakra-ui/react';
import useAxios from 'axios-hooks';
import { NotionRenderer } from "react-notion";

export function NotionPage({ page }: { page: string }) {
  // const [{ data: notionPage, loading, error }, refetch] = useAxios(`/${page}.json`);

  return (<>
    <Text>
      {!loading && <NotionRenderer blockMap={notionPage} />}
    </Text>
  </>)
};
