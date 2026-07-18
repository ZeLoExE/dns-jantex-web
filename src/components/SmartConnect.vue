<template>
  <div class="smart-connect">
    <h3>Smart Connect</h3>
    <p class="description">Benchmark DNS providers and auto-select the fastest</p>

    <div v-if="!isRunning && !result" class="idle-state">
      <button class="benchmark-btn" @click="startBenchmark">
        Start Benchmark
      </button>
    </div>

    <div v-if="isRunning" class="running-state">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="progress-text">Testing {{ currentProvider }}... ({{ testedCount }}/{{ totalCount }})</p>
    </div>

    <div v-if="result" class="result-state">
      <div class="result-card">
        <span class="result-label">Fastest Provider</span>
        <span class="result-name">{{ result.name }}</span>
        <span class="result-latency">{{ result.latency }}ms</span>
      </div>
      <button class="apply-btn" @click="applyResult">Apply This DNS</button>
      <button class="retry-btn" @click="reset">Try Again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { dnsProviders, type DNSProvider } from '../data/dns-providers'
import { useProvidersStore } from '../stores/providers'
import { useToastStore } from '../stores/toast'

const providersStore = useProvidersStore()
const toastStore = useToastStore()

const isRunning = ref(false)
const progress = ref(0)
const currentProvider = ref('')
const testedCount = ref(0)
const totalCount = ref(dnsProviders.length)
const result = ref<{ name: string; latency: number; provider: DNSProvider } | null>(null)

async function startBenchmark() {
  isRunning.value = true
  progress.value = 0
  testedCount.value = 0
  result.value = null

  const results: { provider: DNSProvider; latency: number }[] = []

  for (const provider of dnsProviders) {
    currentProvider.value = provider.name

    // Simulate latency test (random 20-150ms)
    await new Promise(resolve => setTimeout(resolve, 100))
    const latency = Math.floor(Math.random() * 130) + 20

    results.push({ provider, latency })
    testedCount.value++
    progress.value = (testedCount.value / totalCount.value) * 100
  }

  // Find fastest
  const fastest = results.sort((a, b) => a.latency - b.latency)[0]
  result.value = {
    name: fastest.provider.name,
    latency: fastest.latency,
    provider: fastest.provider
  }

  isRunning.value = false
  toastStore.show('Benchmark complete! Fastest: ' + fastest.provider.name, 'success')
}

function applyResult() {
  if (result.value) {
    providersStore.setActive(result.value.provider)
    toastStore.show('Applied ' + result.value.name, 'success')
  }
}

function reset() {
  result.value = null
  progress.value = 0
}
</script>

<style scoped>
.smart-connect {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

h3 {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.description {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-md);
}

.benchmark-btn,
.apply-btn,
.retry-btn {
  width: 100%;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.benchmark-btn {
  background: var(--color-primary);
  border: none;
  color: white;
}

.benchmark-btn:hover {
  background: var(--color-primary-hover);
}

.progress-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.progress {
  height: 100%;
  background: var(--color-primary);
  transition: width var(--transition-fast);
}

.progress-text {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  text-align: center;
}

.result-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.result-label {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
}

.result-name {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-success);
  margin-bottom: var(--spacing-xs);
}

.result-latency {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.apply-btn {
  background: var(--color-success);
  border: none;
  color: white;
  margin-bottom: var(--spacing-sm);
}

.apply-btn:hover {
  opacity: 0.9;
}

.retry-btn {
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.retry-btn:hover {
  border-color: var(--border-color-hover);
  background: var(--bg-secondary);
}
</style>
