<template>
  <main role="main" class="container">
    <div class="d-flex align-items-center justify-content-between p-3 px-4 my-3 text-white bg-dark rounded shadow-box">
      <div class="lh-100">
        <h4 class="mb-0 pb-0 text-white lh-100">Events</h4>
        <div class="btn-group btn-group-toggle">
          <label v-bind:class="['btn', 'btn-secondary', { active: isAll }]" v-on:click="allChosen">
            <input type="radio" id="option1" autocomplete="off" v-bind:checked="isAll"/>All
          </label>
          <label v-bind:class="['btn', 'btn-secondary', { active: !isAll }]" v-on:click="activeChosen">
            <input type="radio" id="option2" autocomplete="off" v-bind:checked="!isAll"/>Active
          </label>
        </div>
      </div>
      <div>
        <a href="/events/new" class="btn btn-light btn-sm">Create event</a>
      </div>
    </div>

    <div class="align-items-center p-3 my-3 text-black bg-white rounded shadow-box">
      <event-item v-for="eventItem in events" v-bind:event="eventItem"/>
    </div>
  </main>
</template>

<script>
  import EventItem from "./EventItem";
  import axios from "axios";

  export default {
    name: "EventsComponent",
    components: {EventItem},
    data() {
      return {
        isAll: true,
        events: [
          {
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur consequuntur\n" +
            "        cumque deleniti dignissimos dolores ea eligendi impedit in iste itaque laboriosam modi nemo nobis, omnis\n" +
            "        perspiciatis quibusdam sed veritatis. Alias amet animi, consectetur deserunt doloribus eos est expedita nisi\n" +
            "        numquam, odit omnis perspiciatis provident quos voluptas voluptatem. Accusantium adipisci aspernatur deleniti\n" +
            "        dolorem molestias nostrum odio quia reiciendis soluta voluptate? Ab aperiam commodi, consectetur corporis\n" +
            "        cumque, dicta dolor, eaque error et eum expedita explicabo facilis fugiat incidunt laboriosam nesciunt nulla\n" +
            "        odit quasi quia reiciendis repellendus sapiente unde veniam veritatis voluptates.",
            id: 0,
            name: "Lorem ipsum dolor sit amet.",
            owner: {
              birthDate: "2018-07-11T10:55:18.882Z",
              email: "string",
              firstName: "Somebody",
              id: 0,
              middleName: "string",
              role: "string",
              secondName: "Sirname"
            },
            siteUrl: "string"
          }
        ]
      }
    },
    methods: {
      allChosen() {
        this.isAll = true;
        axios.get("/users/events")
          .then(response => this.events = response.data);
      },
      activeChosen() {
        this.isAll = false;
        axios.get("/users/events/active")
          .then(response => this.events = response.data);
      }
    }
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