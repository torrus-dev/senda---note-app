<style>
ul {
   li {
      &:after {
         color: var(--color-text-faint);
         content: "/";
      }
   }
}
</style>

<script lang="ts">
import Button from "./Button.svelte";
import { workspace } from "@controllers/workspaceController.svelte";
import { noteQueryController } from "@controllers/note/noteQueryController.svelte";

let { noteId }: { noteId: string } = $props();

let path: { id: string; title: string }[] = $derived(
   noteId ? noteQueryController.getPathAsArray(noteId) : [],
);
</script>

<div aria-label="breadcrumb">
   <ul class="inline-flex items-center">
      {#if path}
         {#each path as crumb, index (crumb.id)}
            {#if index !== path.length - 1}
               <li class="text-base-content/60 whitespace-nowrap">
                  <Button
                     size="small"
                     shape="rect"
                     onclick={(event: Event) => {
                        workspace.setActiveNoteId(crumb.id);
                        event.stopPropagation();
                     }}
                     title="Open note">
                     {crumb.title}
                  </Button>
               </li>
            {/if}
         {/each}
      {:else}
         <li class="p-1 whitespace-nowrap select-text">Inicio</li>
      {/if}
   </ul>
</div>
