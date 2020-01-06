<script>
  export let imgSrc;
  export let textTitle;
  export let textBody;
  let src = imgSrc;
</script>

<div class="tile-frame">
  <div class="img-div">
    <img class="tile-img" alt="tile-img" {src} />
  </div>
  <p class="text-title-p">{textTitle}</p>
  <p class="text-body-p">{textBody}</p>
</div>

<style>
  .tile-frame {
    width: 250px;
    height: 250px;
    border: 5px solid blue;
    border-radius: 10px;
  }

  .img-div {
    width: 100%;
    height: 60%;
    border-bottom: 3px dotted blue;
  }
  
  .tile-img {
    width: 100%;
    height: auto;
  }

  .text-title-p {
    font-weight: bold;
    font-size: 20px;
  }
</style>