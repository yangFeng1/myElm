<template>
  <div>

  	<iscroll-view class="scroll-view" :options="{preventDefault: false}">
    Your contents
  </iscroll-view>
   <button @click="scrollToTop">Scroll To Top</button>
    
  </div>
</template>
<script type="text/javascript">
	export default {
	  methods: {
	    log (iscroll) {
	      console.log(iscroll)
	    }
	  }
	}
</script>
<style type="scss" scoped>
	/* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

</style>
