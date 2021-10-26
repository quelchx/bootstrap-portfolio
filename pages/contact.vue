<template>
  <section class="container py-4" id="contact-page" aria-label="contact-page">
    <AOS
      animation="fade-in"
      duration="1300"
      delay="200"
      class="p-5 mb-4 bg-light rounded-3"
    >
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Contact?</h1>
        <p class="col-md-8 fs-4">
          Feel free to send me a message
        </p>
        <form
          name="contact"
          method="POST"
          netlify
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
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
      </div>
    </AOS>

    <AOS
      animation="slide-up"
      duration="2000"
      delay="200"
      class="row align-items-md-stretch"
    >
      <Column class="p-1" title="Other Ways To Contact">
        <p>
          You can always send me an
          <Link path="mailto:quelchx@gmail.com" name="email" />
          or reach out to me on discord.
        </p>
      </Column>
      <Column class="p-1" title="How This Form Works">
        <p>
          All form data is safe, and you will not recieve junk mail. All
          information is handled through
          <Link path="https://docs.netlify.com/forms/setup/" name="Netlify" />
          Forms.
        </p>
      </Column>
    </AOS>
  </section>
</template>

<script>
import Column from '~/components/pages/contact/Column'
import Link from '~/components/shared/Link'
import AOS from '~/components/shared/AOS'
import NetlifyForm from '~/components/plugin/NetlifyForm'

import meta from '~/assets/api/meta'
export default {
  head() {
    return {
      meta: meta.contact,
    }
  },
  components: { NetlifyForm, Column, Link, AOS },
  ata() {
    return {
      email: null,
      message: null,
      isDisabled: true,
    }
  },
  methods: {
    clear() {
      this.isDisabled = true
      return (this.email = this.message = null)
    },
    validate() {
      if (
        this.message === '' ||
        this.message === null ||
        this.email === '' ||
        this.email === null
      ) {
        return (this.isDisabled = true)
      }
      if (this.message != null || this.email != null) {
        console.log(this.message)
        return (this.isDisabled = false)
      }
    },
  },
}
</script>
