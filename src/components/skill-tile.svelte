<script>
  export let imgSrc;
  export let textTitle;
  export let textBody;
</script>

<div>
  <img class="tile-img" alt="tile-img" src={imgSrc}>
  <div class="text-title-div">{textTitle}</div>
  <div class="text-body-div">{textBody}</div>
</div>