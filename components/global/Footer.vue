<template>
  <footer
    id="footer"
    class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
  >
    <div class="col-md-4 d-flex align-items-center">
      <nuxt-link
        to="/"
        class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
        <i class="fas fa-home"></i>
      </nuxt-link>
      <a class="to-top no-decoration" href="#">© 2021 Eric Quelch</a>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a class="text-muted" href="https://github.com/quelchx" target="_blank">
          <i class="fab fa-github footer-icon"></i>
        </a>
      </li>
      <li class="ms-3">
        <a
          class="text-muted"
          href="https://www.linkedin.com/in/eric-quelch-768861201/?originalSubdomain=ca"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>
