<template>
  <footer
    id="footer"
    class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
  >
    <div class="col-md-4 d-flex align-items-center">
      <a href="#">
        <i class="fas fa-home"></i>
      </a>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <Link link="https://github.com/quelchx">
          <i class="fab fa-github footer-icon"></i>
        </Link>
      </li>
      <li class="ms-3">
        <Link
          link="https://www.linkedin.com/in/eric-quelch-768861201/?originalSubdomain=ca"
        >
          <i class="fab fa-linkedin"></i>
        </Link>
      </li>
    </ul>
  </footer>
</template>

<script>
import Link from '~/components/shared/Link'
export default {
  components: { Link },
}
</script>
