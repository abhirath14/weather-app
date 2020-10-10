<template>
  <div class="home">
    <Weather/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Weather from '@/components/WeatherHome.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Weather
  }
}
</script>
