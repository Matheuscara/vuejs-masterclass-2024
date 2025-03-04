Este repositório contém um **projeto de estudo** baseado no curso da **VueSchool (2024)**, utilizando **Vue.js 3 atualizado**.

O objetivo deste projeto é **explorar e aprofundar conceitos fundamentais do Vue.js**, incluindo:

- **Vite e sua importância**
- **Hot Module Replacement (HMR)**
- **Extensão do VS Code para Vue.js**
- **Melhor organização de arquivos no VS Code**
- **Vue Router e navegação sem recarregamento**
- **Lazy Load de rotas no Vue Router**
- **Automação de rotas com `unplugin-vue-router`**
- **Gerenciamento de estado com Pinia e comparação com Angular**
- **Uso de variáveis de ambiente com `import.meta.env`**
- **Mock de dados no banco com `@faker-js/faker`**
- **Life Cycle - Metodos**

---

# 🔹 **Vite e sua Importância no Vue.js 3**

## 📌 **O que é o Vite?**

O **Vite** é uma ferramenta moderna de build para JavaScript, criada para ser **rápida** e **eficiente** no desenvolvimento.

### 🚀 **Principais vantagens do Vite**

- 🔥 **Hot Module Replacement (HMR)** → Atualiza os componentes **instantaneamente** sem recarregar a página.
- ⚡ **Build super rápido** → Usa **ES Modules (ESM)**, carregando apenas o necessário.
- ✅ **Menos configuração** → Diferente do Webpack, já vem pronto para Vue.js.

---

# 🔹 **Hot Module Replacement (HMR)**

O **HMR** permite que mudanças nos arquivos sejam aplicadas **sem recarregar a página inteira**, mantendo o estado da aplicação.

💡 **Como funciona?**

- Se você altera um **componente**, o Vite **recarrega apenas ele**, mantendo o que já foi digitado nos inputs.
- Isso torna o desenvolvimento **mais rápido e eficiente**.

---

# 🔹 **Extensão do VS Code para Vue.js**

Para melhorar o desenvolvimento no VS Code, instala a extensão **Volar**:  
🔗 [Volar - Extensão para Vue.js](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Ela oferece:

- ✅ **Autocompletar** para diretivas (`v-bind`, `v-for`, etc.).
- ✅ **Highlight de sintaxe** e detecção de erros.
- ✅ **Suporte ao TypeScript** para Vue.js.

---

# 🔹 **Organizando o VS Code para Melhor Navegação**

Para facilitar a organização de arquivos no Vue.js, ajusta a configuração `exploreFileNesting` no **settings.json**:

```json
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.expand": false,
"explorer.fileNesting.patterns": {
  "*.vue": ["*.ts", "*.scss", "*.css", "*.spec.ts"],
  "index.ts": ["*.module.ts"]
}
```

Isso mantém **arquivos relacionados "aninhados"**, deixando o Explorer mais organizado.

---

# 🔹 **Vue Router e Navegação sem Recarregamento**

## 📌 **Por que usar Vue Router?**

O **Vue Router** permite **navegação entre páginas sem recarregar a aplicação inteira**, mantendo **Navbar, Sidebar e outros componentes fixos**.

## 📌 **Corrigindo o comportamento padrão do Vue**

Se usarmos `<a href="/">`, a página **recarrega inteira**. Para evitar isso, use:

```html
<RouterLink to="/">Home</RouterLink>
```

✅ **Vantagens do `RouterLink`**:

- Mantém a navegação **rápida e fluida**.
- **Evita downloads desnecessários** a cada mudança de página.
- **Pré-carrega recursos importantes** para a próxima navegação.

---

# 🔹 **Lazy Load de Rotas no Vue Router**

No **Vue Router**, há duas maneiras de importar componentes:

```typescript
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Carrega o componente e seus filhos no momento inicial
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      // Lazy Load: carrega o componente apenas quando acessado
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
  ],
})

export default router
```

✅ **Lazy Load melhora a performance, carregando apenas o necessário quando a rota é acessada.**

---

# 🔹 **Automação de Rotas com `unplugin-vue-router`**

Em vez de registrar rotas manualmente, podemos **automatizar a criação de rotas** com `unplugin-vue-router`:

```sh
npm i -D unplugin-vue-router
```

### 📌 **Principais benefícios**

1. 🔄 **Geração automática de rotas** a partir dos arquivos do projeto.
2. 🛠️ **Melhora o TypeScript e IntelliSense** no VS Code.
3. 🚀 **Otimiza a performance** ao carregar apenas o necessário.
4. 📂 **Mantém o código mais limpo**, eliminando a necessidade de configurar rotas manualmente.

---

# 🔹 **Gerenciamento de Estado: Vue.js (Pinia) vs Angular**

No Vue.js usamos **Pinia** para gerenciamento de estado, enquanto no Angular usamos **signals e services**.

### 📌 **Exemplo com Pinia**

```javascript
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

📌 **Angular 17 trouxe um conceito similar com `signals` e `computed`, tornando a experiência mais parecida com Vue.js.**

---

# 🔹 **Uso de Variáveis de Ambiente com `import.meta.env`**

No **Vue 3 + Vite**, as variáveis de ambiente são acessadas via `import.meta.env`, não `process.env`.

✅ **Exemplo:**

```typescript
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
```

✅ **Vantagens do `import.meta.env` no Vite:**

| 🔍 **Método**     | ⚡ **Usado em**   | 📌 **Motivo**                   |
| ----------------- | ----------------- | ------------------------------- |
| `process.env`     | Webpack (Vue CLI) | Método tradicional, mais pesado |
| `import.meta.env` | Vite (Vue 3)      | Mais rápido, otimizado          |

> 📌 **Se estiver usando Vite, `process.env` não funciona!**

---

# 🔹 **Mock de Dados com Faker.js**

Este projeto utiliza **Faker.js** para gerar **dados fictícios (mockados)** e popular o banco de dados automaticamente.

## 📌 **Biblioteca Utilizada**

- [`@faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker) (versão PT-BR)
- Supabase como banco de dados

