<script>
  import Octokit from "@octokit/rest";

  let releaseLog = []
  const octokit = new Octokit();
  octokit.repos.listReleases({
    owner: "mugi111",
    repo: "my-profile-page",
  }).then((res) => {
    if (res.status === 200) {
      releaseLog = res.data.map((data) => {
        const date = new Date(data.created_at);
        return {tag: data.tag_name, name: data.name, body: data.body, year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
      })
    }
  })
</script>

<h2 class="title-history">History</h2>
{#each releaseLog as release}
  <span class="history-text">{release.year}/</span>
  <span class="history-text">{release.month}/</span>
  <span class="history-text">{release.day}</span>
  <span class="history-text">{release.tag}</span>
  <span class="history-text">{release.body}</span>
{/each}

<style>
  .title-history {
    color: silver;
    font-size: 2em;
    border-bottom: 3px dotted blue;
  }

  .history-text {
    font-weight: 600;
    text-align: left;
    color: silver;
  }
</style>