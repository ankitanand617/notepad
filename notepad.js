var z = document.getElementById('textarea').value = localStorage.getItem("autosave-data");
    function fun1() {


        let y = document.getElementById('feature-flag');
        if (y.checked == true) {
            //intervalid=setInterval(fun1,1000);
            fun1();
        }
        else {
            clearInterval(intervalid);
        }
    }
    intervalid = setInterval(fun1, 1000);
    function fun1() {
        let y = document.getElementById('feature-flag');
        if (y.checked == true) {
            //alert("ss");

            //console.log(1);
            var x = document.getElementById('textarea').value;
            //alert(x);

            localStorage.setItem("autosave-data", x);
            //alert(localStorage.getItem("lastname"));

            //localStorage.removeItem("autosave-data")
        }

    }

    function save1() {
        var x = document.getElementById('textarea').value;
        localStorage.setItem("autosave-data", x);
        var y = document.getElementById('textarea').value = localStorage.getItem("autosave-data");

    }

    function clear1() {
        //alert("aa");
        localStorage.removeItem("autosave-data");
        var y = document.getElementById('textarea').value = localStorage.getItem("autosave-data");

    }