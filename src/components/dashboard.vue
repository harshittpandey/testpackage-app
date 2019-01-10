<template>
	<div class="dashboard">
	    <h1>
	      Welcome to the Student Application
	    </h1>
	    <p>Click on the test</p>
	    <router-link :to="{name: 'DemoTest'}">Demo Test</router-link>
  </div>

</template>

<script>
export default {
	name: "Dashboard"
}
</script>

<style>

</style>