<script lang="typescript">
  import { AvatarType } from "../types";
  import ProfileImage from "./profile-image.svelte";
  const type: AvatarType = AvatarType.twitter;
</script>

<div>
  <ProfileImage {type} />
</div>
