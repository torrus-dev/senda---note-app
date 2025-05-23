import { Editor } from "@tiptap/core";

// Estado y tipos para el Property Editor
export interface PropertyEditorState {
   isOpen: boolean;
   noteId: string | undefined;
   propertyId: string | undefined;
}

// Tipos para pestañas (tabs) y ventanas
export interface Tab {
   id: string;
   noteId: string;
   title: string;
}

export interface Window {
   id: string;
   tabs: Tab[];
   activeTabId: string | null;
}

// Estado global del workspace
export interface WorkspaceState {
   activeNoteId: string | undefined;
   previousActiveNoteId: string | undefined;
   propertyEditor: PropertyEditorState;
   windows: Window[];
   activeWindowId: string | null;
   modal: {
      isOpen: boolean;
      content: any;
   };
   sidebar: {
      isOpen: boolean;
      width: number | null;
   };
   collapsible: {
      notesCollapsed: boolean;
      metadataCollapsed: boolean;
      propertiesCollapsed: boolean;
      childrenCollapsed: boolean;
   };
}

export interface PersistedWorkspaceState {
   sidebar: WorkspaceState["sidebar"];
   collapsible: WorkspaceState["collapsible"];
}
