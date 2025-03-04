<script setup lang="ts">
import supabase from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/database.types'

const tasks = ref<Tables<'tasks'>[] | null>([])

;(async () => {
  const { data, error } = await supabase.from('tasks').select('*')

  if (error) console.error(error)

  tasks.value = data

  return data
})()
</script>

<template>
  <div>
    <h1>tasks Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
    <RouterLink :to="{ name: '/' }"> to home </RouterLink>
  </div>
</template>
