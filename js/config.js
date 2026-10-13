/* Site-wide contact email. Change it here only. */
window.SITE_EMAIL = "info@maxwellassociates.net";
document.addEventListener("DOMContentLoaded", function () {
  var e = window.SITE_EMAIL;
  document.querySelectorAll(".site-email").forEach(function (a) { a.textContent = e; if (a.tagName === "A") a.href = "mailto:" + e; });
  document.querySelectorAll("form.site-email-form").forEach(function (f) { f.action = "mailto:" + e; });
});
