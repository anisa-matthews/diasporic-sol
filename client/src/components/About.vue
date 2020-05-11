<template>
  <div class="about">
    <div class='text-div'>
      <div id='meet-anisa'>
        <h1>Meet Anisa</h1><h4>Founder, Head Developer</h4>
        <p>Anisa Matthews is a recent graduate from New York University. There she studied Computer Science and Integrated Digital Media. Coming to New York City opened Anisa up to an entirely new way of relating to her identity not only as a young black woman, but also as a spiritual worker and healer. Since her trip to Havana, Cuba, her first time abroad, Anisa has dedicated her free time to studying different parts of the African Diaspora, and in particular the spiritual practices that have born from these parts of the world.</p>
      </div>
      <div id='meet-jas'>
        <h1>Meet Jasmine</h1><h4>Head Writer, Scholar</h4>
        <p>Jasmine Briscoe is a recent graduate from New York University who studied Social Cultural Analysis with a focus in Africana Studies, as well as Psychology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales dapibus magna. Ut ut risus eget leo dictum mollis. Cras molestie feugiat mauris. Cras posuere eget nunc eu imperdiet. Suspendisse cursus ipsum eu rhoncus fermentum. Nulla ac elit dignissim, blandit purus id, congue tortor. Mauris vitae tempus libero. Duis viverra id purus in tristique.</p>
      </div>
      <img id='back' src='./../../assets/back.png' @click="$router.go(-1)">
    </div>
    <div class="pic-div">
      <postcard-photo id='anisa' type='square' :img="'./../static/anisa.jpeg'"></postcard-photo>
      <postcard-photo id='jas' type='square' :img="'./../static/jas.png'"></postcard-photo>
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
  margin: 2vh;
}

#back {
  bottom: 0;
  left: 51%;
  transform: scaleX(-1);
}

.text-div,
.pic-div {
  max-width: 50%;
  /*min-height: 1600px;*/
}

.text-div {
  float: right;
  padding: 60px;
}

.text-div p {
  text-align: justify;
  padding: 10px;
  font-size: 1.5rem;
}

.text-div h4{
  font-size: 1.25em;
}

.pic-div {
  height: 100%;
  width: 50%;
  float: left;
}

#meet-jas{
  margin-top: 37vh;
  margin-bottom: 20vh;
}

#jas{
  margin-top: 17vh;
}

/*MEDIA QUERIES*/
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .text-div{
    padding: 20px;
  }

  #anisa{
    margin-top: min(15vh, 70px)
  }

  #meet-jas {
    margin-top: 10vh;
    margin-bottom: 20px;
  }

  #jas {
    margin-top: 50vh;
  }

  .text-div h4{
    font-size: .9em;
  }

  .text-div p{
    font-size: 1em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  /* For tablets: */
  .postcard-photo{
    margin-top: 10vh;
  }

  .text-div h4{
    font-size: .9em;
  }

  .text-div{
    padding: 60px 25px;
  }

  .text-div p{
    font-size: 1em;
  }

  #meet-jas {
    margin-top: 35vh;
  }

  #jas {
    margin-top: min(50vh, 260px);
  }
}

</style>