## 📌 **Como funciona?**

Os scripts de seed (`seedProjects` e `seedTasks`) utilizam Faker.js para gerar:

- **Nomes aleatórios** (`faker.lorem.words(3)`)
- **Descrições fictícias** (`faker.lorem.sentence()`)
- **Status aleatórios** (`faker.helpers.arrayElement([...])`)
- **Datas futuras simuladas** (`faker.date.future().toISOString().split('T')[0]`)
- **Colaboradores simulados** (`faker.helpers.arrayElements([...])`)

### **Rodando o Seed**

```sh
node database/seed.js
```

Isso cria **10 projetos** e **10 tarefas** com dados aleatórios no Supabase.

# 🔹 Life Cycle - Metodos

![[Pasted image 20250302225430.png]]

# 📌 **Resumo**

| 🔍 **Hook**         | 📌 **Quando é Chamado?**                      |
| ------------------- | --------------------------------------------- |
| `setup()`           | Antes do componente ser criado                |
| `onBeforeMount()`   | Antes do componente ser montado no DOM        |
| `onMounted()`       | Depois do componente ser montado no DOM       |
| `onBeforeUpdate()`  | Antes do Vue atualizar o DOM                  |
| `onUpdated()`       | Depois que o Vue atualizou o DOM              |
| `onBeforeUnmount()` | Antes do componente ser desmontado            |
| `onUnmounted()`     | Depois que o componente foi removido do DOM   |
| `onErrorCaptured()` | Quando ocorre um erro em um componente filho  |
| `watch()`           | Monitora mudanças em valores específicos      |
| `watchEffect()`     | Executa imediatamente e reexecuta em mudanças |

#setup

O **`setup()`** é o primeiro hook executado no Vue 3, antes da criação do componente. Ele substitui `beforeCreate()` e `created()` do Vue 2 e é usado para:

- **Criar variáveis reativas** (`ref`, `reactive`).
- **Definir métodos** do componente.
- **Usar outros lifecycle hooks** (`onMounted`, `onUnmounted`, etc.).
- **Acessar props** recebidas pelo componente.

## 📌 **Duas formas de usar `setup()`**

### ✅ **1. Forma tradicional (`setup()` dentro de `export default`)**

