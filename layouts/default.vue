<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-61WJGN61YF",
          async: true
        },
        {
          hid: "gtag-init",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-61WJGN61YF');
          `,
          type: "text/javascript",
          charset: "utf-8"
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-init': ['innerHTML']
      }
    };
  }
}
</script>
