<template>
  <div class="exp">
    <div>
      <div class="company">
        <slot name="company"></slot> &middot;
      </div>
      <div class="location">
        <slot name="location"></slot>
      </div>
      <div class="date">
        <slot name="date"></slot>
      </div>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="work"></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.exp
  margin-top: 18px

.company, .location, .date
  display: inline

.location, .date
  color #708396

.company
  font-weight: 600

.title
  margin-block-start: 0
  margin-block-end: 0.2em

.date
  float: right
  font-style: italic
</style>