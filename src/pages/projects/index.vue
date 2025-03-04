<script setup lang="ts">
import supabase from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/database.types'

const projects = ref<Tables<'projects'>[] | null>([])

;(async () => {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) console.error(error)

  projects.value = data

  return data
})()
</script>

<template>
  <div>
    <h1>Products Page</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
    <RouterLink :to="{ name: '/' }"> to home </RouterLink>
  </div>
</template>
