<script lang="typescript">
  import { TWITTER } from "../types";
  import ProfileImage from "./ProfileImage.svelte";
  const type = TWITTER;
</script>

<div>
  <ProfileImage {type} />
</div>
