<template>
  <main role="main" class="container">
    <div class="d-flex align-items-center justify-content-between p-3 px-4 my-3 text-white bg-dark rounded shadow-box">
      <div class="lh-100">
        <h4 class="mb-0 pb-0 text-white lh-100">Events</h4>
      </div>
      <div>
        <a href="/events/new" class="btn btn-light btn-sm">Create event</a>
      </div>
    </div>

    <div class="align-items-center p-3 my-3 text-black bg-white rounded shadow-box">
      <event-item/>
      <event-item/>
    </div>
  </main>
</template>

<script>
  import EventItem from "./EventItem";
  export default {
    name: "EventsComponent",
    components: {EventItem}
  }
</script>

<style lang="less" scoped>
  .events-header {
    background: #ff0000;
  }

  .events-list {
    background-color: #ff0000;
  }
</style>