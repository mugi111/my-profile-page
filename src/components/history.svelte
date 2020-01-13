<script>
  import Octokit from "@octokit/rest";

  console.log("history");
  const octokit = new Octokit();
  octokit.repos.listReleases({
    owner: "mugi111",
    repo: "my-profile-page",
  }).then((res) => {
    if (res.status === 200) {
      const releaseLog = res.data.map((data) => {
        return {tag: data.tag_name, name: data.name, body: data.body};
      })
    }
  })
</script>