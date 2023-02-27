import { Octokit } from '@octokit/rest';
import { githubToken } from '../../.env/env';

const octokit = new Octokit({
  auth: githubToken,
});

export default octokit;
