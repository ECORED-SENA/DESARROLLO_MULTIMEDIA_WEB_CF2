export default {
  global: {
    componenteFormativo: 'Recolección de Información del Proyecto',
    descripcionCurso:
      'Los proyectos de multimedia requieren de la correcta identificación de los requisitos, especificaciones y necesidades del cliente, con el fin de poder articularlos en la definición y el montaje del proyecto. Su correcta formulación evita reprocesos, además permitirá que se cuenten con los recursos necesarios, las herramientas para su seguimiento y el logro de los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación y recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación de las necesidades del cliente ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seleccionar la técnica de recolección de información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elaborar los instrumentos de recolección de información',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aplicar los instrumentos de recolección',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tabular los resultados de recolección de información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definición del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Qué es un proyecto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipología del proyecto ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Recursos necesarios para el montaje del proyecto (definir tipología de intervención)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'La estructura de un informe para un proyecto',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Herramientas tecnológicas de seguimiento y monitoreo para proyectos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Diseño de actas e informes para documentar el proyecto',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Absalón, R., Rivas, M. y Cornejo, A. (2021). Módulo: Construcción de bases de datos. Conalp.',
      link:
        'https://www.conalepveracruz.edu.mx/iniciobackup/wp-content/uploads/2021/03/Construcci%C3%B3n-de-bases-de-datos-M%C3%93DULO-PROFESIONAL.pdf',
    },
    {
      referencia:
        'Castro Márquez, F. (2016). Técnicas e instrumentos de recolección de datos. Blog',
      link:
        'https://lainformaticamrjyj.blogspot.com/2019/02/tecnicas-e-instrumentos-de-recoleccion.html',
    },
    {
      referencia: 'Definición. (S.F). Definición de Acta. Definición.',
      link: 'https://definicion.mx/acta/',
    },
    {
      referencia:
        'Fernández, J. (2016). Tipos de Proyectos de Investigación. Jorgelfdez.',
      link:
        'https://jorgelfdez.wordpress.com/2016/06/28/tipos-de-proyectos-de-investigacion/',
    },
    {
      referencia: 'GDP. (2014). Glosario para Gestión de Proyectos. GDP.',
      link: 'http://gdp-fadu.com.ar/assets/pdfs/apuntes/Glosario.pdf',
    },
    {
      referencia: 'Iberdrola. (2021). Realidad virtual. Iberdrola.',
      link: 'https://www.iberdrola.com/',
    },
    {
      referencia:
        'Maranto, M. (2015). Fuentes de Información. Repositorio Uaeh.',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
    },
    {
      referencia: 'Raffino, M. E. (2020). ¿Qué es un proyecto?',
      link: 'https://concepto.de/proyecto/',
    },
    {
      referencia:
        'Rojas Soriano, R. (1986). La investigación Social:Teoría y Praxis."Edit. Folios. México. 1986. Pág.177.',
    },
    {
      referencia:
        'Román Cabal, L. (2016). Identificación de necesidades del cliente. Prezi.',
      link:
        'https://prezi.com/rjzgdmtb4k1x/identificacion-de-necisidades-de-cliente/',
    },
    {
      referencia:
        'Significados.com. (2021). Significado de Tipología. Significado.',
      link: 'https://www.significados.com/tipologia/',
    },
    {
      referencia:
        'Tecnosferaadsi. (2021). Proyectos y tipos de requisitos. Tecnosferaadsi. ',
      link:
        'http://tecnosferaadsi.blogspot.com/2014/05/proyectos-y-tipos-de-requisitos.html',
    },
    {
      referencia: 'Wrike. (2021). Glosario. Wrike.',
      link: 'https://www.wrike.com/es/project-management-guide/glossary/',
    },
  ],
  glosario: [
    {
      termino: 'Acta',
      significado:
        'Documento que durante una reunión es escrito por una persona presente en la misma, y a través de la cual se registran aquellos temas que han sido tratados, como también las conclusiones o acuerdos que han resultado adoptados luego de dicha reunión. (Definición, s.f.)',
    },
    {
      termino: 'Alcance',
      significado:
        'Según Román Cabal (2016): la definición del alcance tiene como propósito describir y delimitar claramente las necesidades del cliente, las cuales pretenden ser cumplidas con el proyecto.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'Según Absalón, Rivas y Cornejo (2021): una base de datos es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema de computadora. Una base de datos es usualmente controlada por un sistema de gestión de base de datos (DBMS)',
    },
    {
      termino: 'Diagrama de Gantt',
      significado:
        'El diagrama de Gantt es una metodología de representación de actividades o tareas que pretende dar una visión generalizada sobre el tiempo dedicado a cada actividad contemplada de forma independiente dentro de un proceso.',
    },
    {
      termino: 'Diseño de Aplicaciones Conjuntas (JAD)',
      significado:
        'Es una técnica en la que el grupo de usuarios y el de analistas desarrolladores del proyecto, se reúnen en una o varias sesiones de trabajo e identifican los puntos clave para el diseño, desarrollo e implementación del producto multimedia.',
    },
    {
      termino: 'Entregable',
      significado:
        'Cualquier cosa o documento producido como el resultado de un proyecto o cualquier parte de un proyecto. El proyecto entregable se distingue de los entregables parciales que resultan de actividades dentro del proyecto. Un entregable debe ser tangible y comprobable. (GDP, 2014)',
    },
    {
      termino: 'Informe',
      significado:
        'Consiste en un texto o una declaración que describe las cualidades de un hecho y de los eventos que lo rodean. El informe, por lo tanto, es el resultado o la consecuencia de la acción de informar.',
    },
    {
      termino: 'Recursos',
      significado:
        'Según Wrike (2021): recursos son los distintos medios o ayuda que se utiliza para conseguir un fin o satisfacer una necesidad.',
    },
    {
      termino: 'Realidad Virtual',
      significado:
        'Según Iberdrola (2021): la Realidad Virtual (RV) es un entorno de escenas y objetos de apariencia real —generado mediante tecnología informática— que crea en el usuario la sensación de estar inmerso en él. Dicho entorno se contempla a través de un dispositivo conocido como gafas o casco de Realidad Virtual.',
    },
    {
      termino: 'Requerimientos funcionales',
      significado:
        'Según Tecnosferaadsi (2021): los requerimientos funcionales son declaraciones de los servicios que proveerá el sistema, de la manera en que éste reacciona a entradas particulares. En algunos casos, los requerimientos funcionales de los sistemas también declaran explícitamente lo que el sistema no debe hacer.',
    },
    {
      termino: 'Requerimiento no funcional',
      significado:
        'Según Tecnosferaadsi (2021): requisitos no funcionales, son requisitos que imponen restricciones en el diseño o la implementación como restricciones en el diseño o estándares de calidad. Son propiedades o cualidades que el producto debe tener.',
    },
    {
      termino: 'Post-its',
      significado:
        'Un pedazo de papel pequeño con una tira re-adherable de pegamento en su parte posterior, hecho para fijar temporalmente notas a los documentos ya otras superficies.',
    },
    {
      termino: 'Proyecto',
      significado:
        'Según Fernández (2016): el proyecto es un conjunto coherente e integral de actividades, herramientas, recursos y prácticas coordinadas e interrelacionadas que buscan alcanzar unos objetivos específicos, utilizando una metodología definida, en un periodo de tiempo determinado, con unos insumos y costos definidos o previamente estimados. El cual busca mejorar una situación, solucionar una necesidad sentida o un problema existente.',
    },
    {
      termino: 'Método Kanban',
      significado:
        'Según Espinal, (2021): método de administración de tareas y flujos de trabajos usado especialmente con las empresas que trabajan en desarrollo de softwares.',
    },
    {
      termino: 'Tipología',
      significado:
        'La tipología es la ciencia que estudia los tipos o clases, la diferencia intuitiva y conceptual de las formas de modelo o de las formas básicas. La tipología se utiliza mucho en términos de estudios sistemáticos en diversos campos de estudio para definir diferentes categorías.',
    },
  ],
  complementario: [
    {
      texto:
        'Falcon, M. (2019, 17 de abril). Cómo identificar las necesidades de tus Clientes: Fase 1 de Diseño de Servicios. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ftwQTysZmdU',
    },
    {
      texto:
        'CavernaTech. (2019, 1 de septiembre). Definición de Requerimientos (funcionales y No funcionales) de Software.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
    {
      texto:
        'Bioestadistico. (2012,16 de marzo). Técnicas de recolección de datos | Metodología de la investigación científica. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6uRAkQdGmDU',
    },
    {
      texto:
        'Claros, C. (2018, 19 de abril) Técnicas de recolección de información – Encuesta.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yfCojeKh4ig',
    },
    {
      texto:
        'Sánchez Vallejo, J.(2019, 18 de septiembre). ¿Cómo hacer el instrumento de recolección de información?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ue8LBV2-Wk8',
    },
    {
      texto:
        'Ffbonta. (2016, 26 de julio). Ejemplos de Instrumentos de Recolección de Datos. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hv9yuPDTSss',
    },
    {
      texto:
        'Investigar es fácil. (2020, 16 de diciembre). Diferencia entre Técnica e instrumento de recolección de datos. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dNOlcG4TG_k',
    },
    {
      texto:
        'Quizhpi, J. (2019, 13 de noviembre). Tabulación de datos en Excel de un Cuestionario / Encuesta. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TkxBym1wOq4&t=4s',
    },
    {
      texto:
        'Centro de Enseñanza Aprendizaje Campus Sur UCHScrum. (2017). Qué es un proyecto.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x0xsFyvcZPM',
    },
    {
      texto:
        'Castellanos, E. (2018, 20 de febrero). Qué es un proyecto y tipo de proyectos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rhAtUaDDtqA',
    },
    {
      texto:
        'Castro, R. (2019, 21 de agosto). Organiza tus proyectos gratis con estas 12 aplicaciones.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hZPt-XxSGag',
    },
    {
      texto:
        'Master cyber class. (2019, 27 de agosto). Cómo redactar un acta 2021. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MRinHPpgjWs',
    },
    {
      texto:
        'Aprendizaje virtual. (2019, 5 de octubre). Cómo redactar un informe.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A1pUUAX2uDU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Giovanna Escobar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Servicios de Salud Regional Antioquia ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: ' Centro de Diseño y metrología Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Torres Tinoco'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
