<script>
  import AboutElement from "./AboutElement.svelte";
</script>

<div class="about-container">
  <h2>About</h2>
  <div class="about-contents">
    <AboutElement title="Name" body={["蛭沼 拓視", "Hirunuma Takumi"]} />
    <AboutElement title="Birth" body={["八王子市", "1998 / 12 / 30"]} />
    <AboutElement title="Address" body={["東京都"]} />
    <AboutElement
      title="Education"
      body={["国立東京工業高等専門学校", "情報工学科", "2014 - 2019"]}
    />
    <AboutElement
      title="Experience"
      body={[
        "国立東京工業高等専門学校    2014 - 2019",
        "株式会社FIXER    2019 - ",
      ]}
    />
  </div>
</div>

<style>
  h2 {
    font-size: var(--title-size);
    margin-block-start: 0px;
    margin-block-end: -30px;
    text-shadow: var(--title-shadow);
  }

  .about-container {
    margin-bottom: 50px;
  }

  .about-contents {
    padding: 40px 10px 20px;
    height: 90%;
    position: relative;
    min-width: 300px;
  }
</style>
