// MAKE COMPATIBLE WITH DESKTOP BROWSERS:
if(!((window.DocumentTouch&&document instanceof DocumentTouch)||'ontouchstart' in window)){
    var script=document.createElement("script");
    script.src="ui/jq.desktopBrowsers.js";
    var tag=$("head").append(script);
    alert("Siden du forsøker å nå, er egentlig en mobilapp. Gå inn på kfoslo.com/app med din mobil eller tablet. Appen kan da kjøres direkte i nettleseren på enheten, eller lagres på hjem-skjermen for bedre tilgjengelighet. Ønsker du likvel å vise siden på en ordinær nettleser, bruk Chrome eller Safari.");
    }

//UI SETTINGS:
$.ui.manageHistory=false;
$.ui.loadDefaultHash = true; /*prevent loading index.html#somepage*/
$.ui.useOSThemes=false;
$.ui.lockPageBounce=$.os.android;
$.feat.nativeTouchScroll=false;
$.ui.showBackbutton=false;

//Global function for getting date in readable, short format
function getShortDate(today){
	var day = today.getDate();
	var month = today.getMonth() + 1;
	return day + "." + month;
	}  

$(document).on('loadpanel', '#today', function(){
	var today = getShortDate(new Date());
	$("#readToday").html(getReading(today));
	});

$(document).on('loadpanel', '#tomorrow', function(){
	var tomorrowDate = new Date();
	tomorrowDate.setTime(tomorrowDate.getTime() + 86400000);
	var tomorrow = getShortDate(tomorrowDate);
	$("#readTomorrow").html(getReading(tomorrow));
	});

$(document).on('loadpanel', '#yesterday', function(){
	var yesterdayDate = new Date();
	yesterdayDate.setTime(yesterdayDate.getTime() - 86400000);
	var yesterday = getShortDate(yesterdayDate);
	$("#readYesterday").html(getReading(yesterday));
	});

//swipe-listeners:
$.ui.ready(function(){
	$('#today').on('swipeLeft', function(){
        $.ui.loadContent('#tomorrow',false,false,'slide');   
    });
    $('#today').on('swipeRight', function(){
        $.ui.loadContent('#yesterday',false,true,'slide');    
    });

    $('#tomorrow').on('swipeRight', function(){
        $.ui.loadContent('#today',false,true,'slide');    
    });

    $('#yesterday').on('swipeLeft', function(){
        $.ui.loadContent('#today',false,false,'slide');   
    });
});
