# Respuestas · Parte 2

Nombre y apellidos: Imanol Margarit Lopis

## 1. ¿Cómo sabe el programa si toca colocar o mover? ¿Has usado un estado o un valor calculado? ¿Por qué?
Lo sabe por "squares.filter((casilla) => casilla === jugador).length" y lo compara con "MAX_FICHAS".
Con un valor calculado, porque ese dato ya está en el tablero y no puede desincronizarse.

## 2. ¿Dónde guardas la ficha seleccionada? ¿Por qué no forma parte del historial?
Se guarda en "Game" con "useState" de "Selected".
Porque guarda posiciones del tablero y la seleccion es solo un estado.

## 3. ¿Cómo mueves una ficha sin modificar el tablero original?
Con una copia, cambio la copia y la envio a onPl"ay sin tocar el original.

## 4. ¿Sigue funcionando el cálculo de xIsNext a partir de currentMove? Justifícalo
Sí. Cada jugada, añade una entrada al historial, así que "currentMove" sigue indicando el turno.
