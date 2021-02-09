<script>
  import { snsHover } from "../stores";
  import ProfileImage from "./ProfileImage.svelte";
  import SnsButtons from "./SnsButtons.svelte";
</script>

<div class="profile-container">
  <ProfileImage type={$snsHover} />
  <SnsButtons
    twitterLink="https://twitter.com/mg111_"
    facebookLink="https://www.facebook.com/takumi.hirunuma"
    instagramLink="https://www.instagram.com/mgfm1001/"
  />
</div>
