<template>
  <div class="mission">
    <div class="text-div">
      <h1>Mission</h1><br>
      <p>Cras aliquet laoreet lectus, quis aliquam lectus tincidunt ac. Proin aliquam nisl vitae nibh volutpat, vitae suscipit turpis pretium. Maecenas sodales elementum ante at sagittis. Aenean et rutrum ante. Nunc maximus molestie odio quis interdum. Duis eu est eget odio aliquet venenatis. Aenean mollis euismod magna vel dignissim. Etiam eget libero consequat leo condimentum aliquam. Sed vehicula, diam vel tempus dictum, justo risus elementum tellus, eu convallis mauris arcu in arcu. Praesent felis odio, auctor id leo ut, tincidunt ornare augue.</p>
      <img id='back' src='./../../assets/back.png' @click="$router.go(-1)">
    </div>
    <div class="pic-div">
      <postcard-photo type='square' :img="'./../static/bookmark.jpeg'"></postcard-photo>
    </div>
  </div>
</template>
<script>
import PostcardPhoto from './PostcardPhoto.vue'
export default {
  components: {
    PostcardPhoto
  }
}

</script>
<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  margin: 20px;
}

#back {
  bottom: 0;
  right: 51%;
}

.text-div,
.pic-div {
  max-width: 50%;
  min-height: 825px;
}

.text-div {
  float: left;
  padding: 60px;
}

.text-div p {
  text-align: justify;
  padding: 10px;
  font-size: 1.25rem;
}

.pic-div {
  height: 100%;
  width: 50%;
  float: right;
}

/*MEDIA QUERIES*/
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .text-div{
    padding: 20px;
  }

  .postcard-photo{
    margin-top: min(15vh, 100px)
  }

  .text-div h4{
    font-size: .9em;
  }

  .text-div p{
    font-size: 1em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .postcard-photo{
    margin-top: 15vh;
  }
}

</style>
