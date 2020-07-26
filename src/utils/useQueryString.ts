import { useSafeWindow } from 'use-safe-window';

interface IQuery {
  [key: string]: string;
}

export default function useQueryString(): IQuery {
  const currentLink = useSafeWindow((window) => window.location.href);

  if (!currentLink?.includes('?')) {
    return {};
  }
  const queryString = currentLink.split('?')[1];
  let query: IQuery = {};
  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (let pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
    const pair = pairs[pairIndex].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
