(function () {
  var SERVICE_ID = "service_ponwwzl";
  var TEMPLATE_ID = "template_tyk1jbf";
  var PUBLIC_KEY = "AWWm9m1B_f4U6vuS6";

  function getLanguage() {
    try {
      return localStorage.getItem("language") === "es" ? "es" : "en";
    } catch (error) {
      return "en";
    }
  }

  function setFormMessage(type, text) {
    var message = document.getElementById("form-success-message");

    if (!message) {
      return;
    }

    message.textContent = text;
    message.style.color = type === "success" ? "#2e7d32" : "#b00020";
    message.style.display = "block";
  }

  function clearFormMessage() {
    var message = document.getElementById("form-success-message");

    if (!message) {
      return;
    }

    message.textContent = "";
    message.style.display = "none";
  }

  function setSubmitState(form, isSending) {
    var submitButton = form.querySelector(
      'input[type="submit"], button[type="submit"]',
    );

    if (!submitButton) {
      return;
    }

    if (isSending) {
      submitButton.dataset.originalValue =
        submitButton.value || submitButton.textContent;
      submitButton.disabled = true;

      if (submitButton.value !== undefined) {
        submitButton.value =
          getLanguage() === "es" ? "Enviando..." : "Sending...";
      } else {
        submitButton.textContent =
          getLanguage() === "es" ? "Enviando..." : "Sending...";
      }
    } else {
      submitButton.disabled = false;

      if (submitButton.dataset.originalValue) {
        if (submitButton.value !== undefined) {
          submitButton.value = submitButton.dataset.originalValue;
        } else {
          submitButton.textContent = submitButton.dataset.originalValue;
        }
      }
    }
  }

  function getSuccessMessage() {
    return getLanguage() === "es"
      ? "Gracias, el formulario ha sido enviado"
      : "Thanks, the form has been submitted";
  }

  function getFailureMessage() {
    return getLanguage() === "es"
      ? "No pudimos enviar el formulario. Intentalo de nuevo."
      : "We could not submit the form. Please try again.";
  }

  function logEmailJsError(error) {
    if (error && (error.status || error.text)) {
      console.error("EmailJS submit failed:", error.status, error.text);
    } else {
      console.error("EmailJS submit failed:", error);
    }
  }

  function isEmailJsReady() {
    return (
      typeof emailjs !== "undefined" && typeof emailjs.sendForm === "function"
    );
  }

  if (typeof emailjs === "undefined" || typeof emailjs.init !== "function") {
    console.error("EmailJS SDK was not loaded.");
  } else {
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");

    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      setSubmitState(form, true);
      clearFormMessage();

      if (!isEmailJsReady()) {
        console.error("EmailJS SDK is not ready.");
        setFormMessage("error", getFailureMessage());
        setSubmitState(form, false);
        return;
      }

      try {
        var firstNameInput = form.querySelector('[name="user_name"]');
        var lastNameInput = form.querySelector('[name="user_last_name"]');
        var emailInput = form.querySelector('[name="user_email"]');
        var nameMirrorInput = form.querySelector('[name="name"]');
        var emailMirrorInput = form.querySelector('[name="email"]');
        if (nameMirrorInput) {
          var first = firstNameInput ? firstNameInput.value : "";
          var last = lastNameInput ? lastNameInput.value : "";
          nameMirrorInput.value = (first + " " + last).trim();
        }
        if (emailInput && emailMirrorInput) {
          emailMirrorInput.value = emailInput.value;
        }
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form)
          .then(function () {
            setFormMessage("success", getSuccessMessage());
          })
          .catch(function (error) {
            logEmailJsError(error);
            setFormMessage("error", getFailureMessage());
          })
          .finally(function () {
            setSubmitState(form, false);
          });
      } catch (error) {
        logEmailJsError(error);
        setFormMessage("error", getFailureMessage());
        setSubmitState(form, false);
      }
    });
  });
})();