```ts
<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('Hello Vue 3!')
    return { message }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
</template>

```

---

### ✅ **2. Usando `<script setup>` (Forma simplificada)**

```ts
<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
</script>

<template>
  <h1>{{ message }}</h1>
</template>

```

🔹 **Vantagens do `<script setup>`:**

- Código mais **curto e direto** (não precisa `return`).
- Melhor **desempenho** e otimização automática.

---

## 📌 **Usando Lifecycle Hooks dentro do `setup()`**

Podemos executar código em diferentes momentos do ciclo de vida dentro do `setup()`:

```ts
<script setup>
import { ref, onMounted } from 'vue'

const message = ref('Carregando...')

onMounted(() => {
  message.value = 'Componente montado!'
})
</script>

<template>
  <h1>{{ message }}</h1>
</template>

```

✅ Aqui, `onMounted()` executa uma ação quando o componente é montado.

#onUnmounted

O **`onUnmounted`** é um lifecycle hook do Vue 3 que é executado **quando o componente é destruído e removido do DOM**. Ele é útil para:

- **Limpar listeners/eventos** que foram adicionados manualmente.
- **Cancelar requisições assíncronas em andamento** para evitar vazamento de memória.
- **Desinscrever de observáveis ou WebSockets**.

## 📌 **Implementando `onUnmounted` no Vue 3**

No `<script setup>`, podemos utilizar `onUnmounted()` diretamente da API do Vue:

```typescript
<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import supabase from '@/lib/supabaseClient'
import type { Tables } from '../../../database/database.types'

const projects = ref<Tables<'projects'>[] | null>([])

// Requisição assíncrona ao banco de dados
const fetchProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) console.error(error)

  projects.value = data
}

// Chamando a função assíncrona imediatamente
fetchProjects()

// Cleanup quando o componente for desmontado
onUnmounted(() => {
  console.log('Componente desmontado! Limpando recursos...')
  projects.value = null // Exemplo de limpeza de estado
})
</script>

```

---

## 📌 **O que acontece nesse código?**

1. **Buscamos os dados do Supabase** ao carregar o componente (`fetchProjects()`).
2. **Quando o componente for removido do DOM (`onUnmounted`)**:
   - Exibe um log de que foi desmontado.
   - Define `projects.value = null`, simulando uma limpeza do estado.

---

## 📌 **Quando usar `onUnmounted`?**

- Remover **event listeners globais** (`window.addEventListener()`).
- Encerrar **WebSockets** ou conexões abertas (`socket.disconnect()`).
- Cancelar **requisições assíncronas pendentes** (`AbortController()`).
- Limpar **timers** (`clearInterval()` ou `clearTimeout()`).

---

#onMounted

O **`onMounted`** é um lifecycle hook do Vue 3 que é executado **assim que o componente é montado no DOM**. Ele é usado para:

- **Fazer requisições à API** assim que o componente estiver pronto.
- **Adicionar listeners/eventos** necessários após a renderização.
- **Manipular o DOM** quando necessário.

## 📌 **Implementando `onMounted` no Vue 3**

No `<script setup>`, podemos usar `onMounted()` diretamente da API do Vue:

```typescript
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import supabase from '@/lib/supabaseClient'
import type { Tables } from '../../../database/database.types'

const projects = ref<Tables<'projects'>[] | null>([])

// Função para buscar os projetos do banco de dados
const fetchProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) console.error(error)

  projects.value = data
}

// Chamando fetchProjects dentro do lifecycle hook
onMounted(() => {
  console.log('Componente montado! Buscando projetos...')
  fetchProjects()
})
</script>

```

---

## 📌 **O que acontece nesse código?**

1. **Quando o componente for montado (`onMounted`)**, ele:
   - Exibe um log indicando que foi montado.
   - Chama `fetchProjects()`, que faz uma requisição ao Supabase e atualiza `projects.value`.

---

## 📌 **Quando usar `onMounted`?**

- **Carregar dados de uma API** assim que o componente for renderizado.
- **Adicionar listeners/eventos no DOM** (`window.addEventListener()`).
- **Fazer animações/manipulações no DOM** após a montagem.
- **Inicializar bibliotecas externas** que precisam do DOM.
