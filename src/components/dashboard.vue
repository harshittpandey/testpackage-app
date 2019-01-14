<template>
	<div class="dashboard">
	    <h1>
	      Welcome to the Student Application
	    </h1>
	    <div class="m-4 row">
		    <b-card title="Demo Test"
			    img-src="download.png"
			    img-alt="Image"
			    img-top
			    tag="article"
			    style="max-width: 15rem;border: 1px solid lightgray"
			    class="m-2 ">
			    <p class="card-text">
			        This is a demo test having 8 questions.
			    </p>
			    <b-button href="#" variant="primary" style="cursor: pointer">
			    	<router-link :to="{name: 'DemoTest'}"><span class="text-white">Take Test</span></router-link>
			    </b-button>
			</b-card>

		    <b-card title="Dummy Card"
			    img-src="https://picsum.photos/600/300/?image=25"
			    img-alt="Image"
			    img-top
			    tag="article"
			    style="max-width: 15rem;opacity: 0.5"
			    class="m-2">
			    <p class="card-text">
			        This Link is not active.
			    </p>
			    <b-button href="#" variant="primary">
			    	Dummy Button
			    </b-button>
			</b-card>

		    <b-card title="Dummy card"
			    img-src="https://picsum.photos/600/300/?image=25"
			    img-alt="Image"
			    img-top
			    tag="article"
			    style="max-width: 15rem;opacity: 0.5"
			    class="m-2">
			    <p class="card-text">
			        This link is not active.
			    </p>
			    <b-button href="#" variant="primary" disabled>
			    	Dummy Button
			    </b-button>
			</b-card>
		</div>
  </div>

</template>

<script>
export default {
	name: "Dashboard"
}
</script>

<style>
</style>