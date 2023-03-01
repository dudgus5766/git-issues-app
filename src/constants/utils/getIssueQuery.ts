export function getIssueQuery(repoList) {
  let query = '';
  repoList.forEach(repository => {
    const { repoName, ownerName } = repository;
    query += ` repo:${ownerName}/${repoName}`;
  });

  return query;
}
