<template>
	<div>
  <transition name="slide-fade">
        <router-view></router-view>
        </transition>
    </div>
</template>
<style lang="scss">
    @import './common/style/common';
    .slide-fade-enter-active {
  transition: opacity 1s;
}

.slide-fade-enter, .slide-fade-leave-to
{
  opacity: 0;
}
</style>
