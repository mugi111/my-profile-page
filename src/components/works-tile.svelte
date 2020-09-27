<script>
  import WorksLinkList from "./works-link-list";
  export let imgSrc;
  export let textBody;
  export let ghSrc = null;
  export let npmSrc = null;
  export let qiitaSrc = null;
  export let blogSrc = null;
  let src = imgSrc;
</script>

<style>
  .tile-frame {
    display: inline-flex;
    width: calc(100% - 80px);
    border-radius: 5px;
    background-color: #f4f5f7;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
    margin: 10px;
  }
  .img-span {
    display: inline-flex;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    text-align: center;
    vertical-align: middle;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .works-content {
    width: 100%;
    padding: 10px;
  }
  .works-body {
    display: flex;
    width: 100%;
    bottom: 5px;
  }
</style>

<div class="tile-frame">
  <span class="img-span" style="background-image: url('{src}')" />
  <div class="works-content">
    <span class="works-body">{textBody}</span>
    <WorksLinkList
      _ghSrc={ghSrc}
      _npmSrc={npmSrc}
      _qiitaSrc={qiitaSrc}
      _blogSrc={blogSrc} />
  </div>
</div>
