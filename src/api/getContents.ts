import octokit from './octokit';

//TODO:any type 설정하기
export async function getRepository(props: any) {
  const { query, per_page, page } = props;

  const searchResult = await octokit.request('GET /search/repositories', {
    q: query,
    per_page,
    page,
  });

  return searchResult;
}

export async function getIssue(props: any) {
  const { query, per_page, page } = props;

  const searchResult = await octokit.request('GET /search/issues', {
    q: query,
    per_page,
    page,
  });

  return searchResult;
}
