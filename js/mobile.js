$.urlParam = function(name, url) {
                if (!url) {
                    url = window.location.href;
                }
                var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
                if (!results) { 
                    return undefined;
                }
                return results[1] || undefined;
            }
            window.onload = function() {
                var forceDesktop = $.urlParam('forceDesktop');
                if (!forceDesktop) {
                    if ( $(window).width() < 639) {   
                        var url = "https://mobile.louisgallet.online";    
                        $(location).attr('href',url);
                    }
                }
            };
