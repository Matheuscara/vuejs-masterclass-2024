import { fakerPT_BR as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_KEY)

const seedProjects = async (numtries) => {
  const projects = []

  for (let i = 0; i < numtries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(' ', '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3, 4]),
    })
  }

  await supabase.from('projects').insert(projects)

  console.log(`Seed projects: ${numtries} projects created`)
}

const seedTasks = async (numtries) => {
  const tasks = []

  for (let i = 0; i < numtries; i++) {
    const name = faker.lorem.words(3)

    tasks.push({
      name: name,
      description: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      due_date: faker.date.future().toISOString().split('T')[0], // Apenas a data, sem horário
      project_id: faker.helpers.arrayElement([1, 2, 3, 4, 5]), // Simulação de projetos existentes
      collaborators: faker.helpers.arrayElements(['1', '2', '3', '4']), // Simulação de IDs de usuários
    })
  }

  const { error } = await supabase.from('tasks').insert(tasks)

  if (error) {
    console.error('Erro ao inserir tarefas:', error)
  } else {
    console.log(`Seed tasks: ${numtries} tasks created`)
  }
}

await seedProjects(10)
await seedTasks(10)
