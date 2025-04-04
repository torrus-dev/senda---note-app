export interface CloseOptions {
   action: () => void;
   preventOnEsc?: boolean;
   preventOnClickOutside?: boolean;
   triggerElement?: HTMLElement;
}

export function onOutsideOrEsc(node: HTMLElement, options: CloseOptions) {
   if (typeof options.action !== "function") {
      console.error("onOutsideOrEsc: action must be a function");
      return { destroy() {} };
   }

   // Definir manejadores de eventos
   const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
         !node.contains(target) ||
         (options.triggerElement && !options.triggerElement?.contains(target))
      ) {
         options.action();
      }
   };

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
         options.action();
      }
   };

   // Agregar event listeners con un pequeño retraso
   // const timerId = setTimeout(setupListeners, 10);
   setupListeners();

   // Funciones auxiliares
   function setupListeners() {
      if (!options.preventOnClickOutside) {
         document.addEventListener("mousedown", handleClickOutside, true);
      }

      if (!options.preventOnEsc) {
         document.addEventListener("keydown", handleKeyDown, true);
      }
   }

   function removeListeners() {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("keydown", handleKeyDown, true);
   }

   // Retornar API de la directiva "use:" de Svelte
   return {
      update(newOptions: CloseOptions | (() => void)) {
         // Actualizar configuración
         Object.assign(options, newOptions);

         // Verificar que onClose siga siendo válido
         if (typeof options.action !== "function") {
            console.error("onOutsideOrEsc update: onClose must be a function");
         }
      },

      destroy() {
         // clearTimeout(timerId);
         removeListeners();
      },
   };
}
