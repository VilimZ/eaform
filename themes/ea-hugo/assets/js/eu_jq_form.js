console.log('This site AAAAAAAAAAAAA.');

(function($) {
    "use strict";
        $(document).ready(function() {
                $('.modal-link').on('click', function() {
                $('body').addClass("modal-open");
            });
            $('.close-modal').on('click', function() {
                $('body').removeClass("modal-open");
            });
        });
}(jQuery));


/*



 */

/* 
document.addEventListener('DOMContentLoaded', function () {
    // Dobavi JSON podatke s https://primjer.net
    fetch('https://appointments.aspose.com/api/v1/services ')
        .then(response => response.json())
        .then(data => {
            // Popuni padajući izbornik s podacima
            const dropdown = document.getElementById('select-service');
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.value;  // Prilagodite prema strukturi vaših podataka
                option.text = item.text;    // Prilagodite prema strukturi vaših podataka --user janedoe:Mrkva123
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Greška prilikom dohvaćanja podataka:', error));
}); */


