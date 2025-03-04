<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>
    <h1>Project {{ id }}</h1>
  </div>
</template>

<style></style>
