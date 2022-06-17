window.onload = function(){
    var daysofweek = ['sun','mon','tue','wed','thu','fri','sat'];

    var month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    setInterval(clock,1000);

    function clock() {
        // setting up my variables
        var today = new Date(); // date counts
        var h = today.getHours(); // hours count
        var m = today.getMinutes(); // minutes count
        var s = today.getSeconds(); // seconds count
        var day = h<11 ? 'AM' : 'PM'; // AM or PM count
        var daytoday = today.getDay();
        var date = today.getDate(); // date count
        var mon = today.getMonth(); // Month count
        var year = today.getFullYear(); // Year count
    
        // adding leading zeros to them

        h = h<10? '0'+h: h;
        m = m<10? '0'+m: m;
        s = s<10? '0'+s: s;

        // writing it down in the document

        document.querySelector('#hours').innerHTML = h;
        document.querySelector('#min').innerHTML = m;
        document.querySelector('#sec').innerHTML = s;
        document.querySelector('#time').innerHTML = day;
        document.querySelector('#day').innerHTML = date;
        document.querySelector('#month').innerHTML = month[mon];
        document.querySelector('#year').innerHTML = year;
        document.querySelector(''+daysofweek[daytoday]+'').style.color = '#ffffff';
    }
    

};

