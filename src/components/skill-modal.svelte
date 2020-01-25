<script>
  import { fade } from 'svelte/transition';
  import { skillModalState, skillDetail } from "../stores.js";

  let isOpen;
  let detail;
  let background;

  skillModalState.subscribe(state => {
    isOpen = state;
  });

  skillDetail.subscribe(details => {
    detail = details;
  })

  const handleKeyup = ({ key }) => {
    if (isOpen && key === 'Escape') {
      event.preventDefault();
      close();
    }
  };

  const handleOuterClick = (event) => {
    if (event.target === background) {
      event.preventDefault();
      close();
    }
  };

  const close = () => {
    skillModalState.set(false);
  }
</script>

<svelte:window on:keyup={handleKeyup}/>
{#if isOpen}
  <div class="skill-modal-bg" on:click={handleOuterClick} bind:this={background} transition:fade={{duration:200}}>
    <div class="skill-modal-container">
      <p>{detail.title}</p>
      {#each detail.body as body}
        <span class="skill-detail">{body}</span>
      {/each}
    </div>
  </div>
{/if}

<style>
  .skill-modal-bg {
    z-index:1;
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.75);
    top:0;
    left:0;
  }

  .skill-modal-container {
    position: fixed;
    width: 50%;
    padding: 30px;
    background: white;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .skill-detail {
    display: block;
  }
</style>