<script>
</script>

<div class="background-container">
  <div class="rect" />
</div>

<style>
  .background-container {
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
    position: fixed;
  }

  .rect {
    position: absolute;
    background-color: #ffc700;
    width: 50vw;
    height: 90vh;
    top: 5vh;
    left: 260px;
  }

  @media (max-width: 640px) {
    .rect {
      position: absolute;
      background-color: #ffc700;
      width: 340px;
      height: 270px;
      right: 0px;
      top: 180px;
      display: none;
    }
  }
</style>
