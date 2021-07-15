<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Investigación y recolección de información

    p.mb-4 Desarrollar un proyecto requiere de habilidades para la recolección de información, el análisis, solución de problemas, comunicación e investigación, con el fin de poderlo entregar como producto final acorde con las necesidades del cliente, el público objetivo y los interesados.

    #t_1_1.titulo-segundo
      .h2 1.1 Identificación de las necesidades del cliente 	


    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 El objetivo de cualquier proyecto multimedia debe partir de la identificación de requisitos y necesidades del cliente, a fin de buscar cumplir con estas y contar los insumos para la correcta definición del proyecto, evitando interpretaciones personales o supuestos que eviten el logro de los objetivos.
        .cajon.color-primario.p-4.mb-4(style="background-color: #b2ebf25c")
          p.mb-0 El análisis de requerimientos busca describir las necesidades, por lo cual es imperativo contar con información de primera mano, esta se puede obtener mediante entrevistas con el cliente y obteniendo documentación existente. 
        p.mb-0 Para que la metodología sea efectiva en los puntos enunciados se definieron las siguientes etapas que se deben desarrollar para la correcta identificación de necesidades de los clientes: 
      .col-lg-5.align-self-center
        figure(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img1.svg', alt='', style="width: 505px;").mx.auto


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Obtener y analizar información de las necesidades del cliente" :icono="require('@/assets/curso/tema1/icon1.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.align-self-center
            p En este punto es muy importante escuchar al cliente, sus necesidades, exigencias y expectativas, a fin de tener una visión general y evaluar la viabilidad del producto que satisfaga dichas necesidades.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style="width: 321px;").mx-auto
        

      .py-4.py-md-5(titulo="Definición del alcance" :icono="require('@/assets/curso/tema1/icon2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.align-self-center
            p En esta etapa es necesario delimitar claramente el alcance. Indicar que está dentro y fuera del alcance. Debe ser aprobado por el cliente. Se recomienda describir los resultados esperados y dar claridad de lo que no serán cubierto o entregado. Se deben  definir tipos de datos, fuentes de datos, áreas involucradas en el alcance y condiciones generales.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 400px;").mx-auto

      
      .py-4.py-md-5(titulo="Requerimientos funcionales y no funcionales" :icono="require('@/assets/curso/tema1/icon3.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.align-self-center
            p En esta etapa se deben relacionar las declaraciones explícitas de lo que hará el sistema y lo que no debe hacer, garantizando que todos las necesidades del cliente están cubiertas y definidas. Tener presente que los requerimientos no funcionales hacen referencia a las características generales y restricciones del sistema, tales como la eficiencia, seguridad, usabilidad, entre otros.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img4.svg', alt='', style="width: 325px;").mx-auto

      
      .py-4.py-md-5(titulo="Entregable con identificación de necesidades" :icono="require('@/assets/curso/tema1/icon4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.align-self-center
            p  De esta etapa debe generarse un documento que sirva como base para aclarar las necesidades del cliente y su aprobación del alcaná y viabilidad acorde a la identificación de requerimientos.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 400px;").mx-auto
              

    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Seleccionar la técnica de recolección de información	

    .row.mb-4.justify-content-center.fondo-tarjeta--tema1
      .col-lg-12
        .row.mb-4.px-4
          .col-lg-4.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/tema1-2/img1.svg', alt='', style="width: 400px;").mx-auto
          .col-lg-8.p-0
            p.mb-4 Con el objeto de realizar un levantamiento de los requerimientos del proyecto multimedia, los encargados de ejecutarlo deberán reunirse con los clientes y usuarios que se beneficiarán de su implementación, para recolectar los datos necesarios que permitirán definir el alcance del proyecto y los objetivos que se persiguen con él, es importante identificar en el proceso de desarrollo la tipología, plataforma tecnológica, lenguajes de programación que se deben utilizar, prototipo, costos y presupuestos, al igual que la determinación de la estructura organizativa, el plan de trabajo, el equipo de colaboradores y las actividades a ejecutar, estableciendo los tiempos de análisis, planificación, desarrollo, ejecución y evaluación. 
            p.mb-4 Para lo anterior es necesario seleccionar la técnica más adecuada para la recolección de la información del proyecto. Según Maranto (2015) la información se puede obtener de fuentes primarias, secundarias o terciarias:
        
        .row.mb-5.justify-content-center
          .col-lg-10.p-0
            
            .row.justify-content-center.p-2.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-2/icon1.svg', alt='Avatar', style="width:105px").mx-auto
              .col-lg-10.align-self-center
                p.mb-0 Las 
                  b.span--acento1 fuentes primarias 
                  b-none contienen información original de primera mano, proveniente de ideas, conceptos, resultado de investigaciones que con datos que no han sido interpretados o evaluados por otras personas. En otras palabras, en una información directa que no ha sido modificada, por ejemplo: libros, monografías, publicaciones periódicas, documentos oficiales, informes técnicos de instituciones públicas o privadas, tesis, trabajos presentados en conferencias o seminarios, videos, documentales, foros, artículos periodísticos y testimonio de expertos.
            
            .row.justify-content-center.p-2.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-2/icon1.svg', alt='Avatar', style="width:105px").mx-auto
              .col-lg-10.align-self-center
                p.mb-0 Las 
                  b.span--acento1 fuentes secundarias 
                  b-none son las que ya han procesado información de una fuente primaria. Este proceso puede consistir en una interpretación, un análisis o la extracción y organización de la fuente primaria.

            .row.justify-content-center.p-2.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-2/icon1.svg', alt='Avatar', style="width:105px").mx-auto
              .col-lg-10.align-self-center
                p.mb-0 Las 
                  b.span--acento1 fuentes terciarias 
                  b-none recopilan información de fuentes primarias o secundarias y se utilizan para obtener datos o buscar una idea general sobre algún tema como la bibliografía o las citas que hacen referencia documentos que contienen autores, títulos y publicaciones.

    p.mb-5 Para recolectar la información de un proyecto, se pueden aplicar a través de las herramientas que se presentan a continuación:

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-secundario

        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img2.svg', alt='', style='width:311px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0
            h4 Entrevistas
            p.mb-4 Es una conversación interpersonal estructurada que requiere de la experiencia del entrevistador para cumplir el objetivo de obtener los datos e información necesaria que permita definir el alcance del proyecto. Los aspectos más importantes que se deben tener en cuenta para aplicar esta técnica son:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Preparar las preguntas de tal forma que la entrevista pueda enfocarse en los aspectos relevantes que le permitan al entrevistador conocer más a fondo las necesidades del cliente, siendo necesario una documentación previa para contextualizarse de la situación de la organización.
              li 
                i.fas.fa-pen-square
                p.mb-0 Identificar en la organización cuáles son las personas clave que proporcionan la mayor información y los detalles necesarios de la misma que permitan que el entrevistador se lleve una idea no solo global sino de tallada del proyecto.
              li 
                i.fas.fa-pen-square
                p.mb-0 Utilizar un formato de pregunta abierta que permita obtener el máximo de detalles de lo que necesita la organización y tomar el tiempo mínimo necesario con cada persona entrevistada.
        
        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img3.svg', alt='', style='width:306px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.p-0
            h4 Cuestionario
            p.mb-4 Es un formato que contiene preguntas sobre una temática específica, el cual es entregado de manera física o digital. Generalmente está técnica se utiliza cuando el grupo objetivo es numeroso y se necesita obtener información rápidamente. Los aspectos que se deben considerar al aplicar el cuestionario son:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Realizar preguntas abiertas o cerradas según el tipo de información que se necesite recopilar. Es decir, si los datos a recopilar son cuantitativos es recomendable el tipo de pregunta cerrada con lo cual se puede obtener información estadística de las respuestas de los participantes y si la información que necesitamos obtener es de tipo cualitativo como por ejemplo cuando se indaga por la manera de pensar respecto a algo, en este caso se deben elaborar preguntas de tipo abierto que den la oportunidad de expresar opiniones libremente.
              li 
                i.fas.fa-pen-square
                p.mb-0 Emplear formatos estandarizados a los diferentes grupos objetivos y además no incluir el nombre del participante proporcionará información más confiable, puesto que tendrá mayor claridad en las preguntas y habrá mayor libertad de expresión en sus respuestas.
              li 
                i.fas.fa-pen-square
                p.mb-0 Seleccionar los grupos objetivos previamente, garantizará que la información que se requiere extraer de ellos es la que se necesita para definir el proyecto y darle la estructura para su ejecución.

        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img4.svg', alt='', style='width:306px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.p-0
            h4 Diseño de Aplicaciones Conjuntas (JAD)
            p.mb-4 Joint Application Design -JAD- es una técnica en la que el grupo de usuarios y el de analistas desarrolladores del proyecto, se reúnen en una o varias sesiones de trabajo e identifican los puntos clave para el diseño, desarrollo e implementación del producto multimedia. 
            p.mb-4 Los usuarios de la organización expertos en la temática se involucran directamente para proporcionar mayor claridad y fluidez al proyecto. Los aspectos a tener en cuenta al aplicar esta técnica son:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Involucrar al gerente del proyecto junto con los colaboradores expertos en la temática, al igual que al analista, diseñador y desarrollador del software que intervendría en la ejecución.
              li 
                i.fas.fa-pen-square
                p.mb-0 Planear las sesiones de trabajo necesarias con fechas establecidas en un cronograma, con el objeto de obtener los requerimientos iniciales, de manera completa y sin errores.
              li 
                i.fas.fa-pen-square
                p.mb-0 Concluir las sesiones de trabajo con un documento validado por usuarios y analistas en el que se registren los requerimientos del proyecto y la alternativa de solución tecnológica más adecuada.
          
        
        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img5.svg', alt='', style='width:316px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0
            h4 Prototipos 
            p.mb-4 La elaboración de un prototipo o maqueta permite a los analistas obtener una retroalimentación de los usuarios de manera rápida, puesto que ellos interactúan con lo que sería su producto final, en lugar de discutir de manera abstracta sobre lo que debería obtenerse en el proyecto. Para aplicar esta técnica se debe tener en cuenta:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Realizar la elaboración gradual del prototipo de acuerdo con la retroalimentación que hacen los usuarios a través de su interacción con el modelo.
              li 
                i.fas.fa-pen-square
                p.mb-0 Organizar por ciclos la retroalimentación del prototipo, hasta obtener todos los requisitos para pasar a la fase de diseño y construcción.
              li 
                i.fas.fa-pen-square
                p.mb-0 Incluir en el presupuesto del proyecto el costo de elaboración del prototipo.

        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img6.svg', alt='', style='width:306px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0
            h4 Observación
            p.mb-4 Es una técnica que permite visualizar el contexto de la organización y sus procesos antes de interactuar con los usuarios para tener una idea integral de la misma, identificar sus necesidades y determinar los requerimientos de un proyecto multimedia. Se debe tener en cuenta:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Solicitar a las directivas hacer parte de la organización con el rol de observador de cada proceso, sin ningún tipo de interacción con estos.
              li 
                i.fas.fa-pen-square
                p.mb-0 Tomar nota de todos los aspectos y detalles para posteriormente analizar su relevancia dentro del proyecto. 
              li 
                i.fas.fa-pen-square
                p.mb-0 Evaluar la relevancia de los aspectos anotados para determinar el grado en el que aportan al levantamiento de los requerimientos del proyecto, de acuerdo con esto planear la recolección de los datos.
          
        
        .row.justify-content-center(titulo="")
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-2/img7.svg', alt='', style='width:306px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0
            h4 Análisis documental
            p.mb-4 Es una técnica de recolección en la cual el analista puede recoger información de la organización y sus procesos consultando manuales, reportes y documentos.
            p.mb-4 La documentación no refleja la forma en que los colaboradores desarrollan las operaciones, por lo tanto esta técnica se debe combinar con otra para complementar la información. Los aspectos a tener en cuenta para llevarla a cabo son:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Solicitar los documentos que tengan la información que requiere el proyecto, para no consumir tiempo que se debe emplear en el análisis.
              li 
                i.fas.fa-pen-square
                p.mb-0 Establecer un formato en el que se relacione la fuente documental, la fecha de origen, la fecha de consulta y una breve descripción del contenido del documento.
              li 
                i.fas.fa-pen-square
                p.mb-0 Combinar con otra técnica para retroalimentar la información.


    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Elaborar los instrumentos de recolección de información	

    p.mb-4 Para la elaboración de instrumentos para la obtención y recolección de datos, es importante indagar acerca de instrumentos previamente diseñados o construir uno nuevo de acuerdo las necesidades del proyecto y el cliente. 
    p.mb-4 A continuación, se presentan los pasos a considerar para la construcción de un instrumento de recolección de datos:

    .row.mb-5
      .col-lg-7.mb-5
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Listar variables") Listar las variables que se pretenden medir u observar (¿qué se va a medir?).
          
          p(numero="2" titulo="Revisar definición") Revisar su definición conceptual y comprender su significado (¿Cuál es su significado?, ¿sobre qué se mide?, ¿cuándo?, ¿dónde?, ¿cuál es el propósito?).
          
          p(numero="3" titulo="Elegir instrumento") Elegir el instrumento o los instrumentos que hayan sido favorecidos por la comparación y adaptarlos al contexto del proyecto.
          
          p(numero="4" titulo="Nivel de medición") Indicar el nivel de medición de cada variable (Escala de Medición).
          
          p(numero="5" titulo="Codificación de datos") Indicar cómo se van a codificar los datos.
          
          p(numero="6" titulo="Instrumento") Instrumento definitivo.
      
      .col-lg-5.mb-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/tema1-3/img1.svg', alt='', style='width:505px;').mx-auto

    p(style="margin-bottom:80px;") En la imagen se puede apreciar cómo organizar la información para la recolección de información. 

    figure
      img(src='@/assets/curso/tema1/tema1-3/img2.svg', alt='', style='width:795px;').mx-auto



    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Aplicar los instrumentos de recolección		


    p.mb-4 Para aplicar un instrumento de recolección de datos según Castro Márquez (2016) es necesario:

    .row.justify-content-center.mb-4
      .col-lg-9
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 Conocer qué es lo que se va a preguntar o determinar en función del problema planteado, de las variables presentes.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/img1.svg', alt='Avatar', style="width:200px;").mx-auto
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 Se debe determinar cuál o cuáles son los instrumentos más idóneos para encontrar las respuestas que interesan.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/icon2.svg', alt='Avatar', style="width:200px;").mx-auto
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 Se debe conocer ese, o esos instrumentos en particular, cómo se aplica, cómo se elabora, el número de preguntas, etc.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/icon3.svg', alt='Avatar', style="width:200px;").mx-auto
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 Es recomendable una aplicación previa a un número reducido de entrevistados al objeto de poder corregir cualquier falla.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/icon4.svg', alt='Avatar', style="width:200px;").mx-auto
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 Es recomendable que los ítems formulados sean factibles de cuantificarse de llevarse a una tabla o gráfico donde se pueda observar el comportamiento en detalle de esa variable investigada.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/icon5.svg', alt='Avatar', style="width:200px;").mx-auto
        
        .row.justify-content-center.px-3.py-2.mb-3(data-aos="fade-up" style="background-color:#CBDEF4; border-radius:20px;")
          .col-lg-1.align-self-center.p-0
            figure.mb-2
              img(src='@/assets/curso/tema1/tema1-4/icon1.svg', alt='Avatar', style="width:60px").mx-auto
          .col-lg-11.align-self-center
            .row
              .col-lg-10.col-md-9.align-self-center
                p.mb-0 En la recopilación de datos se debe seguir entre otros los siguientes pasos: la selección de la técnica, su diseño, su aplicación y la recopilación de la información, para finalmente procesar.
              .col-lg-2.col-md-3.align-self-center.p-0
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-4/icon6.png', alt='Avatar', style="width:200px;").mx-auto
        
        


    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Tabular los resultados de recolección de información

    p.mb-5 Luego de organizar la matriz de datos, se procede a la tabulación de los mismos. Según Rojas Soriano (1986): 
      b.etiqueta “La tabulación es el proceso mediante el cual los datos recopilados se organizan y concentran, con base a determinadas ideas o hipótesis, en tablas o cuadros para su tratamiento estadístico”.

    .row.mb-5.justify-content-center.fondo-tarjeta--tema1-5
      .col-lg-12
        .row.mb-4.px-5.justify-content-center
          .col-lg-4.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/tema1-5/img1.svg', alt='tabulación', style="width: 400px;").mx-auto
          .col-lg-7.p-0
            h4.mb-4 Tabulación
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Distribución de frecuencias:] su objetivo es presentar los datos de una manera que facilite su comprensión e interpretación. La frecuencia es el número de casos en cada categoría.
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Frecuencia absoluta:] muestra la cantidad de valores absolutos que presenta cada categoría en que ha sido registrada la variable.
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Frecuencia relativa:] consiste en transformar los valores absolutos en porcentajes. Se divide la frecuencia absoluta por el total de los casos en estudio y multiplicando por cien.
              li 
                i.fas.fa-pen-square
                p.mb-0 #[strong Frecuencia acumulativa:] este tipo de distribución tiene sentido en variables de tipo intervalo u ordinal, pero no en las nominales.
        
        .row.mb-5.px-4.justify-content-center
          .col-lg-11.mb-4
            p En la imagen podemos observar un ejemplo de tabulación, teniendo en cuenta la distribución de las frecuencias. (Gráfica de preguntas de opción múltiple)
          figure.mb-5
            img(src='@/assets/curso/tema1/tema1-5/img2.svg', alt='Grafico preguntas de opción multiple', style="width: 1030px;").mx-auto
          .col-lg-12.px-4
            p.mb-4 Consideraciones sobre las tablas y gráficos:
            ul.lista-ul
              li 
                i.fas.fa-pen-square
                p.mb-0 Las tablas de distribución de frecuencia y los gráficos, sirven para la presentación de los resultados de la investigación.
              li 
                i.fas.fa-pen-square
                p.mb-0 Le permiten al lector entender claramente la información que se desea transmitir acerca de la investigación.


    p.mb-5 A continuación, podrá explorar las consideraciones para los tipos de recolección de datos de análisis cualitativo, variables cualitativas discretas y continuas, revisa las descripciones con atención:


    TabsC.color-acento-botones.mb-5
      
      .py-3.py-md-4(titulo="Análisis cualitativo")
        .row.justify-content-center.mt-5
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-5/img3.svg', alt='Análisis cualitativo', style="width: 350px;").mx-auto
              
          .col-md-6.mb-4.mb-md-0
            p En la recolección de datos de este tipo se puede presentar generalmente varios tipos de datos, como por ejemplo:
            ul.lista-ul.ms-4.mb-4
              li 
                i.fas.fa-pen-square
                p.mb-0 Visuales.
              li 
                i.fas.fa-pen-square
                p.mb-0 Auditivas.
              li 
                i.fas.fa-pen-square
                p.mb-0 Textos escritos.
              li 
                i.fas.fa-pen-square
                p.mb-0 Expresiones verbales o no verbales.
              li 
                i.fas.fa-pen-square
                p.mb-0 Narraciones del investigador.
            p.mb-4 Tener presente que se debe analizar cada dato (que por sí mismo tiene un valor), deducir similitudes y diferencias con otros datos y se organizarlos por categorías.
            p.mb-4 De este análisis emergen descripciones, expresiones, temas, patrones, hipótesis y teorías, se establecerán los hallazgos que estarán fundamentas de acuerdo con las respuestas obtenidas.
      
      .py-3.py-md-4(titulo="Variables Cuantitativas Discretas")
        .row.justify-content-center.mt-5
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-5/img4.svg', alt='Variables Cuantitativas Discretas', style="width: 370px;").mx-auto
              
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Para las variables cuantitativas discretas se pueden utilizar las mismas técnicas de tabulación de las variables cualitativas ordinales.
            p.mb-4 Cuando el número de valores numéricos de la variable es muy grande, pueden agruparse las medidas en intervalos.
      
      .py-3.py-md-4(titulo="Variables Cuantitativas Continuas")
        .row.justify-content-center.mt-5
          .col-md-4.align-self-center
            figure
              img(src='@/assets/curso/tema1/tema1-5/img5.svg', alt='Variables Cuantitativas Continuas', style="width: 460px;").mx-auto
              
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Para este tipo de variable se sugiere agruparlas en intervalos contiguos denominados intervalos de clase. Cada intervalo de clase tiene un valor representativo, que es el valor intermedio, al que se denomina marca de clase.
            p.mb-4 Los intervalos deben cumplir las siguientes normas:
            ul.lista-ul.ms-4.mb-4
              li 
                i.fas.fa-pen-square
                p.mb-0 Cada dato debe pertenecer solo a un intervalo.
              li 
                i.fas.fa-pen-square
                p.mb-0 Todos los datos deben estar incluidos en algún intervalo.





  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
