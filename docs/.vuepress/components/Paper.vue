<template>
  <div class="paper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="authors">
      <slot name="authors"></slot>
    </div>
    <div class="venue">
      <slot name="venue"></slot>
    </div>
    <span class="badge" style="background-color: #2c3e50" @click="showAbs = !showAbs">Abs</span>
    <span class="badge" style="background-color: #e57200" @click="showBib = !showBib">Bib</span>
    <a v-for="item in meta" v-if="item.url" :href="item.url" target="_blank">
      <span class="badge" :style="{'background-color': item.color}">{{item.name}}</span>
    </a>
    <transition name="fadeHeight" mode="in-out">
      <div v-if="showAbs">
        <slot name="abs"></slot>
      </div>
    </transition>
    <transition name="fadeHeight" mode="out-in">
      <div v-if="showBib">
        <slot name="bib"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["paper", "arxiv", "video", "slides", "code"],
  data() {
    return {
      showAbs: false,
      showBib: false,
      meta: [
        { name: "Link", color: "", url: this.paper },
        { name: "arXiv", color: "#ae1917", url: this.arxiv },
        { name: "Video", color: "", url: this.video },
        { name: "Slides", color: "", url: this.slides },
        { name: "Code", color: "#24292e", url: this.code },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.paper
  margin-top: 18px

.company, .location, .date
  display: inline

.location, .date
  color: #708396

.title
  font-weight: 600

.venue, .title
  font-style: italic

.badge
  cursor: pointer
  display: inline-block
  font-size: 14px
  font-weight: 600
  height: 18px
  line-height: 18px
  border-radius: 3px
  padding: 2px 6px
  margin: 0 3px
  color: white
  vertical-align: 'middle'
  line-height: 1.2
  margin-block-start: 0.66em
  margin-block-end: 0em

.fadeHeight-enter-active, .fadeHeight-leave-active
  transition: all 0.3s ease
  max-height: 600px

.fadeHeight-enter, .fadeHeight-leave-to
  opacity: 0
  max-height: 0px
</style>