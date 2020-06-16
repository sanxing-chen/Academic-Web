<template>
<div v-if="issues">
  <h1>Paper notes</h1>
  <ul>
    <div v-for="(record, idx) in issues">
      <h2 v-if="idx == 0 || formatDate(issues[idx-1].created_at) != formatDate(record.created_at)">
        {{formatDate(record.created_at)}}
      </h2>
      <h3 class="title">{{record.title}} <a :href="record.url | api2www" target="_blank">#</a></h3>
      <a v-for="label in record.labels" :href="label.url | api2www" target="_blank">
        <span
          class="badge"
          :style="{'background-color': '#'+label.color}">
          {{label.name}}
        </span>
      </a>
      <h5 class="author">{{record.author_text}} ({{record.time_text}})</h5>
      <p v-html="$options.filters.renderNote(record.body)"></p>
    </div>
  </ul>
</div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/sanxingc/paper-note/issues?creator=sanxingc'
var md = require('markdown-it')({breaks: true});
export default {
  data() {
    return {
      issues: null,
      md: md
    }
  },

  mounted: function () {
    this.fetchData()
  },

  watch: {
  },

  filters: {
    api2www: function (v) {
      return v.replace('api.github.com/repos', 'github.com')
    },
    renderNote: function (v) {
      return md.render(v)
    }
  },

  methods: {
    formatDate: function (v) {
      return v.slice(0, 10)
    },
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.issues = JSON.parse(xhr.responseText)
        for (let record of self.issues) {
          let dateStart = record.body.indexOf('Time:')
          let noteStart = record.body.indexOf('Note:')
          record.author_text = record.body.slice(9, dateStart).trim()
          record.time_text = record.body.slice(dateStart + 6, noteStart).trim()
          record.body = record.body.slice(noteStart + 7)
        }
      }
      xhr.send()
    }
  }
}
</script>

<style>

.author {
  color: #9eb3c9;
}

.badge {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 2px 6px;
  margin: 0 3px;
  color: black;
  vertical-align: 'middle';
}

.author, .title, .badge {
  line-height: 1.2;
  margin-block-start: 0.66em;
  margin-block-end: 0em;
}

</style>