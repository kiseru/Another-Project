<template>
  <div class="wrapper p-3 my-2 border border-dark rounded w-100">
    <a href="/events/1" class="text-dark">
      <h4 class="border-bottom border-dark p-0 m-0">Lorem ipsum dolor sit amet.</h4>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur consequuntur
        cumque deleniti dignissimos dolores ea eligendi impedit in iste itaque laboriosam modi nemo nobis, omnis
        perspiciatis quibusdam sed veritatis. Alias amet animi, consectetur deserunt doloribus eos est expedita nisi
        numquam, odit omnis perspiciatis provident quos voluptas voluptatem. Accusantium adipisci aspernatur deleniti
        dolorem molestias nostrum odio quia reiciendis soluta voluptate? Ab aperiam commodi, consectetur corporis
        cumque, dicta dolor, eaque error et eum expedita explicabo facilis fugiat incidunt laboriosam nesciunt nulla
        odit quasi quia reiciendis repellendus sapiente unde veniam veritatis voluptates.</p>
      <div class="d-flex flex-row-reverse">
        <p class="mb-0 font-weight-light font-italic">Author: Somebody Surname</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "EventItem"
  }
</script>

<style lang="less" scoped>
  a:hover {
    text-decoration: none;
  }
</style>