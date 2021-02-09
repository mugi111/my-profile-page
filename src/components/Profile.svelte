<script lang="typescript">
  import { snsHover } from "../stores";
  import ProfileImage from "./ProfileImage.svelte";
  import SnsButtons from "./SnsButtons.svelte";
</script>

<div>
  <ProfileImage type={$snsHover} />
  <SnsButtons />
</div>
