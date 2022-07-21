<template>
	<div>
	<router-link :to="{ name: 'posts.index' }" class="mr-10" >index post</router-link>
	<router-link :to="{ name: 'posts.create' }" >Create post</router-link>
		
	</div>
	<div>
		<router-view />
	</div>

</template>