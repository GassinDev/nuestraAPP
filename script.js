document.addEventListener('DOMContentLoaded', function () {
    const consultaSelect = document.getElementById('consulta');
    const verLeyesDiv = document.getElementById('verLeyes');
    const buscarLeyDiv = document.getElementById('buscarLey');
    const resultadoDiv = document.getElementById('resultado');
  
    consultaSelect.addEventListener('change', function () {
      if (consultaSelect.value === 'verLeyes') {
        verLeyesDiv.style.display = 'block';
        buscarLeyDiv.style.display = 'none';
      } else if (consultaSelect.value === 'buscarLey') {
        verLeyesDiv.style.display = 'none';
        buscarLeyDiv.style.display = 'block';
      }
    });
  });
  
  function buscarLey() {
    const problemaTextarea = document.getElementById('problema');
    const resultadoDiv = document.getElementById('resultado');
  
    // Aquí puedes implementar la lógica para buscar la ley según el problema
    const problema = problemaTextarea.value;
    // Simplemente mostramos el problema como resultado de ejemplo
    resultadoDiv.innerHTML = `<p>Resultado de búsqueda para el problema: ${problema}</p>`;
  }
  

  function buscarLey() {
    const problemaTextarea = document.getElementById('problema');
    const resultadoDiv = document.getElementById('resultado');
  
    const problema = problemaTextarea.value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda no sensible a mayúsculas
  
    // Lista ficticia de leyes con descripciones
    const leyes = [
        { nombre: 'Ley de Derechos de Autor', descripcion: 'Regula los derechos de los autores sobre sus obras' },
  { nombre: 'Ley de Protección del Consumidor', descripcion: 'Protege los derechos de los consumidores en transacciones comerciales' },
  { nombre: 'Ley de Privacidad en Internet', descripcion: 'Establece normas para la privacidad de los usuarios en línea' },
  { nombre: 'Ley de Seguridad Alimentaria', descripcion: 'Garantiza la seguridad y calidad de los alimentos para el consumo humano' },
  { nombre: 'Ley de Cambio Climático', descripcion: 'Aborda medidas para mitigar y adaptarse al cambio climático' },
  { nombre: 'Ley de Igualdad de Género', descripcion: 'Promueve la igualdad de derechos y oportunidades para todos, independientemente del género' },
  { nombre: 'Ley de Salud Pública', descripcion: 'Establece regulaciones para proteger y mejorar la salud de la población' },
  { nombre: 'Ley de Derechos Civiles', descripcion: 'Protege los derechos civiles y las libertades fundamentales de los individuos' },
  { nombre: 'Ley de Educación Pública', descripcion: 'Define políticas y normas para el sistema educativo público' },
  { nombre: 'Ley de Telecomunicaciones', descripcion: 'Regula las comunicaciones electrónicas y servicios de telecomunicaciones' },
  { nombre: 'Ley de Derechos Humanos', descripcion: 'Protege y promueve los derechos humanos fundamentales' },
  { nombre: 'Ley de Protección del Medio Ambiente', descripcion: 'Establece medidas para conservar y proteger el medio ambiente' },
  { nombre: 'Ley de Comercio Justo', descripcion: 'Promueve prácticas comerciales éticas y socialmente responsables' },
  { nombre: 'Ley de Energías Renovables', descripcion: 'Fomenta el uso y desarrollo de fuentes de energía renovable' },
  { nombre: 'Empresario Individual (Autónomo)', descripcion: 'Mínimo 1 socio. Sin necesidad de capital social mínimo. Responsabilidad ilimitada. IRPF. Razón social: nombre personal o un nombre comercial.' },
  { nombre: 'Emprendedor de Responsabilidad Limitada', descripcion: 'Mínimo 1 socio. Sin necesidad de capital social mínimo. Responsabilidad ilimitada con excepciones. IRPF. Razón social: Nombre del emprendedor.' },
  { nombre: 'Comunidad de Bienes', descripcion: 'Mínimo 2 socios. No hay un mínimo legal establecido. Responsabilidad ilimitada. IRPF. Razón social: C.B.' },
  { nombre: 'Sociedad Civil', descripcion: 'Mínimo de 2 socios. No hay un mínimo legal establecido. Responsabilidad ilimitada. Impuesto de sociedades o IRPF cuando por su objeto no tengan forma mercantil. Razón social: S.C.' },
  { nombre: 'Sociedad Anónima', descripcion: 'Mínimo 1 socio. Capital mínimo de 60.000 euros. Responsabilidad limitada. Impuesto sobre Sociedades. Razón social: S.A.' },
  { nombre: 'Sociedad Anónima Laboral', descripcion: 'Mínimo 2 socios en la constitución, 3 a los 36 meses. Capital mínimo de 60.000 euros. Responsabilidad limitada. Impuesto sobre Sociedades. Razón social: S.A.L.' },
  { nombre: 'Sociedad Cooperativa', descripcion: 'Cooperativas de 1er grado: Mínimo 3 socios. Cooperativas de 2º grado: 2 cooperativas. Capital mínimo según los Estatutos. Responsabilidad limitada. Impuesto sobre Sociedades (Régimen especial). Razón social: S.Coop.' },
  { nombre: 'Sociedad de Responsabilidad Limitada Laboral', descripcion: 'Mínimo 2 (en la constitución), 3 a los 36 meses. Mínimo 1 €. Responsabilidad limitada. Impuesto sobre Sociedades. Razón social: S.R.L.L.' },
      // Agrega más leyes según sea necesario
    ];
  
    // Realizar la búsqueda de leyes
    const resultados = leyes.filter(ley => ley.descripcion.toLowerCase().includes(problema));
  
    // Mostrar resultados
    if (resultados.length > 0) {
      const resultadosHTML = resultados.map(ley => `<p>${ley.nombre}: ${ley.descripcion}</p>`).join('');
      resultadoDiv.innerHTML = resultadosHTML;
    } else {
      resultadoDiv.innerHTML = '<p>No se encontraron leyes relacionadas.</p>';
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase "ver-video"
    var verVideoButtons = document.querySelectorAll(".ver-video");
  
    // Asigna un evento de clic a cada botón
    verVideoButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Obtiene el valor del atributo data-video-id
        var videoId = this.getAttribute("data-video-id");
  
        // Redirige a la página de YouTube con el video correspondiente
        if (videoId) {
          window.location.href = "https://www.youtube.com/watch?v=" + videoId;
        }
      });
    });
  });