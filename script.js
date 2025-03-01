// DOM Elements
const forgotPasswordLink = document.getElementById("forgot-password")
const modal = document.getElementById("forgot-password-modal")
const closeModal = document.querySelector(".close")
const loginForm = document.getElementById("login-form")
const signupForm = document.getElementById("signup-form")
const resetPasswordForm = document.getElementById("reset-password-form")

// Event Listeners
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "block"
  })
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

// Form Submissions
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // Add your login logic here
    console.log("Login attempt:", { email, password })
    alert("Login functionality will be implemented with backend integration")
  })
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("signup-email").value
    const password = document.getElementById("signup-password").value
    const confirmPassword = document.getElementById("confirm-password").value

    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // Add your signup logic here
    console.log("Signup attempt:", { fullname, email, password })
    alert("Sign up functionality will be implemented with backend integration")
  })
}

if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("reset-email").value

    // Add your password reset logic here
    console.log("Password reset attempt:", { email })
    alert("Password reset email will be sent (to be implemented)")
    modal.style.display = "none"
  })
}

// Social Authentication
document.querySelectorAll(".google-auth").forEach((button) => {
  button.addEventListener("click", () => {
    // Add Google authentication logic
    alert("Google authentication will be implemented")
  })
})

document.querySelectorAll(".github-auth").forEach((button) => {
  button.addEventListener("click", () => {
    // Add GitHub authentication logic
    alert("GitHub authentication will be implemented")
  })
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const href = this.getAttribute("href")
    if (href !== "#") {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Active Navigation Highlight
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// Call on page load
setActiveNavLink()

// Blog Filters
const filterButtons = document.querySelectorAll(".filter-button")
const blogCards = document.querySelectorAll(".blog-card")

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filter = button.getAttribute("data-filter")

      blogCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}