<template>
  <div class="postcard-photo">
    <b-img :id=type class='picture' fluid :src="img"></b-img>
  </div>
</template>
<script>
export default {
  name: 'PostcardPhoto',
  props: ['type', 'img']
}

</script>
<style scoped>

#rectangle{
  max-height: 500px;
  object-fit: cover;
}

#square {
  height: 590px;
  width: 590px;
  object-fit: cover;
}

.picture {
  position: relative;
  padding: 5px;
  margin-top: 60px;

  border-image: url('./../../assets/postcard1.png') 40 repeat;
  border-image-width:25px;
  border-image-outset:15px;
}

</style>
