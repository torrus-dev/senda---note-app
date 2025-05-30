import type { Note } from "@projectTypes/noteTypes";
import { favoritesStore } from "@stores/favoritesStore.svelte";

class FavoriteController {
   // Comprobar si una nota está en favoritos
   isFavorite = (noteId: string): boolean => {
      return favoritesStore.favorites.some(
         (favoriteId) => favoriteId === noteId,
      );
   };

   // Añadir nota a favoritos
   addToFavorites = (noteId: Note["id"]): void => {
      if (!this.isFavorite(noteId)) {
         favoritesStore.favorites.push(noteId);
      }
   };

   // Eliminar nota de favoritos
   removeFromFavorites = (noteId: string): void => {
      favoritesStore.favorites = favoritesStore.favorites.filter(
         (favoriteId) => favoriteId !== noteId,
      );
   };

   // Toggle favorito (bonus)
   toggleFavorite = (noteId: Note["id"]): void => {
      if (this.isFavorite(noteId)) {
         this.removeFromFavorites(noteId);
      } else {
         this.addToFavorites(noteId);
      }
   };
}

export const favoriteController = $state(new FavoriteController());
