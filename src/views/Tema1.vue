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
                p.mb-0 Las fuentes primarias contienen información original de primera mano, proveniente de ideas, conceptos, resultado de investigaciones que con datos que no han sido interpretados o evaluados por otras personas. En otras palabras, en una información directa que no ha sido modificada, por ejemplo: libros, monografías, publicaciones periódicas, documentos oficiales, informes técnicos de instituciones públicas o privadas, tesis, trabajos presentados en conferencias o seminarios, videos, documentales, foros, artículos periodísticos y testimonio de expertos.
            
            .row.justify-content-center.p-2.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-2/icon1.svg', alt='Avatar', style="width:105px").mx-auto
              .col-lg-10.align-self-center
                p.mb-0 Las fuentes secundarias son las que ya han procesado información de una fuente primaria. Este proceso puede consistir en una interpretación, un análisis o la extracción y organización de la fuente primaria.

            .row.justify-content-center.p-2.mb-2(style="")
              .col-auto
                figure.mb-1
                  img(src='@/assets/curso/tema1/tema1-2/icon1.svg', alt='Avatar', style="width:105px").mx-auto
              .col-lg-10.align-self-center
                p.mb-0 Las fuentes terciarias recopilan información de fuentes primarias o secundarias y se utilizan para obtener datos o buscar una idea general sobre algún tema como la bibliografía o las citas que hacen referencia documentos que contienen autores, títulos y publicaciones.

    p.mb-4 Para recolectar la información de un proyecto, se pueden aplicar a través de las herramientas que se presentan a continuación:


    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Elaborar los instrumentos de recolección de información	


    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Aplicar los instrumentos de recolección		


    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Tabular los resultados de recolección de información



  
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
