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
    width: 250px;
    height: 250px;
    border-radius: 5px;
    background-color: #f4f5f7;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
    margin: 10px;
  }
  .img-div {
    display: table-cell;
    width: 220px;
    height: 220px;
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    vertical-align: middle;
  }

  .tile-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<div class="tile-frame" on:click={handleClickTile}>
  <div class="img-div">
    <img class="tile-img" alt="tile-img" {src} />
  </div>
</div>
