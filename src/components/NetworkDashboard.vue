<template>
  <div class="network-dashboard">
    <h3>Network Dashboard</h3>
    <div class="stats">
      <div class="stat">
        <span class="stat-label">Active DNS</span>
        <span class="stat-value" :class="{ active: activeProvider }">
          {{ activeProvider ? activeProvider.name : 'None' }}
        </span>
      </div>
      <div class="stat">
        <span class="stat-label">Latency</span>
        <span class="stat-value">{{ currentLatency }}ms</span>
      </div>
      <div class="stat">
        <span class="stat-label">Status</span>
        <span class="stat-value" :class="statusClass">{{ status }}</span>
      </div>
    </div>
    <div class="chart-container">
      <canvas ref="chartCanvas" width="300" height="150"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useProvidersStore } from '../stores/providers'

const providersStore = useProvidersStore()
const activeProvider = computed(() => providersStore.activeProvider)
const chartCanvas = ref<HTMLCanvasElement | null>(null)

const latencyHistory = ref<number[]>([])
const currentLatency = computed(() => {
  if (latencyHistory.value.length === 0) return 0
  return latencyHistory.value[latencyHistory.value.length - 1]
})

const status = computed(() => {
  if (!activeProvider.value) return 'Disconnected'
  if (currentLatency.value < 50) return 'Excellent'
  if (currentLatency.value < 100) return 'Good'
  return 'Fair'
})

const statusClass = computed(() => {
  if (!activeProvider.value) return 'disconnected'
  if (currentLatency.value < 50) return 'excellent'
  if (currentLatency.value < 100) return 'good'
  return 'fair'
})

let intervalId: ReturnType<typeof setInterval> | null = null

function drawChart() {
  const canvas = chartCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height

  // Clear
  ctx.clearRect(0, 0, width, height)

  // Draw grid
  ctx.strokeStyle = '#334155'
  ctx.lineWidth = 1
  for (let i = 0; i <= 4; i++) {
    const y = (height / 4) * i
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  // Draw line
  if (latencyHistory.value.length > 1) {
    ctx.strokeStyle = '#6366f1'
    ctx.lineWidth = 2
    ctx.beginPath()

    const step = width / (latencyHistory.value.length - 1)
    latencyHistory.value.forEach((val, i) => {
      const x = i * step
      const y = height - (val / 200) * height
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })

    ctx.stroke()
  }
}

onMounted(() => {
  intervalId = setInterval(() => {
    if (activeProvider.value) {
      const baseLatency = 30 + Math.random() * 70
      latencyHistory.value.push(Math.round(baseLatency))
      if (latencyHistory.value.length > 30) {
        latencyHistory.value.shift()
      }
      drawChart()
    }
  }, 1000)
})

watch(activeProvider, () => {
  latencyHistory.value = []
  drawChart()
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.network-dashboard {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

h3 {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
}

.stat-value {
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.stat-value.active { color: var(--color-success); }
.stat-value.excellent { color: var(--color-success); }
.stat-value.good { color: var(--color-warning); }
.stat-value.fair { color: var(--color-error); }
.stat-value.disconnected { color: var(--text-muted); }

.chart-container {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
}

canvas {
  width: 100%;
  height: auto;
}
</style>
