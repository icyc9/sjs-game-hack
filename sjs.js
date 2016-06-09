"undefined" == typeof sjsHack && (window.sjsHack = {}),
    function(s) {
        var i = window;
        this.getToken = function() {
            return i.s(this.email, this.score, i.token)
        }, this.hack = function(s, i) {
            this.score = i, this.email = s, $.ajax({
                url: "http://www.slamjamsocialism.com/arcad-ism/callback-ism.php",
                data: "action=setpoint&email=" + s + "&pointz=" + i + "&sec=" + this.getToken(),
                type: "POST"
            })
        }
    }.call(sjsHack);
