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

//Global, datacontaining function to fetch reading on date
function getReading(date){
	switch(date){
        case "20.7":
        	return "Salme 126<br />Mal 1-2<br />Åpenbaringen 21";     
        break;
        case "21.7":
        	return "Malaki 3-4<br />Åpenbaringen 22";     
        break;
        case "22.7":
        	return "1. Mosebok 1-2<br />Lukas 1,1-25";     
        break;
        case "23.7":
        	return "1. Mosebok 3-5<br />Lukas 1,26-56";     
        break;
        case "24.7":
        	return "1. Mosebok 6-8<br />Lukas 1,57-80";     
        break;
        case "25.7":
        	return "1. Mosebok 9-11<br />Johannes 1,1-14";     
        break;
        case "26.7":
        	return "Job 1-3<br />Matteus 1";     
        break;
        case "27.7":
        	return "Job 4-6<br />Lukas 2,1-20";     
        break;
        case "28.7":
        	return "Job 7-9<br />Lukas 2,21-38";     
        break;
        case "29.7":
        	return "Job 10-13<br />Matteus 2";     
        break;
        case "30.7":
        	return "Job 14-16<br />Lukas 2,39-52";     
        break;
        case "31.7":
        	return "Job 17-30<br />Matteus 3";     
        break;
        }
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
