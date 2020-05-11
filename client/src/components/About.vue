<template>
  <div class="about">
    <div class='text-div'>
      <br><br><h1>Meet Anisa</h1><h4>Founder, Head Developer</h4><br>
      <p>Anisa Matthews is a recent graduate from New York University. There she studied Computer Science and Integrated Digital Media. Coming to New York City opened Anisa up to an entirely new way of relating to her identity not only as a young black woman, but also as a spiritual worker and healer. Since her trip to Havana, Cuba, her first time abroad, Anisa has dedicated her free time to studying different parts of the African Diaspora, and in particular the spiritual practices that have born from these parts of the world.</p>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <h1>Meet Jasmine</h1><h4>Head Writer, Scholar</h4><br>
      <p>Jasmine Briscoe is a recent graduate from New York University who studied Social Cultural Analysis with a focus in Africana Studies, as well as Psychology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales dapibus magna. Ut ut risus eget leo dictum mollis. Cras molestie feugiat mauris. Cras posuere eget nunc eu imperdiet. Suspendisse cursus ipsum eu rhoncus fermentum. Nulla ac elit dignissim, blandit purus id, congue tortor. Mauris vitae tempus libero. Duis viverra id purus in tristique.</p>
      <img id='back' src='./../../assets/back.png' @click="$router.go(-1)">
    </div>
    <div class="pic-div">
      <postcard-photo type='square' :img="'./../static/anisa.jpeg'"></postcard-photo>
      <br><br><br><br><br><br>
      <postcard-photo type='square' :img="'./../static/jas.png'"></postcard-photo>
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
  left: 51%;
  transform: scaleX(-1);
}

.text-div,
.pic-div {
  max-width: 50%;
  min-height: 1600px;
}

.text-div {
  float: right;
  padding: 60px 30px;
}

.text-div p {
  text-align: justify;
  padding: 10px;
  font-size: 1.25rem;
}

.pic-div {
  height: 100%;
  width: 50%;
  float: left;
}
</style>
