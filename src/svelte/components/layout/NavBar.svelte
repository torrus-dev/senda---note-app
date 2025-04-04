<script lang="ts">
import { FocusTarget } from "@projectTypes/focusTypes";

import { focusController } from "@controllers/focusController.svelte";
import { noteController } from "@controllers/noteController.svelte";
import { workspace } from "@controllers/workspaceController.svelte";

import { screenSizeController } from "@controllers/screenSizeController.svelte";

import Breadcrumbs from "@components/utils/Breadcrumbs.svelte";
import Button from "@components/utils/Button.svelte";

import {
   MoreVerticalIcon,
   Trash2Icon,
   PenLineIcon,
   PanelLeftOpenIcon,
   PanelLeftCloseIcon,
   FileSearchIcon,
} from "lucide-svelte";
import Navigation from "@components/utils/Navigation.svelte";
import { settingsController } from "@controllers/settingsController.svelte";
import type { MenuItem } from "@projectTypes/editorMenuTypes";

let { note } = $props();
let isSidebarOpen = $derived(workspace.isSidebarOpen());
let isSidebarLocked = $derived(settingsController.getLockSidebar());

const noteOptionsItems: MenuItem[] = [
   {
      type: "action",
      label: "Rename Note",
      icon: PenLineIcon,
      action: () => {
         focusController.requestFocus(FocusTarget.TITLE);
      },
   },
   {
      type: "action",
      label: "Delete Note",
      icon: Trash2Icon,
      action: () => noteController.deleteNote(note.id),
      class: "text-error",
   },
   { type: "separator" },
   {
      type: "action",
      label: "Search in Note",
      icon: FileSearchIcon,
      action: () => {},
   },
   {
      type: "action",
      label: "Replace in Note",
      icon: FileSearchIcon,
      action: () => {},
   },
];
</script>

<nav
   class="border-border-normal flex h-14 w-full items-center justify-between gap-2 p-2">
   <!-- toggle sidebar button -->

   {#if !isSidebarLocked || screenSizeController.isMobile}
      {#if isSidebarOpen}
         <Button onclick={workspace.toggleSidebar}>
            <PanelLeftCloseIcon size="1.125em" />
         </Button>
      {:else}
         <Button onclick={workspace.toggleSidebar}>
            <PanelLeftOpenIcon size="1.125em" />
         </Button>
      {/if}
   {/if}
   <!-- navigation -->
   <Navigation />

   <div class="bg-base-200 rounded-selector flex-1 justify-between">
      <div class="flex items-center justify-between">
         <div class="overflow-x-auto px-2 py-1">
            <Breadcrumbs note={note ? note : null}></Breadcrumbs>
         </div>

         {#if note}
            <Button
               dropdownMenuItems={noteOptionsItems}
               contextMenuItems={noteOptionsItems}>
               <MoreVerticalIcon size="1.25em" />
            </Button>
         {/if}
      </div>
   </div>
</nav>
