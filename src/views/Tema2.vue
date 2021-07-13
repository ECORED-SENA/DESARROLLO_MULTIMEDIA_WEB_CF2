<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Definición del proyecto
    
    #t_2_1.titulo-segundo
      .h2 2.1 Qué es un proyecto
    

    #t_2_2.titulo-segundo
      .h2 2.2 Tipología del proyecto 


    #t_2_3.titulo-segundo
      .h2 2.3 Recursos necesarios para el montaje del proyecto (definir tipología de intervención)


    #t_2_4.titulo-segundo
      .h2 2.4 La estructura de un informe para un proyecto

    #t_2_5.titulo-segundo
      .h2 2.5 Herramientas tecnológicas de seguimiento y monitoreo para proyectos


    #t_2_6.titulo-segundo
      .h2 2.6 Diseño de actas e informes para documentar el proyecto


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
