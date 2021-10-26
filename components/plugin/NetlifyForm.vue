<template>
  <form
    name="contact"
    method="post"
    netlify
    netlify-honeypot='bot-field'
  >
  <input type="hidden" name="form-name" value='contact'>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        name="email"
        id="email"
        v-model="email"
        type="email"
        class="form-control"
        required
        placeholder="name@example.com"
        @change="validate()"
      />
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea
        id="message"
        name="message"
        v-model="message"
        required
        class="form-control"
        rows="3"
        @change="validate()"
      ></textarea>
    </div>
    <button :disabled="isDisabled" class="btn btn-primary" type="submit">
      Send
    </button>
    <button @click.prevent="clear()" class="btn btn-danger" type="button">
      Clear
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      message: null,
      isDisabled: true
    };
  },
  methods: {
    clear() {
      this.isDisabled = true;
      return (this.email = this.message = null);
    },
    validate() {
      if (
        this.message === "" ||
        this.message === null ||
        this.email === "" ||
        this.email === null
      ) {
        return (this.isDisabled = true);
      }
      if (this.message != null || this.email != null) {
        console.log(this.message);
        return (this.isDisabled = false);
      }
    }
  }
};
</script>
