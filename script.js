function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var day = data.getDate();
    var month = data.getMonth() +1;
    var year = data.getFullYear();
    var hour = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();
    var greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning!';
         img.src = 'morning.png'
        document.body.style.background = '#69a5d7'
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon!';
        img.src = 'noon.png'
        document.body.style.background = '#faf4c2'
    } else {
        greeting = 'Good Night!';
        img.src = 'night.png'
        document.body.style.background = '#022022'
    }

    msg.innerHTML = `${day}/${month}/${year}, <br> It's ${hour} hours and ${minutes} minutes and ${seconds} seconds. ${greeting}`;
}

setInterval(load, 1000);

