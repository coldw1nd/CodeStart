document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;

        console.clear();

        console.log('--- Новое обращение с сайта ---');
        console.log('ФИО:', formData.fullname);
        console.log('Телефон:', formData.phone);
        console.log('Email:', formData.email);
        console.log('Тема:', formData.topic);
        console.log('Сообщение:', formData.message);

        const timestamp = new Date().toLocaleString();
        console.log('Время отправки:', timestamp);
        console.log('-------------------------------');
    });
});