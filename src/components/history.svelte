<script>
  import Octokit from "@octokit/rest";
  import Token from "../token.json";

  console.log("history");
  const octokit = new Octokit({
    auth: Token.gihub,
  });
  octokit.repos.listReleases({
    owner: "mugi111",
    repo: "my-profile-page",
  }).then((res) => {
    console.log(res);
  })
</script>