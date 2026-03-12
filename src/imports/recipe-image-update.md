Necesito modificar la app para que deje de usar emojis como representación de las recetas y en su lugar utilice imágenes PNG reales que voy a proporcionar.

Tengo 3 recetas y cada una tiene su propia imagen PNG representativa.

🔹 1. Crear arreglo de recetas con imagen

Guarda las recetas en un arreglo estructurado así:

recipes = [
{
id: "rompecorazones",
name: "La Rompecorazones",
relleno: "Fresa",
adicion: "Chips",
image: "rompecorazones.png"
},
{
id: "pecaminosa",
name: "La Pecaminosa",
relleno: "Chocolate",
adicion: "Fresa",
image: "pecaminosa.png"
},
{
id: "amante",
name: "La Amante",
relleno: "Arequipe",
adicion: "Queso",
image: "amante.png"
}
]

Voy a proporcionar las 3 imágenes PNG correspondientes.

🔹 2. Reglas de visualización

Eliminar completamente el uso de emojis para representar recetas.

En todas las pantallas donde se muestra una receta (modo shared y modo secret):

Mostrar la imagen PNG correspondiente a esa receta.

La imagen debe cargarse dinámicamente usando la propiedad image del objeto receta.

No usar imágenes estáticas hardcodeadas.

No usar placeholder.

No usar emoji como fallback.

🔹 3. Comportamiento en Modo Shared

Si gameMode = "shared":

Seleccionar receta aleatoria del arreglo.

Mostrar:

Nombre

Ingredientes

Imagen PNG correspondiente (usando receta.image)

Debe renderizar exactamente la imagen asociada a la receta seleccionada.

🔹 4. Comportamiento en Modo Secret

Si gameMode = "secret":

Asignar receta aleatoria a cada jugador.

Guardar assignedRecipes como objetos completos (no solo string).

En la pantalla final:

Para cada jugador mostrar:

Nombre del jugador

Nombre de la receta

Ingredientes

Imagen PNG correspondiente

Cada carta debe renderizar su propia imagen según la receta asignada.

🔹 5. Reglas de Renderizado de Imagen

La imagen debe mostrarse como componente visual principal de la receta.

Usar image container con:

width 100%

aspect ratio fijo (ejemplo 1:1 o 4:3)

object-fit: cover

bordes redondeados

Debe ser responsive mobile.

No distorsionar proporción.

No estirar la imagen.

🔹 6. Importante

Mantener toda la lógica existente.

No cambiar flujo.

Solo reemplazar representación visual de recetas.

El sistema debe mapear correctamente cada receta con su imagen correspondiente.