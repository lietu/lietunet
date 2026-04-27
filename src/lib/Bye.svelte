<script lang="ts">
  import Hand from "./waving-hand-svgrepo-com.svg?component"
</script>

<div class="container">
  <Hand class="svg" />
</div>

<style lang="scss">
  $size: 58px;
  .container {
    display: inline-flex;
    width: $size;
    animation: bye 1.3s ease-in-out infinite;
    margin-left: 16px;

    align-content: center;
    justify-content: center;
    align-items: center;

    :global(.svg) {
      width: $size;
      height: $size;
    }
  }
</style>
