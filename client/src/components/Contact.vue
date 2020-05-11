<template>
  <div class="contact">
    <h1>Connect with us</h1>
    <div class='grid'>
      <div class='info'>
        <postcard-photo type='square' :img="'./../static/anisa.jpeg'"></postcard-photo><br><br>
        <a href='https://www.instagram.com/flowersnfros/'>Instagram</a><br>
        <a href='https://www.linkedin.com/in/anisa-matthews-27b600154/'>LinkedIn</a><br>
        <a href='mailto:anisa.matthews11@gmail.com?'>Email</a>
      </div>
      <div class='info'>
        <postcard-photo type='square' :img="'./../static/jas.png'"></postcard-photo><br><br>
        <a href='https://www.instagram.com/_wolfbabe_/'>Instagram</a><br>
        <a href='https://www.linkedin.com/in/jasmine-briscoe-260b88140'>LinkedIn</a><br>
        <a href='mailto:jasminebriscoe13@gmail.com?'>Email</a>
      </div>
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
.contact {
  margin-top: 60px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: center;
}

a{
  color: white;
  font-family: 'Luna';
  text-shadow: 2px 2px 4px #000000;
  line-height: 3rem;
}

/*MEDIA QUERIES*/
@media only screen and (max-width: 992px) {
   /*For mobile phones and tablets: */
  .grid{
    display: inline-block;
    font-size: 1.4em;
  }
}

</style>
