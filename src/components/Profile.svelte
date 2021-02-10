<script>
  import { snsHover } from "../stores";
  import ProfileAbout from "./ProfileAbout.svelte";
  import ProfileImage from "./ProfileImage.svelte";
  import SnsButtons from "./SnsButtons.svelte";
  import TechButtons from "./TechButtons.svelte";
</script>

<div class="profile-container">
  <ProfileImage type={$snsHover} />
  <ProfileAbout />
  <SnsButtons
    twitterLink="https://twitter.com/mg111_"
    facebookLink="https://www.facebook.com/takumi.hirunuma"
    instagramLink="https://www.instagram.com/mgfm1001/"
  />
  <TechButtons
    githubLink="https://github.com/mugi111"
    npmLink="https://www.npmjs.com/~mugi111"
  />
</div>

<style>
  .profile-container {
    text-align: center;
  }
</style>
