<script>
  import CertificationElement from "./CertificationElement.svelte";
  import az900 from "../assets/Az900.png";
  import az203 from "../assets/Az203.png";
  import az400 from "../assets/Az400.png";
</script>

<div class="certifications-container">
  <h2>Certification</h2>
  <div class="certifications">
    <CertificationElement
      name="AZ-900"
      image={az900}
      link="https://www.youracclaim.com/badges/8809fec5-27ba-47e4-8339-4ba2a8e59a19/public_url"
    />
    <CertificationElement
      name="AZ-203"
      image={az203}
      link="https://www.youracclaim.com/badges/83db44d3-61a2-4e60-a66b-4325b9bd2a16/public_url"
    />
    <CertificationElement
      name="AZ-400"
      image={az400}
      link="https://www.youracclaim.com/badges/f4de5c66-2e43-47a5-bd6e-656dc74baa69/public_url"
    />
  </div>
</div>

<style>
  h2 {
    font-size: 60px;
    margin-block-start: 0px;
    margin-block-end: -30px;
  }

  .certifications-container {
    min-height: 100vh;
    margin-bottom: 50px;
  }

  .certifications {
    background-color: rgba(34, 109, 217, 0.4);
    padding: 40px 10px 20px;
    width: calc(80vw - 200px);
    height: 90%;
    left: 5vw;
    position: relative;
    min-width: 300px;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 64px;
      margin-block-end: -30px;
    }

    .certifications {
      width: 80vw;
    }
  }
</style>
