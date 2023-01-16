/*<!--formations-->
<script>*/
    function brakechain() {
        var a;
        a = document.getElementById("div1")
        a.innerHTML = "&#xf0c1;";
        setTimeout(function () {
            a.innerHTML = "&#xf127;";
        }, 1000);
    }
    brakechain();
    setInterval(brakechain, 2000);

/*<!--matiéres-->
<script>*/
    function openfolder() {
        var a;
        a = document.getElementById("div2");
        a.innerHTML = "&#xf114;";
        setTimeout(function () {
            a.innerHTML = "&#xf115;";
        }, 1000);
    }
    openfolder();
    setInterval(openfolder, 2000);
