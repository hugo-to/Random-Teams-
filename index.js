function sortearEquipos() {
  const numJugadores = document.getElementById('num-jugadores').value;
  const jugadoresPorEquipo = document.getElementById('jugadores-equipo').value;

  // Crear una lista de números del 1 al número de jugadores
  const numeros = Array.from({ length: numJugadores }, (_, i) => i + 1);

  // Barajar la lista de números aleatoriamente
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }

  // Crear los equipos
  const equipos = [];
  let equipoActual = [];
  for (const numero of numeros) {
    equipoActual.push(numero);
    if (equipoActual.length === jugadoresPorEquipo) {
      equipos.push(equipoActual);
      equipoActual = [];
    }
  }
  // Agregar los últimos jugadores al último equipo
  if (equipoActual.length > 0) {
    equipos.push(equipoActual);
  }

  // Mostrar los equipos en la página
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';
  for (let i = 0; i < equipos.length; i++) {
    const equipo = equipos[i];
    const equipoDiv = document.createElement('div');
    equipoDiv.classList.add('equipo');
    equipoDiv.innerHTML = `Equipo ${i + i}: ${equipo.join(', ')}`;
    resultadoDiv.appendChild(equipoDiv);
  }
}
