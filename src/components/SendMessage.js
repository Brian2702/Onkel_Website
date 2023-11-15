//service: https://dashboard.emailjs.com/admin

import emailjs from 'emailjs-com';

export function sendEmail(from, email, message) {
    const emailParams = {
        from_name: from,
        email: email,
        message: message,
    };

    emailjs.send('service_1li6qqz', 'template_64r4nal', emailParams,"7Rcaw0nPVDv9O8iXN")
        .then(response => alert('E-Mail erfolgreich gesendet!', response))
        .catch(error => alert('Fehler beim Senden der E-Mail:', error));
}
