<!-- Toast.svelte -->
<script lang="ts">
  import { globalState } from '$lib/state.svelte';
</script>

{#if globalState.toastMessage}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="toast-notification" onclick={() => globalState.closeToast()}>
    <span class="material-symbols-outlined" style="color: var(--color-red); font-size: 1.5rem;">notifications</span>
    <div style="font-size: 0.9rem; font-weight: 500; line-height: 1.3;">{globalState.toastMessage}</div>
  </div>
{/if}
