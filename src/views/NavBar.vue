<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-brand to="/aboutme">About Me</b-navbar-brand>
      <b-navbar-brand to="/aboutproject">About Project</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>