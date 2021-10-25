<template>
  <div class="col-md-6">
    <h2>Feeling Generous?</h2>
    <p>
      You don't have to dontate, but anything helps more than you may think! All
      examples are completley free. If you decide to donate -- it goes to
      helping my family.
    </p>
    <ul class="icon-list">
      <li class="bounce">
        <Link
          name="Donations"
          link="https://www.paypal.com/donate?hosted_button_id=U3Z4B6SDYDDSS"
        />
      </li>
      <li class="bounce">
        <Link name="My Github" link="https://github.com/quelchx" />
      </li>
    </ul>
  </div>
</template>

<script>
import Link from '~/components/shared/Link'
export default {
  components: { Link },
}
</script>
