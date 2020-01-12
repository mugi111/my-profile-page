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
    border-radius: 5px;
    background-color: #F4F5F7;
    filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.2));
    margin: 10px;
  }

  .img-div {
    display: table-cell;
    width: 250px;
    height: 125px;
    padding: 8px;
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

  .text-title-p {
    font-weight: bold;
    font-size: 20px;
  }
</style>