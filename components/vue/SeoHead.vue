<template>
  <div style="display: none;"></div>
</template>

<script setup>
import { watchEffect, onUnmounted } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  canonicalUrl: String,
  ogImage: String,
  structuredData: Object
})

watchEffect(() => {
  if (props.title) document.title = props.title

  if (props.description) {
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', props.description)
  }

  if (props.canonicalUrl) {
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', props.canonicalUrl)
  }

  if (props.ogImage) {
    let metaOgImage = document.querySelector('meta[property="og:image"]')
    if (!metaOgImage) {
      metaOgImage = document.createElement('meta')
      metaOgImage.setAttribute('property', 'og:image')
      document.head.appendChild(metaOgImage)
    }
    metaOgImage.setAttribute('content', props.ogImage)
  }
})

let scriptEl = null
watchEffect(() => {
  if (props.structuredData) {
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      document.head.appendChild(scriptEl)
    }
    scriptEl.text = JSON.stringify(props.structuredData)
  }
})

onUnmounted(() => {
  if (scriptEl) {
    document.head.removeChild(scriptEl)
  }
})
</script>
