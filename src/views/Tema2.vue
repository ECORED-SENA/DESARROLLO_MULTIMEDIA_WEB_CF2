<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Definición del proyecto
    
    p.mb-4 La correcta definición del proyecto facilita el camino para lograr los objetivos del mismo, una buena planeación permitirá la solución de los problemas planteados y a su vez poder visionar cuáles serán los recursos (humanos, físicos, técnicos y tecnológicos, financieros), estimar los tiempos de ejecución con sus acciones, actividades y metas que sumadas lleven al logro de los objetivos esperados.


    #t_2_1.titulo-segundo
      .h2 2.1 Qué es un proyecto
    
    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-5(style="text-align: justify; line-height: 1.8rem;") Según Raffino (2020):  <br>
          b.etiqueta El proyecto es un conjunto coherente e integral de actividades, herramientas, recursos y prácticas coordinadas e interrelacionadas que buscan alcanzar unos objetivos específicos, utilizando una metodología definida, en un periodo de tiempo determinado, con unos insumos y costos definidos o previamente estimados. El cual busca mejorar una situación, solucionar una necesidad sentida o un problema existente.
        
        .tarjeta.color-secundario.p-3.mb-5(style="border-radius:10px;")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema2/tema2-1/img2.svg", style="width:88px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video en YouTube de CEC - IAEN
                  p ¿Qué es un proyecto?
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=x0xsFyvcZPM" target="_blank")
                    span(style='font-weight: bold;') Enlace web
                    i.fas.fa-link

        figure
      .col-lg-5.align-self-center
          img(src='@/assets/curso/tema2/tema2-1/img1.svg', alt='Imagen que acompaña que es un proyecto', style="width: 505px;").mx-auto

    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Tipología del proyecto 
  

    .row.justify-content-center.mb-5
      .col-lg-7
        .bloqueTexto-c2.squareTopLeft
          p.mb-4 Es la forma en que se pueden clasificar los proyectos, es un instrumento que le provee información a quien debe tomar decisiones de inversión referente al proyecto; de acuerdo con esto se contemplan diferentes variables, las cuales pueden ser de tipo tecnológico, de desarrollo, de innovación, de formación y de divulgación, entre otros; la importancia de definir una tipología de proyecto es que pueda dar respuesta a una necesidad específica determinada por un cliente.
        .bloqueTexto-c.squareBottomRight
          p.mb-0 En esta parte se mencionan las tipologías de los proyectos que podrían ser utilizadas por algún tipo de comunidad o nicho de mercado según su línea de intervención, todos los aspectos formales de un proyecto varían dependiendo de la naturaleza del mismo, así como las partes que lo componen. Cuando un proyecto depende de sí mismo, es decir, no hay intermediarios, permite flexibilizar, retroalimentar y ajustar tiempos o modificaciones necesarias para lograr un mejor resultado y así concretar todos los objetivos.
            
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema2/tema2-1/img3.svg', alt='Imagen que acompaña tipologia del proyecto', style="width: 505px;").mx-auto

    p.mb-4 De acuerdo con lo ya anteriormente mencionado, se puede determinar la tipología de un proyecto de la siguiente manera:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon1.svg', alt='proyecto tecnológico', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br> tecnológico
          p.text-medium.text-center(style="margin-bottom:100px;") En este tipo de proyectos se espera un producto nuevo o una mejora, estos por lo general surgen del análisis de otros proyectos, aportando a la solución de errores o fallas, para ser corregidas.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon2.svg', alt='productivo productivo', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br> productivo
          p.text-medium.text-center(style="margin-bottom:50px;") Estos son proyectos que buscan ser viables y generar rentabilidad económica con el fin de obtener ganancias. Por lo generar quienes generan estos proyectos son empresa o particulares que están interesados en lograr beneficios económicos.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon3.svg', alt='proyecto social', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br> público o social
          p.text-medium.text-center(style="margin-bottom: 3px;") Estos son proyectos que buscan generar un impacto social en determinado contexto o población, no necesariamente con fines económicos, por lo general cuentan con promotores como ONG, Empresa, Organismos multilaterales o el Estado, con un fin de agregar valor en desde la perspectiva de responsabilidad social.
    
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon4.svg', alt='proyecto comunitario', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br> comunitario
          p.text-medium.text-center(style="margin-bottom: 90px;") Este tipo de proyectos buscan traer beneficios en un contexto o comunidad determinada, buscado dar solución a problemáticas particulares y necesidades priorizadas.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon5.svg', alt='proyecto de investigación', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br>de investigación
          p.text-medium.text-center(style="margin-bottom:20px;") Son proyectos con un foco investigativo, basado en una  metodológica determinada, por lo general académico se dan en el ámbito académico entregando un  informe especializado, realizando experimentos o revisiones documentales según el área a intervenir.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-2
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema2/tema2-1/icon6.svg', alt='proyecto educativo', style="width:86px;").mx-auto

          h4.mb-5.text-center Proyecto <br>educativo
          p.text-medium.text-center(style="margin-bottom:20px;") Son proyectos con iniciativas que persiguen objetivos de formación y aprendizaje en un contexto determinado, pueden ser innovadores, surgen del diagnóstico de una necesidad específica y por lo general, están ligados al sistema educativo y a sus alcances más allá de si es de carácter público o privado.


    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Recursos necesarios para el montaje del proyecto (definir tipología de intervención)

    p.mb-5 Reconociendo las diferentes tipologías de proyectos, es necesario destacar los que enmarcados en proyectos educativos para lo cual se darán las pautas a seguir en la estructura del cómo se formula el proyecto.

    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            h4.mb-4(style="color: #FB8C00;") Proyectos educativos enfocados a proyectos multimedia
            p En el escenario educativo, un proyecto implica el diseño y desarrollo de actividades organizadas y secuenciadas, las nuevas tendencias educativas implementan proyectos de uso multimedia, con el propósito de facilitar procesos de enseñanza y aprendizaje y hacer el uso de las Tecnologías de la Información y la Comunicación (TIC) se puede afirmar que un proyecto multimedia es una estrategia para diseñar un programa con diversas finalidades, que integran varios elementos como como: imágenes, texto, sonido, videos, animaciones e interactividad entre otros. Es importante manifestar que al momento de planear el proyecto se deben establecer los objetivos, un presupuesto y un tiempo determinado para su ejecución, como requerimiento principal se necesita tener claro el objetivo y las necesidades de los usuarios.
            
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure.mb-4
            img(src='@/assets/curso/tema2/tema2-3/img1.svg', alt='Proyectos educativos enfocados a proyectos multimedia', style="width: 284px;").mx-auto

    p.mb-4 Los proyectos se componen de cuatro etapas, en el siguiente recurso podrás identificar el orden y los elementos que componen cada una:


    .row.mb-5
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Diagnóstico")
            .col-md-10.mb-4.mb-md-0
              p En esta etapa se evalúa la necesidad y oportunidad del proyecto en su rango particular de acción, para determinar en qué condiciones debería darse y qué etapas involucrará. 
          .row.justify-content-center(titulo="Diseño")
            .col-md-10.mb-4.mb-md-0
              p En esta etapa se revisan las opciones, tácticas y estrategias que pueden conducir al logro de los objetivos del proyecto, en esta se evalúa la factibilidad del proyecto, su relevancia y sus necesidades puntuales.
          .row.justify-content-center(titulo="Diseño")
            .col-md-10.mb-4.mb-md-0
              p En esta se da marcha al proyecto y a todo lo establecido para lograr los objetivos en el tiempo establecido.
          .row.justify-content-center(titulo="Diseño")
            .col-md-10.mb-4.mb-md-0
              p En esta etapa se revisan los resultados del proyecto tras su ejecución. Es una etapa de control y de información, sustentada en la idea del mejoramiento y acumulación de factores de éxito a lo largo del tiempo.
      .col-lg-5.align-self-center
        figure.mb-4
            img(src='@/assets/curso/tema2/tema2-3/img2.svg', alt='imagen que acompaña las cuatro etapas de los proyectos', style="width: 484px;").mx-auto


    p.mb-4 Cabe mencionar que los proyectos multimedia educativos tienen que ser funcionales en relación con el propósito planteado, su funcionalidad se determinará por su nivel de eficacia para el logro de los objetivos planteados, la aportación metodológica y la relación entre el coste económico que supone su uso y su nivel de eficacia.
    p.mb-4 A continuación, se dan los pasos para llevar a cabo un proyecto multimedia educativo:


    .row.justify-content-center
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo="n")
          .row
            .col-md-7.mb-4.mb-md-0
              p.mb-3 #[strong Paso 1: ] 
                b.span--acentoB planificación y costos, 
                b-none esta fase se inicia cuando ya se ha definido la idea o necesidad de los usuarios para la cual se desarrollará el proyecto, luego se planifican los medios y contenidos que pueden utilizarse; es decir, textos, imágenes, animaciones, audio, video, entre otros.
              p.mb-0 Luego de la planificación se determinan los tiempos de creación de contenidos, se estima el tiempo real del proyecto, las actividades individuales y sus recursos, teniendo en cuenta esto se diseña el presupuesto.
            .col-md-5.align-self-center
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/tema2-3/img.png', alt='Texto que describa la imagen', style='width:295px;').mx-auto
          
          .row
            .col-md-5.align-self-center.mb-4.mb-md-0
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/tema2-3/img4.svg', alt='Texto que describa la imagen', style='width:295px;').mx-auto
                
            .col-md-7
              p.mb-4 #[strong Paso 2:] 
                b.span--acentoB producción, 
                b-none en esta fase se realizan cada una de las tareas planificadas para crear el producto final.
              p.mb-4 #[strong Prueba:] se evalúa que el contenido multimedia cumpla con los objetivos proyectados, de esta manera, se garantiza su correcto funcionamiento, de ser positivo el resultado, se puede pasar al proceso de producción de copias.
              p #[strong Distribución: ]se hace llegar el producto multimedia al usuario final con los requerimientos solicitados.
          
          .row
            .col-md-7.mb-4.mb-md-0
              p.mb-4 #[strong Paso 3:] 
                b.span--acentoB el guión del material multimedia, 
                b-none en esta fase se agrupan cada una de las pantallas y sus respectivos elementos, los contenidos y el cómo se puede presentar, la proyección de la ruta navegación (estructura general del programa y su manipulación) y el desarrollo final (elementos y acciones de cada pantalla que se utilizará, concretando los elementos principales de la multimedia). 
              p Una vez realizado el guion se debe hacer la revisión y evaluación de los materiales, si algo no funciona se debe cambiar o corregir.
          
            .col-md-5.align-self-center
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/tema2-3/img5.svg', alt='Texto que describa la imagen', style='width:295px;').mx-auto
          
          .row
            .col-md-5.align-self-center
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema2/tema2-3/img6.svg', alt='Texto que describa la imagen', style='width:295px;').mx-auto
                
            .col-md-7.mb-4.mb-md-0
              p #[strong Paso 4:] 
                b.span--acentoB realización, 
                b-none con los contenidos del guión listos, el usuario podrá acceder a la propuesta del diseño de los elementos gráficos, para que la realización permite una manipulación adecuada es importante el software de programación y el equipamiento adecuado para su uso. 
          
          .row
            .col-md-7.mb-4.mb-md-0
              p #[strong Paso 5:] 
                b.span--acentoB postproducción, 
                b-none ya con el proyecto en marcha se hace un proceso para hacer nuevas evaluaciones al material, con el fin de detectar posibles errores de ejecución y diseño.
          
            .col-md-5.align-self-center
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/tema2-3/img7.svg', alt='Texto que describa la imagen', style='width:295px;').mx-auto

    p.mb-4 Al final de las etapas nombradas se recomienda hacer una prueba piloto, la cual permitirá observar si el proyecto es funcional, si se adapta a los intereses y necesidades, si se consiguen los objetivos planeados, entre otros.
    
    h4.mb-5 Gestión de los recursos para los proyectos

    .row.mb-0.justify-content-center.fondo-tarjeta--tema2-v1
      .col-lg-12
        .row.mb-4.px-5.justify-content-center
          .col-lg-4.mb-4
            figure
              img(src='@/assets/curso/tema2/tema2-3/img8.svg', alt='Gestión de los recursos para los proyectos', style="width: 400px;").mx-auto
          .col-lg-8
            p.mb-4 La gestión de recursos es el proceso para identificar, adquirir, planificar y asignar los recursos para maximizar la eficiencia del proyecto. Un recurso es todo lo que se necesita para ejecutar una tarea, son muy importantes en la gestión de un proyecto, un ejemplo de estos:
            ul.lista-ul.ms-5
              li 
                i.fas.fa-pen-square
                | Personas / Equipo de proyecto
              li 
                i.fas.fa-pen-square
                | Equipos, instalaciones y materiales
              li 
                i.fas.fa-pen-square
                | Conocimiento / Experiencia
              li 
                i.fas.fa-pen-square
                | Software, Hardware
              li 
                i.fas.fa-pen-square
                | Dinero
    
    .row.mb-5.justify-content-center.fondo-tarjeta--tema2-v2
      .col-lg-12
        .row.mb-4.px-5.justify-content-center
          .col-lg-12.mb-4.p-0
            h4.mb-4 Planificar la gestión de recursos
            p.mb-4 Planificar la gestión Para una correcta planificación de la gestión de recursos se deben definir los requerimientos adecuadamente, estos son insumo para identificar qué clase de recursos se necesitan (humanos, tecnológicos “software”, rubros) y en qué cantidad, este proceso también permitirá la planeación de equipos de trabajo, la gestión de los recursos físicos, productos e investigación.
            p.mb-4 Los recursos pueden clasificarse en:
          
    .row.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-4(data-aos="flip-left")
          img(src='@/assets/curso/tema2/tema2-3/icon1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4(style='padding-top: 45px !important; padding-bottom: 27px !important;')
              h4 Recursos físicos
              p son tangibles, tiene que ver con instalaciones, oficinas, bodegas, terrenos, maquinaria, equipos y herramientas. 
      .col-lg-5
        .tarjeta-avatar-b.mb-4(data-aos="flip-left")
          img(src='@/assets/curso/tema2/tema2-3/icon2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              h4 Recursos comerciales
              p son las relaciones con los proveedores, distribuidores, clientes y socios, que constituyen colectivamente el ecosistema de negocios de una organización. 
    .row.justify-content-center
      .col-lg-5
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-4(data-aos="flip-left")
              img(src='@/assets/curso/tema2/tema2-3/icon3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--custom
                .p-4
                  h4 Recursos humanos
                  p son los empleados quienes están encargados de ejecutar una labor y se diferencian por su rol, conocimiento, habilidades, experiencia y capacidades personales.
          .col-lg-12
            .tarjeta-avatar-b.mb-5(data-aos="flip-left")
              img(src='@/assets/curso/tema2/tema2-3/icon5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--custom
                .p-4
                  h4 Recursos tecnológicos
                  p son todos aquellos que le dan un plus a la organización de acuerdo con su función “software”, se pueden catalogar como sistemas de organización, procesos, técnicas e información.
        
      .col-lg-5
        .tarjeta-avatar-b.mb-5(data-aos="flip-left")
          img(src='@/assets/curso/tema2/tema2-3/icon4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--custom
            .p-4
              h4 Recursos financieros
              p que son los tipos de fondos disponibles para la ejecución del proyecto, los cuales pueden ser en dinero en efectivo, fondos disponibles de los mercados financieros, gestionados, de alianzas empresariales entre otros, dichos recursos habitualmente no son considerados como parte de las operaciones, sin embargo, pueden ser decisivos en habilitar o restringir la aplicación de la estrategia. 

    p.mb-4 En este aparte es necesario identificar los recursos necesarios para el completo desarrollo del proyecto y su respectiva organización con el fin de adaptarse al entorno y sus posibles clientes.



    separador
    #t_2_4.titulo-segundo
      .h2 2.4 La estructura de un informe para un proyecto


    .row.mb-5
      .col-lg-7
        p.mb-4 El informe es un elemento de comunicación de un proyecto, contiene una serie de requerimientos específicos que pueden ir desde su presentación (ordenado y legible) claro y conciso, con una estructura precisa de ideas, interpretación de contenidos y fuentes verídicas y de calidad, es muy importante que el informe presentado sea de óptima calidad y consistente en materia del contenido adecuado; con ello, se permite que las personas que lo deseen revisar sin necesidad de ser expertas en el tema lo comprendan e interpreten.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Lo anterior se logra si la persona que realiza el informe cuenta con ideas claras, objetivas y se apoya de marcos de referencia adecuados, los cuales le den identidad al documento, dándole claridad en el desarrollo de las ideas pasa por la lógica de su exposición.
        p Prestar atención a los pasos para desarrollar un informe de proyecto que se presentan en el siguiente recurso de aprendizaje:
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema2/tema2-4/img1.svg', alt='imagen que acompaña', style="width: 505px;").mx-auto

    .row.justify-content-center
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 1
          .px-4
            h4.mb-4 Nombre del Proyecto / Nombre del Cliente
            p En este paso se puede usar el nombre que ya tiene el proyecto para dar claridad a los receptores del informe de proyecto, es importante incluir la fecha de realización, esto con el fin de no truncar la información del informe con posteriores tareas similares a estas.
      
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          .px-4
            h4.mb-4 Estado actual del proyecto
            p.mb-4 En esta etapa se muestra cual es el estado del proyecto si está en desarrollo, con algún aplazamiento, si presenta alguna novedad o en su defecto presenta una prórroga en su ejecución.
            p.mb-4 Aquí se pueden utilizar herramientas tecnológicas de gestión de proyectos las cuales permitan tener una información precisa del estado actual, y que por intermedio de un método de identificación el cual puede ser por colores (verde, en ejecución y al día; amarillo, con novedades e interrupciones; y rojo, con retraso). Muestre un panorama en tiempo real de cómo se encuentra el proceso.
            p Este ítem permite evidenciar y exponer próximas tareas y actividades del proyecto.
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          .px-4
            h4.mb-4 Breve resumen del informe de estado del proyecto
            p En este paso se plantea realizar un resumen del informe de estado del proyecto el cual es importante que sea breve, el propósito de esta acción es brindar a los lectores, un escenario que resalta los puntos más relevantes del proyecto, alcances y metas.
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 4
          .px-4
            h4.mb-4 Determinar tareas claves para destacar en el informe del estado actual del proyecto
            p.mb-4 En este paso se debe elegir acciones puntuales del proceso cronológicamente, estado actual y prospectiva, destacar las actividades cuáles pueden ser por semana, quincenal, mensual y trimestral; aquí se puede destacar un resultado o logro importante en la etapa de ejecución.
            p En este punto es donde se puede prever cualquier problema que obstaculice la ejecución del proyecto.
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 5
          .px-4
            h4.mb-4 Facilitar los enlaces de indagación y búsqueda o documentos soporte de investigación
            p Es necesario que todo informe de proyecto esté respaldado por un marco de referencia específico, el cual sea escrito (documental, bibliográfico), o con base en lo expresado por personas consultadas o por datos extraídos de una realidad que ha sido investigada mediante un método y unas técnicas suficientemente confiables.
      .col-md-10.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 6
          .px-4
            h4.mb-4 Conclusiones
            p Las conclusiones del proyecto deben estar sujetas con el propósito general y con el objetivo u objetivos planteados y la visión, estas dan la posibilidad de ver hasta dónde se profundizó en algunos de los temas tratados con un criterio objetivo y justificado de acuerdo con hechos o datos analizados en el transcurso del proyecto, la información debe ser completa y clara para que cada conclusión sea acertada. 


    separador
    #t_2_5.titulo-segundo
      .h2 2.5 Herramientas tecnológicas de seguimiento y monitoreo para proyectos


    .row
      .col-lg-5.align-self-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/tema2-5/img1.svg', alt='Herramientas tecnológicas de seguimiento y monitoreo para proyectos', style='width:505px;').mx-auto

      .col-lg-7
        p.mb-4 Es importante reconocer cuáles son las plataformas o software para optimizar la gestión del proyecto a ejecutar, estas herramientas proporcionan la estructura, la flexibilidad y el control necesario de las actividades del proyecto y del recurso humano (equipo de trabajo) para alcanzar resultados extraordinarios a tiempo y dentro del presupuesto.
        p.mb-4 Teniendo en cuenta esto, dichas herramientas facilitan una gestión eficiente del proyecto y sus etapas de intervención inicio, planificación, ejecución, control y fin, un software de gestión de proyectos tiene la capacidad de planificar, organizar, gestionar los recursos, llevar el avance y seguimiento de estos, además de disminuir los tiempos.
        .bloqueTexto-cH.squareBottomRight
          p En el siguiente recurso de aprendizaje, podrás visualizar las plataformas para gestión de proyectos más reconocidas el mercado, que aporta resultados de optimización en el campo empresarial, productivo, microempresarial y educativo:


    .tarjeta.tarjeta--azul2.p-4.mb-5
      SlyderA
        .row.mt-4
          .col-md-7.mb-4.mb-md-0
            p.mb-4 Este software permite organizar las tareas de un proyecto de forma rápida, fácil y segura, mediante la creación de tableros, también conocidos como post-its donde se pueden agregar comentarios, contenidos, archivos, adjuntos y etiquetas, se puede manipular a través de un correo electrónico personal, posibilita que otros usuarios participen de la planeación del proyecto, es compatible con plataformas web, Android e IOS, se basa en el método KANBAN, que permite la siguiente clasificación de tareas así:
            ul.lista-ul.ms-5
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong To do:] tareas por hacer.
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Doing:]  tareas que están siendo realizadas.
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Done:] tareas completadas.
          .col-md-5.align-self-center.mb-5
            figure
              img(src='@/assets/curso/tema2/tema2-5/img2.svg', alt='Texto que describa la imagen', style='width: 565px;').mx-auto
        
        .row
          .col-md-7.mb-4.mb-md-0
            p Es una herramienta gratuita de Google Docs que consta de hojas de cálculo en línea, es muy similar a las páginas de Excel, puede usar fórmulas, filas y columnas, permite analizar la información de una forma precisa y de fácil manipulación, un de los aspectos más importantes es que permite compartir y modificar la información relevante del proyecto de manera colaborativa por uno o varios usuarios en el mismo momento.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/tema2-5/img3.svg', alt='Texto que describa la imagen')
              
        .row
          .col-md-7.mb-4.mb-md-0
            p Permite  organizar la información del proyecto un solo lugar, correos electrónicos, calendario, hojas de cálculo, tareas y actividades, línea de tiempo, tableros, archivos compartidos,  incluye diversas funciones para aumentar la productividad de los equipos de trabajo, es compatible con plataformas web, Android e IOS.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/tema2-5/img4.svg', alt='Texto que describa la imagen')
              
        .row
          .col-md-7.mb-4.mb-md-0
            p Es un software para la gestión de proyectos, se puede hacer seguimiento, permite el trabajo colaborativo, integra las acciones del proyecto, usa colores para resaltar información crítica, avances y cortes, también permite asignar recursos con diagramas de Gantt, planificar presupuestos y crear diagramas para visualizar datos del proyecto. Se puede instalar local o usar en la nube.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/tema2-5/img5.svg', alt='Texto que describa la imagen')
              

    p.mb-4 A nivel empresarial es de gran importancia que se adapten a este tipo de escenarios y softwares, de acuerdo con su eficacia y funcionalidades, para que las mismas puedan avanzar correctamente y llevar a cabo de manera exitosa todos sus proyectos, independientemente de las situaciones adversas que se presenten.
    

    separador
    #t_2_6.titulo-segundo
      .h2 2.6 Diseño de actas e informes para documentar el proyecto

    .row.mb-4
      .col-lg-7
        .bloqueTexto-c.squareTopLeft
          p.mb-4 La documentación de proyecto es importante en cada una de las etapas de este, estos documentos soportan el registro necesario para su ejecución, permite hacer seguimiento, monitoreo y trazabilidad; es importante dejar consignadas inquietudes, avances, retroalimentaciones, cortes, actas y demás acciones que un proyecto implica con el fin de determinar las puntuales y concretas dentro del marco de ejecución de cualquier proyecto.
        p.mb-4 Las actas son documentos escritos donde quedan registrados acuerdos, decisiones, variables que han sido tratados y adoptados en una reunión determinada de algún tema en específico, con el objetivo de poder certificar lo que ha ocurrido en la reunión y darle una validez legal.
        
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Los formatos de acta de reunión comúnmente se encargan de capturar los aspectos más significativos e importantes de una reunión, por lo general contiene los siguientes datos:
        
        ul.lista-ul.ms-4
          li 
            i.fas.fa-pen-square
            p.mb-0 El nombre de la entidad que va a celebrar la reunión.
          li 
            i.fas.fa-pen-square
            p.mb-0 El lugar dónde se celebra la reunión y la fecha exacta.
          li 
            i.fas.fa-pen-square
            p.mb-0 Un listado con las personas que están presentes en la reunión.
          li 
            i.fas.fa-pen-square
            p.mb-0 Un resumen con todos los asuntos tratados, compromisos y las decisiones tomadas, tareas por realizar
          li 
            i.fas.fa-pen-square
            p.mb-0 Cuando la reunión termina y ya está elaborado el acta, se procede a remitir una copia del acta a los participantes en la reunión con el fin que estos den su aprobación y la firmen.
          li 
            i.fas.fa-pen-square
            p.mb-0 Por lo general se lleva un consecutivo de actas de acuerdo con las acciones del proyecto a ejecutar.
          li 
            i.fas.fa-pen-square
            p.mb-0 En la mayoría de las ocasiones se cuenta con un comité de seguimiento, interventoría y/o supervisión para darle seguimiento y alcance a los alcances del proyecto.

      .col-lg-5.align-self-center
          figure
            img(src='@/assets/curso/tema2/tema2-6/img.png', alt='Diseño de actas e informes para documentar el proyecto', style="width:505px;").mx-auto




    p Apreciado aprendiz, es importante que usted pueda ir más allá de identificar o comprender conceptos vistos, por eso le animamos a buscar las formas de cómo llevarlos a cabo en su contexto. Allí es donde tiene utilidad su formación. 







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
