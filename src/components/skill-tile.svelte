<script>
  export let imgSrc;
  export let textTitle;
  export let textBody;
  let src = imgSrc;
</script>

<div class="tile-frame">
  <img class="tile-img" alt="tile-img" {src} />
  <div class="text-title-div">{textTitle}</div>
  <div class="text-body-div">{textBody}</div>
</div>