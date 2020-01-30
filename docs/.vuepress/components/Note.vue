<template>
<div v-if="issues">
  <h1>Paper notes</h1>
  <ul>
    <div v-for="record in issues">
      <h3>{{record.title}} <a :href="record.url | api2www" target="_blank">🔗</a></h3>
      <a v-for="label in record.labels" :href="label.url | api2www" target="_blank">
        <span
          class="badge"
          :style="{'background-color': '#'+label.color}">
          {{label.name}}
        </span>
      </a>
      <h5>{{record.author_text}} ({{record.time_text}})</h5>
      <p v-html="$options.filters.renderNote(record.body)"></p>
    </div>
  </ul>
</div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/STayinloves/paper-note/issues?creator=STayinloves'
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
    // currentBranch: 'fetchData'
  },

  filters: {
    api2www: function (v) {
      return v.replace('api.github.com/repos', 'github.com')
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    },
    renderNote: function (v) {
      return md.render(v)
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.issues = JSON.parse(xhr.responseText)
        for (let record of self.issues) {
          console.log(record)
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

.author, .date {
  font-weight: bold;
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
</style>