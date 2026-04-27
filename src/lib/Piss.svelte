<script lang="ts">
  const ref = 'https://giphy.com/stickers/l378nyfdDX6rdKEP6';
  const src = '/giphy-l378nyfdDX6rdKEP6.gif';
</script>

<div class="container">
  <img src={src} title="Art by @christimmons on Giphy">
  <span>{ref}</span>
</div>

<style lang="scss">
  .container {
    pointer-events: none;
    position: absolute;
    left: -140px;
    top: 96px;

    span {
      display: none;
    }

    img {
      $size: 256px;
      width: $size;
      height: $size;
    }
  }
</style>
