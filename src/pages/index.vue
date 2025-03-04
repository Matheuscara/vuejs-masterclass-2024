<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/' }">to projects</RouterLink>
    <br />
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">to project 1</RouterLink>
  </div>
</template>

<style></style>
