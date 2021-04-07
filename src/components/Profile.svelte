<script>
  import { snsHover } from "../stores";
  import ProfileAbout from "./ProfileAbout.svelte";
  import ProfileImage from "./ProfileImage.svelte";
  import ProfileLink from "./ProfileLink.svelte";
</script>

<div class="profile-container">
  <ProfileImage type={$snsHover} />
  <ProfileAbout />
  <ProfileLink
    twitterLink="https://twitter.com/mg111_"
    facebookLink="https://www.facebook.com/takumi.hirunuma"
    instagramLink="https://www.instagram.com/mgfm1001/"
    githubLink="https://github.com/mugi111"
    npmLink="https://www.npmjs.com/~mugi111"
  />
</div>

<style>
  .profile-container {
    text-align: center;
    padding: 10px;
    background-color: var(--white2);
  }
</style>
