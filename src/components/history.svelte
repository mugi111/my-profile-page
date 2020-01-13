<script>
  import Octokit from "@octokit/rest";

  console.log("history");
  const octokit = new Octokit();
  octokit.repos.listReleases({
    owner: "mugi111",
    repo: "my-profile-page",
  }).then((res) => {
    console.log(res);
  })
</script>