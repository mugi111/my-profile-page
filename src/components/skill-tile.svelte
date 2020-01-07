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
    display: table-cell;
    width: 250px;
    height: 150px;
    border-bottom: 3px dotted blue;
    text-align: center;
    vertical-align: middle;
  }
  
  .tile-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .text-title-p {
    font-weight: bold;
    font-size: 20px;
  }
</style>