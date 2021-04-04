<script>
  export let image;
  export let name;
  export let link;
</script>

<div class="cert-element">
  <a href={link} target="_blank" class="cert-link">
    <img src={image} alt={`${name}-img`} class="cert-img" />
  </a>
  <div class="cert-name">{name}</div>
</div>

<style>
  .cert-element {
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 10px;
    margin: 10px;
    width: 100px;
    height: 120px;
    border-radius: 10px;
    background: var(--white2);
    color: var(--black1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  }

  .cert-img {
    width: 100px;
    height: 100px;
  }
</style>
