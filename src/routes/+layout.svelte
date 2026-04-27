<script lang="ts">
  import '@fontsource-variable/merriweather-sans';

  // Import global styles
  import "$styles/init.scss"

  let {children} = $props()
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Goodbye world | Janne Kalevi Enberg</title>
  <meta name="title" content="Goodbye world | Janne Kalevi Enberg" />
  <meta name="description" content='The anti-"Hello World" for Janne Kalevi Enberg. Thanks Pirkka Tapio Frosti and pals for destroying my life!' />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lietu.net/" />
  <meta property="og:title" content="Goodbye world | Janne Kalevi Enberg" />
  <meta property="og:description" content='The anti-"Hello World" for Janne Kalevi Enberg. Thanks Pirkka Tapio Frosti and pals for destroying my life!' />
</svelte:head>

<main>
  {@render children()}
</main>

<footer>
  <p>Copyright &copy; Janne Kalevi Enberg, 2026</p>
  <p>This website does not use cookies, and fuck anyone who claims that cookie dialogs are necessary to have a normally functioning website. They are only necessary for anyone who wants to steal/sell your personal data for profit.</p>
</footer>

<style lang="scss">
  :global(html, body), root {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #08101a;
  }

  $padding: 1rem;

  main, footer {
    padding: $padding;
    flex-grow: 1;
    max-width: 40rem;
    margin: auto;
  }

  footer {
    text-align: center;
    margin-top: 4rem;
  }
</style>
