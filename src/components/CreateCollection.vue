<template>
  <section class="create-collection">
    <form class="col-sm-6 offset-sm-3">
      <div class="form-group row">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true" @click.prevent="exit">&times;</span>
        </button>
        <h4 class="col-sm-12">Create a new collection</h4>
      </div>
      <div class="alert alert-success" v-if="success">Collection created successfully. Now let's <a v-link="{name: 'create-video'}">add some videos</a>.</div>
      <div class="alert alert-danger" v-if="error">Oops... There was an error. Please try again.</div>
      <div v-show="!success">
        <div class="form-group row">
          <label for="name" class="col-sm-4 form-control-label">Name</label>
          <div class="col-sm-12 col-md-6">
            <input type="text" v-el:name name="name" class="form-control" placeholder="Name">
          </div>
        </div>
        <div class="form-group row">
          <label for="visibility" class="col-sm-4 form-control-label">Make private</label>
          <div class="col-sm-12 col-md-6">
            <toggle-switch :checked.sync="private"></toggle-switch>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6 offset-sm-4">
            <button class="btn btn-primary col-sm-12 col-md-12" @click.prevent="create">Create</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="form-group row">
          <div class="col-sm-12 text-xs-center">
            or
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <button class="btn btn-secondary col-sm-12 col-md-12" @click.prevent="resetForm">Create another collection</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  import {createCollection} from '../services/api'
  import ToggleSwitch from './ToggleSwitch'
  import {router} from '../main'
  import store from '../store'

  export default {
    name: 'CreateCollection',

    components: [ToggleSwitch],

    data () {
      return {
        success: false,
        error: false,
        private: false
      }
    },

    methods: {
      create () {
        const name = this.$els.name.value.trim() !== '' ? this.$els.name.value : 'Untitled'

        this.resetForm()

        return createCollection({name, 'is_private': this.private}, store.getToken())
          .then(res => {
            this.success = true
          })
          .catch(err => {
            console.log(err)
            this.error = true
          })
      },

      exit () {
        router.go(window.history.back())
      },

      resetForm () {
        this.success = false
        this.error = false
      }
    }
  }
</script>


