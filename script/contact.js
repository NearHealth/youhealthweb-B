(function() {
    emailjs.init('c5crwHcbFGlIgiauR');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // this.user_name.value = "hola";
        // this.user_last_name.value = "hola";
        // this.user_email.value = "my email";
        // this.user_telephone.value = "65846516546";
        // this.user_state.value = "Florida";
        // this.user_zip_code.value = "43541";
        // these IDs from the previous steps
        emailjs.sendForm('service_2h87yci', 'template_jishzpg', this)
            .then(function() {
                // console.log('SUCCESS!');
                alert("Contact Info Sent!")
            }, function(error) {
                // console.log('FAILED...', error);
                alert("Something failed, try again!")
            });
    });
}