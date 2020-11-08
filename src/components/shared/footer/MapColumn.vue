<template>
  <div class="col-md-2 text-center">
        <h5>{{data.title}}</h5>
        <ul class="list-unstyled text-small" v-for="subTitle in data.subTitle" :key="subTitle">
          <li><a class="text-muted" href="#">{{subTitle}}</a></li>
        </ul>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      required:true
    }
  }
}
</script>
