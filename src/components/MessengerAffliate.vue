<script setup lang="ts">
import { onMounted } from 'vue'
import { openMessenger } from '@/services/chatwoot'

onMounted(() => {
  if (window.location.hash.includes('#support')) {
    openMessenger()
  }
})
</script>
