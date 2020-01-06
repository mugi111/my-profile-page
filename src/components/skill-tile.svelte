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
  <div class="text-title-div">{textTitle}</div>
  <div class="text-body-div">{textBody}</div>
</div>

<style>
  .tile-frame {
    width: 300px;
    height: 300px;
    border: 5px solid blue;
    border-radius: 10px;
  }

  .img-div {
    width: 300px;
    height: 180px;
    border-bottom: 3px dotted blue;
  }
  
  .tile-img {
    width: 100%;
    height: auto;
  }
</style>