Crea una aplicación móvil llamada Obleopolis con flujo completo funcional.
Debe ser interactiva, con navegación entre pantallas y lógica interna.

La aplicación tiene 6 pantallas en este orden y con este comportamiento:

🟣 PANTALLA 1 – BIENVENIDA

Objetivo: introducción rápida.

Contenido:

Logo centrado: “Obleopolis”

Subtítulo: “Donde el dulce caos reina”

Botón principal: Iniciar partida

Comportamiento:

Al hacer click en “Iniciar partida” → navegar a Pantalla 2.

No permitir retroceso desde esta pantalla.

🟣 PANTALLA 2 – SELECCIÓN NÚMERO DE JUGADORES

Título:
¿Cuántos cocineros compiten hoy?

Mostrar 3 cards seleccionables:

2 cocineros

3 cocineros

4 cocineros

Cada card debe ser seleccionable (solo una opción activa a la vez).
Cuando se selecciona una:

Se guarda variable numberOfPlayers

Se habilita el botón “Continuar”

Botón:
Continuar (deshabilitado hasta que haya selección)

Comportamiento:

Click en Continuar → navegar a Pantalla 3

Debe haber botón de volver atrás hacia Pantalla 1.

🟣 PANTALLA 3 – SELECCIÓN MODO DE JUEGO

Título:
¿Cómo quieren sobrevivir al caos?

Mostrar 2 cards seleccionables:

CARD 1:
Modo Competencia Directa
Descripción: Todos compiten por la misma receta.

CARD 2:
Recetas Secretas
Descripción: Cada jugador recibe una receta secreta diferente.

Solo una opción seleccionable a la vez.

Guardar variable:
gameMode
Valores posibles:

"shared"

"secret"

Botón:
Continuar (deshabilitado hasta que haya selección)

Comportamiento:

Si gameMode = "shared" → ir a Pantalla 4 (receta compartida)

Si gameMode = "secret" → ir a Pantalla 5 (ingreso de nombres)

Debe haber botón de volver atrás hacia Pantalla 2.

🟣 PANTALLA 4 – TODOS HACEN LA MISMA OBLEA

Al entrar a esta pantalla:

Definir array interno de recetas:

recipes = [
{
name: "La Rompecorazones",
relleno: "Fresa",
adicion: "Chips"
},
{
name: "La Pecaminosa",
relleno: "Chocolate",
adicion: "Fresa"
},
{
name: "La Amante",
relleno: "Arequipe",
adicion: "Queso"
}
]

Seleccionar una receta aleatoria.

Mostrar en pantalla:

Nombre de la receta

Ingredientes requeridos

Ilustración de la oblea

Esta receta es visible para todos.

Botón:
Reiniciar partida

Comportamiento:

Reiniciar → volver a Pantalla 1

Resetear todas las variables

🟣 PANTALLA 5 – INGRESO DE NOMBRES (SOLO SI ES SECRET)

Título:
¿Quiénes se atreven a cocinar en este caos?

Mostrar campos dinámicos según numberOfPlayers.

Ejemplo:
Si numberOfPlayers = 3

Mostrar:
Jugador 1: input
Jugador 2: input
Jugador 3: input

Validaciones obligatorias:

Ningún campo vacío

No permitir nombres repetidos

Mostrar mensaje de error si se incumple

Guardar array:
players = ["nombre1", "nombre2", ...]

Botón:
Continuar

Comportamiento:

Solo habilitar botón si validaciones pasan

Al hacer click → navegar a Pantalla 6

Debe haber botón de volver atrás hacia Pantalla 3.

🟣 PANTALLA 6 – RECETAS DIFERENTES (MODO SECRET)

Al entrar:

Usar el mismo array de recetas.

Asignar receta aleatoria a cada jugador.
Las recetas pueden repetirse.

assignedRecipes = players.map(player =>
receta aleatoria del array
)

Mostrar cards dinámicas:
Una card por jugador:

Card contiene:

Nombre del jugador

Nombre de su receta

Ingredientes requeridos

Ilustración de oblea

Cada card debe poder tocarse para revelar la receta (opcional: estado oculto inicial para mantener secreto).

Botón:
Reiniciar partida

Comportamiento:

Reiniciar → volver a Pantalla 1

Resetear todas las variables

🔁 VARIABLES GLOBALES NECESARIAS

numberOfPlayers: number
gameMode: "shared" | "secret"
players: array
assignedRecipes: array

🔐 VALIDACIONES IMPORTANTES

No permitir avanzar sin selección previa.

No permitir continuar sin nombres válidos.

Resetear estado al reiniciar.

Mantener navegación clara entre pantallas.

Solo una selección activa por grupo.

🎨 ESTILO

Mobile first

Botones 56px height

Tipografía Poppins

Cards con estados selected / unselected

Transiciones suaves entre pantallas

🧠 FLUJO COMPLETO

Pantalla 1 → Pantalla 2 → Pantalla 3 →
Si shared → Pantalla 4 → Reiniciar
Si secret → Pantalla 5 → Pantalla 6 → Reiniciar