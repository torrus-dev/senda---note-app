<style>
</style>

<script lang="ts">
import type { Property } from "@projectTypes/noteTypes";
import { workspace } from "@controllers/workspaceController.svelte";
import { propertyController } from "@controllers/propertyController.svelte";
import { onOutsideOrEsc } from "@directives/onOutsideOrEsc";

let {
   property = undefined,
   noteId,
}: { property?: Property | undefined; noteId: string } = $props();

const propertyId = property ? property.id : null;
const propertyName = property ? property.name : "";
const propertyType = property ? property.type : "text";

let newPropertyName: string = $state(propertyName);
let newPropertyType: Property["type"] = $state(propertyType);

// Opciones de tipos de propiedades
const propertyTypes = [
   { value: "text", label: "Text" },
   { value: "list", label: "List" },
   { value: "number", label: "Number" },
   { value: "check", label: "Check" },
   { value: "date", label: "Date" },
   { value: "datetime", label: "Datetime" },
];

function handleSave() {
   if (
      noteId &&
      (newPropertyName !== propertyName || newPropertyType !== propertyType)
   ) {
      const newProperty = {
         name: newPropertyName,
         type: newPropertyType,
         value: "",
      };
      if (propertyId) {
         propertyController.updateProperty(noteId, propertyId, newProperty);
      } else {
         propertyController.createProperty(noteId, newProperty);
      }
   }
}

function closeEditor() {
   handleSave();
   workspace.closePropertyEditor();
}
</script>

<div
   class="property-editor rounded-box bordered absolute top-full left-0 z-30 mt-1 flex flex-col gap-2 bg-(--color-base-200) px-4 py-2 shadow-lg"
   use:onOutsideOrEsc={{
      action: closeEditor,
   }}
   onkeydown={(event) => {
      if (event.key === "Enter") {
         closeEditor();
      }
   }}
   role="menu"
   tabindex="-1">
   <div class="form-group">
      <label class="inline-block w-[5rem]" for="name">Name</label>
      <input
         name="name"
         autofocus
         type="text"
         class="bg-base-100 p-1"
         bind:value={newPropertyName}
         placeholder="Enter property name" />
   </div>
   <div>
      <label for="type" class="inline-block w-[5rem]">Type</label>
      <select
         class="bg-base-100 rounded-field p-1"
         name="type"
         bind:value={newPropertyType}>
         {#each propertyTypes as { value, label }}
            <option class="" value={value}>{label}</option>
         {/each}
      </select>
   </div>
</div>
