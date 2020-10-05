<script>
  import { skillModalState, skillDetail } from "../stores.js";
  export let imgSrc;
  export let textTitle;
  export let textBody;
  let src = imgSrc;
  const handleClickTile = () => {
    skillModalState.set(true);
    skillDetail.set({ title: textTitle, body: textBody });
  };
</script>

<style>
  .tile-frame {
    width: 180px;
    height: 180px;
    border-radius: 5px;
    padding: 10px;
    background-color: #f4f5f7;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
    margin: 10px;
  }
  .img-span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    vertical-align: middle;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 950px) {
    .tile-frame {
      width: 19vw;
      height: 19vw;
      margin: 10px;
    }
  }
</style>

<div class="tile-frame" on:click={handleClickTile}>
  <span class="img-span" style="background-image: url('{src}')" />
</div>
