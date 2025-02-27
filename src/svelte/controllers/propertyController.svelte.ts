import type { Note, Property } from "../types/types";
import { noteController } from "./noteController.svelte";

class PropertyController {
  constructor() {}

  /**
   * Crea una nueva propiedad para una nota
   * @param noteId ID de la nota a la que se añadirá la propiedad
   * @param property La propiedad a crear (sin ID)
   * @returns El ID de la propiedad creada
   */
  createProperty = (noteId: string, property: Omit<Property, "id">): string => {
    const note = noteController.getNoteById(noteId);
    if (!note) {
      throw new Error(`Note ${noteId} not found`);
    }

    const newProperty: Property = {
      ...property,
      id: crypto.randomUUID(),
      value: property.value ?? this.getDefaultTypeValue(property.type),
    };

    // Crear una copia de la nota con la nueva propiedad
    const updatedProperties = [...note.properties, newProperty];

    // Usar el noteController para actualizar la nota
    noteController.updateNote(noteId, { properties: updatedProperties });

    return newProperty.id;
  };

  /**
   * Actualiza una propiedad existente
   * @param noteId ID de la nota que contiene la propiedad
   * @param propertyId ID de la propiedad a actualizar
   * @param updates Cambios parciales a aplicar a la propiedad
   */
  updateProperty = (
    noteId: string,
    propertyId: string,
    updates: Partial<Omit<Property, "id">>,
  ): void => {
    const note = noteController.getNoteById(noteId);
    if (!note) {
      throw new Error(`Note ${noteId} not found`);
    }

    const property = note.properties.find((p) => p.id === propertyId);
    if (!property) {
      throw new Error(`Property ${propertyId} not found in note ${noteId}`);
    }

    const updatedProperties = note.properties.map((prop) => {
      if (prop.id === propertyId) {
        const newType = updates.type ?? prop.type;
        return {
          ...prop,
          ...updates,
          value:
            updates.type !== undefined
              ? this.getDefaultTypeValue(newType)
              : (updates.value ?? prop.value),
          type: newType,
        };
      }
      return prop;
    });

    // Usar el noteController para actualizar la nota
    noteController.updateNote(noteId, { properties: updatedProperties });
  };

  /**
   * Elimina una propiedad de una nota
   * @param noteId ID de la nota que contiene la propiedad
   * @param propertyId ID de la propiedad a eliminar
   */
  deleteProperty = (noteId: string, propertyId: string): void => {
    const note = noteController.getNoteById(noteId);
    if (!note) {
      throw new Error(`Note ${noteId} not found`);
    }

    if (!note.properties.some((p) => p.id === propertyId)) {
      throw new Error(`Property ${propertyId} not found in note ${noteId}`);
    }

    const updatedProperties = note.properties.filter(
      (p) => p.id !== propertyId,
    );

    // Usar el noteController para actualizar la nota
    noteController.updateNote(noteId, { properties: updatedProperties });
  };

  /**
   * Obtiene todas las propiedades de una nota
   * @param noteId ID de la nota
   * @returns Array con todas las propiedades de la nota
   */
  getNoteProperties = (noteId: string): Property[] => {
    const note = noteController.getNoteById(noteId);
    if (!note) {
      throw new Error(`Note ${noteId} not found`);
    }

    return [...note.properties];
  };

  /**
   * Obtiene una propiedad específica por su ID
   * @param noteId ID de la nota
   * @param propertyId ID de la propiedad
   * @returns La propiedad solicitada o undefined si no existe
   */
  getPropertyById = (
    noteId: string,
    propertyId: string,
  ): Property | undefined => {
    const note = noteController.getNoteById(noteId);
    if (!note) {
      throw new Error(`Note ${noteId} not found`);
    }

    return note.properties.find((p) => p.id === propertyId);
  };

  /**
   * Devuelve el valor por defecto según el tipo de propiedad
   * @param type Tipo de la propiedad
   * @returns Valor por defecto para ese tipo
   */
  private getDefaultTypeValue(type: Property["type"]) {
    switch (type) {
      case "text":
        return "";
      case "list":
        return [];
      case "number":
        return 0;
      case "check":
        return false;
      case "date":
        return new Date().toISOString().split("T")[0];
      case "datetime":
        return new Date().toISOString();
      default:
        return ""; // Valor seguro por defecto
    }
  }
}

export const propertyController = $state(new PropertyController());
