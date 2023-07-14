var dev1;

(function (ns) {
    function check() {
        console.log("Checked from File Three");
    }

    ns.check = check;
})(dev1 || (dev1 = {}));