import octokit from './octokit';
import { ContentsQuery } from '../types';

const endPoint = {
  getSearchIssues: 'GET /search/issues',
  getSearchRepositories: 'GET /search/repositories',
};

export async function getRepository(props: ContentsQuery) {
  const { query, per_page, page } = props;

  const searchResult = await octokit.request(endPoint.getSearchRepositories, {
    q: query,
    per_page,
    page,
  });

  return searchResult;
}

export async function getIssue(props: ContentsQuery) {
  const { query, per_page, page } = props;

  const searchResult = await octokit.request(endPoint.getSearchIssues, {
    q: query,
    per_page,
    page,
  });

  return searchResult;
}
