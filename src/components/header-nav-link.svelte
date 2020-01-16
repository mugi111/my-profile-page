<div class="header">
  <a class="header-link" href="#home">HOME</a>
  <a class="header-link" href="#about">ABOUT</a>
  <a class="header-link" href="#skill">SKILL</a>
</div>

<style>
  .header {
    width: 100%;
    height: 65px;
    text-align: right;
    position: fixed;
    background-color: black;
    z-index: 100;
  }

  .header-link {
    color: whitesmoke;
    text-decoration-line: none;
    margin: 10px;
    padding: 3px 8px;
    transition: .3s;
    position: relative;
    display: inline-block;
    letter-spacing: 0.5em;
  }

  .header-link::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: whitesmoke;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform .3s;
  }
  
  a:hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  .header-link:visited {
    color: white;
  }
</style>