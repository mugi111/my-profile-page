<script>
  import { snsHover } from "../stores";
  import ProfileImage from "./ProfileImage.svelte";
  import SnsButtons from "./SnsButtons.svelte";
</script>

<div class="profile-container">
  <ProfileImage type={$snsHover} />
  <SnsButtons />
</div>
