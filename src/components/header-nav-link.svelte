<div class="header">
  <a class="header-link" href="#home">HOME</a>
  <a class="header-link" href="#about">ABOUT</a>
  <a class="header-link" href="#skill">SKILL</a>
</div>

<style>
  .header {
    width: 100%;
    height: 45px;
    text-align: right;
    right: 5px;
    position: fixed;
  }

  .header-link {
    text-decoration-line: none;
    margin: 3px;
    padding: 3px 8px;
    border: 2px solid black;
    background-image: linear-gradient(to right, white 50%, black 50%);
    background-position: 0 0;
    background-size: 200% auto;
    transition: .3s;
  }
  
  .header-link:hover {
    background-position: -100% 0;
    color: white !important;
  }

  .header-link:visited {
    color: black;
  }
</style>