var bd_nd_B937DB990D1548698380D65CF906E308 = 
{

	ICON_WAIT       : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/wait.gif",
	ICON_OK       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/ok.png",
	ICON_NOK       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/nok.png",
	ICON_WARN       : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/warn.png",
	ICON_ERR       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/err.png",
	ID_PREFIX	    : "bd_nd_B937DB990D1548698380D65CF906E308_",
	ID_POSTFIX	    : "_tooltip",
	HEADER_NAME		: "BDNDLS_F9CD80F3B79B49ABAD166F61BFFFC81B",
	CTX             : "bd_nd_B937DB990D1548698380D65CF906E308_ctx",
	CLASS           : "bd_nd_B937DB990D1548698380D65CF906E308",
	STATUS          : "bd_nd_status",
	URL             : "bd_nd_url",

	ST_ADDED        : "added",
	ST_WAIT         : "wait",
	ST_ERR          : "err",
	ST_OK           : "ok",
	ST_THREAT       : "threat",
	ST_WARN         : "warn",

	STATUS_NONE		: 0,
	STATUS_ADDED	: 1,
	STATUS_WAIT		: 2,
	STATUS_READY	: 3,
	STATUS_EXCLUDED : 4,

    id              : 0,
	links			: null,	
	iconWait		: null,
	iconOK			: null,
	iconNOK			: null,
	iconWarn		: null,
	iconERR			: null,

	xmlhttp			: null,  
	dir 			: "ltr",
	
	imgIconWait     : null,
    fInit           : false,
    guid            : null,
	
	//TEMPLATE START
	
		title : "Bitdefender Total Security 2018",

	ok_title: "This page is safe",
	ok_content: "We could not find any suspect elements on this page.",

	err_title: "This page could not be verified",
	err_content: "We were unable to scan this page at this time.",

	nok_title: "This page is unsafe",
	nok_content: "We detected elements that may harm your computer.",

	wait_title: "This page is being scanned",
	wait_content: "Please wait while this page is being scanned.",

	warn_title: "This page might be unsafe",
	warn_content: "We detected elements that may harm your computer.",
	fraud_link: "http://trafficlight.bitdefender.com/info?url={URL}&language=en_US",

	TOOLTIP_WAIT       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/wait.png",
	TOOLTIP_OK       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/ok.png",
	TOOLTIP_NOK       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/nok.png",
	TOOLTIP_WARN       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/warn.png",
	TOOLTIP_ERR       	: "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/err.png",

	tooltipWait				: null,
	tooltipOK				: null,
	tooltipNOK				: null,
	tooltipWarn				: null,
	tooltipERR				: null,

	getId: function () {
	    bd_nd_B937DB990D1548698380D65CF906E308.id++;
	    var id = bd_nd_B937DB990D1548698380D65CF906E308.guid + "_" + bd_nd_B937DB990D1548698380D65CF906E308.id;
	    return id;
	},

	createToolTip : function(iconx)
	{
	    var tooltip = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP"));
	    if (tooltip != null) {
	        return;
	    }
	    var body = ((iconx != null) ? iconx.ownerDocument.getElementsByTagName("body")[0] : document.getElementsByTagName("body")[0]);
	    var tooltipImg;
		var tooltipTitle;
		var tooltipTitle1;
		var tooltipContent;

		tooltip = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
		tooltip.id					= "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP";
		tooltip.style.display 	= "none";
		tooltip.style.zIndex 	= 1000;
		tooltip.style.position 	= "absolute";
		tooltip.style.width 		= "420px";
		tooltip.style.height 	= "130px";
		tooltip.style.left 		= "0px";
		tooltip.style.top 		= "0px";

			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait					= new String();
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipOK					= new String();
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipNOK					= new String();
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWarn					= new String();
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr					= new String();

		if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed())
			{
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait					= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACCCAIAAACGrCv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwMjQ0NTM4MDVDQjExRTQ4Nzk3RjU0NERFRDcxMjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEwMjQ0NTM5MDVDQjExRTQ4Nzk3RjU0NERFRDcxMjg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTAyNDQ1MzYwNUNCMTFFNDg3OTdGNTQ0REVENzEyODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTAyNDQ1MzcwNUNCMTFFNDg3OTdGNTQ0REVENzEyODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xckFWAAALj0lEQVR42uzdiVOTdx7H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";
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipOK					= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACCCAIAAACGrCv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEMzJGREVDMDVDMTExRTRCMUY3OEFCNTk2MUY2NkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEMzJGREVEMDVDMTExRTRCMUY3OEFCNTk2MUY2NkFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQzMkZERUEwNUMxMTFFNEIxRjc4QUI1OTYxRjY2QUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQzMkZERUIwNUMxMTFFNEIxRjc4QUI1OTYxRjY2QUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7QDYsFAAALoklEQVR42uzd6W9c1RnH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";
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipNOK					= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACCCAIAAACGrCv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5MjFBODVFMDVDQTExRTRCNUQ4RjJBM0VERUZFMjE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5MjFBODVGMDVDQTExRTRCNUQ4RjJBM0VERUZFMjE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjkyMUE4NUMwNUNBMTFFNEI1RDhGMkEzRURFRkUyMTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjkyMUE4NUQwNUNBMTFFNEI1RDhGMkEzRURFRkUyMTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ToofRAAAKmElEQVR42uzdf2iV1x3H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";
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWarn					= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACCCAIAAACGrCv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0MUE2Q0M1MDVDQTExRTRCNDFGRkM4ODA2OTJGQURCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0MUE2Q0M2MDVDQTExRTRCNDFGRkM4ODA2OTJGQURCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTQxQTZDQzMwNUNBMTFFNEI0MUZGQzg4MDY5MkZBREIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTQxQTZDQzQwNUNBMTFFNEI0MUZGQzg4MDY5MkZBREIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ghGIvAAAL2UlEQVR42uzde3BU5RnH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";
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr					= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACCCAIAAACGrCv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0MUE2Q0M1MDVDQTExRTRCNDFGRkM4ODA2OTJGQURCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0MUE2Q0M2MDVDQTExRTRCNDFGRkM4ODA2OTJGQURCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTQxQTZDQzMwNUNBMTFFNEI0MUZGQzg4MDY5MkZBREIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTQxQTZDQzQwNUNBMTFFNEI0MUZGQzg4MDY5MkZBREIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ghGIvAAAL2UlEQVR42uzde3BU5RnH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";
		}
		else
		{
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait			= bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_WAIT;
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipOK			= bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_OK;
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipNOK			= bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_NOK;
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipWarn			= bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_WARN;
			bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr			= bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_ERR;
		}
		tooltipImg = ((iconx != null) ? iconx.ownerDocument.createElement("img") : document.createElement("img"));
		tooltipImg.id				= "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG";
		tooltipImg.style.border	= "none 0pt #000000";
		tooltipImg.style.width 		= "420px";
		tooltipImg.style.height 	= "130px";

		tooltipTitle = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
		tooltipTitle.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE";
		tooltipTitle.style.position = "absolute";
		tooltipTitle.style.top = "40px";
		tooltipTitle.style.left = "140px";
		tooltipTitle.style.width = "100%";
		tooltipTitle.style.height = "20px";
		tooltipTitle.style.visibility = "hidden";
		tooltipTitle.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.title;
		tooltipTitle.style.color = "#FFFFFF";
		tooltipTitle.style.fontSize="17px";
		tooltipTitle.style.textAlign = "left";

		tooltipTitle1 = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
		tooltipTitle1.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1";
		tooltipTitle1.style.position = "absolute";
		tooltipTitle1.style.top = "65px";
		tooltipTitle1.style.left = "140px";
		tooltipTitle1.style.width = "100%";
		tooltipTitle1.style.height = "25px";
		tooltipTitle1.style.visibility = "hidden";
		tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_title;
		tooltipTitle1.style.color = "#abbdcc";
		tooltipTitle1.style.fontSize="11px";
		tooltipTitle1.style.fontWeight="normal";
		tooltipTitle1.style.textAlign = "left";

		tooltipContent = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
		tooltipContent.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT";
		tooltipContent.style.position = "absolute";
		tooltipContent.style.top = "80px";
		tooltipContent.style.left = "140px";
		tooltipContent.style.width = "66%";
		tooltipContent.style.height = "25px";
		tooltipContent.style.visibility = "hidden";
		tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_content;
		tooltipContent.style.color = "#abbdcc";
		tooltipContent.style.fontSize="11px";
		tooltipContent.style.textAlign = "left";

		tooltip.appendChild(tooltipImg);
		tooltip.appendChild(tooltipTitle);
		tooltip.appendChild(tooltipTitle1);
		tooltip.appendChild(tooltipContent);
		body.appendChild(tooltip);
		tooltipImg.src				= bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait;
	},

	/*
		var result =
		{
			url: "url",
			status: 0,       //if != 0 => error
			rbl: 0			//0 == none; 1 == malware; 2 == phishing; 4 == fraud, 8 == untrusted
		};
	*/
	showToolTip : function(url, scanstatus, result, x, y)
	{
		var tooltip = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP");
		var tooltipImg = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG");
		var tooltipTitle = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE");
		var tooltipTitle1 = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1");
		var tooltipContent = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT");

		if ( (null == tooltip ) || (null == tooltipImg) || (null == tooltipTitle) || (null == tooltipTitle1)  || (null == tooltipContent) )
		{
			/*some pages replace whole document content on-the-fly*/
			bd_nd_B937DB990D1548698380D65CF906E308.createToolTip(null);
			tooltip = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP");
			tooltipImg = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG");
			tooltipTitle = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE");
			tooltipTitle1 = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1");
			tooltipContent = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT");
		}

		if ( (null == tooltip ) || (null == tooltipImg) || (null == tooltipTitle) || (null == tooltipTitle1)  || (null == tooltipContent) )
		{
			return;
		}

		if (bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY == scanstatus)
		{
			if (0 != result.status) //error
			{
				tooltipImg.src		= bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr;
				tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_title;
				tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_content;
			}
			else
			{
				if (0 == result.rbl)
				{
					tooltipImg.src		= bd_nd_B937DB990D1548698380D65CF906E308.tooltipOK;
					tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.ok_title;
					tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.ok_content;
				}
				else
				if (8 != result.rbl)
				{
					tooltipImg.src		= bd_nd_B937DB990D1548698380D65CF906E308.tooltipNOK;
					tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.nok_title;
					tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.nok_content;
				}
				else
				{
					tooltipImg.src		= bd_nd_B937DB990D1548698380D65CF906E308.tooltipWarn;
					tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.warn_title;
					tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.warn_content;
				}
			}
		}
		else //not ready
		{
			tooltipImg.src			= bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait;
			tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_title;
			tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_content;
		}

		tooltip.style.left		= x + "px";
		tooltip.style.top			= y + "px";
		tooltip.style.display 	= "block";
		tooltipTitle.style.visibility="visible";
		tooltipTitle1.style.visibility="visible";
		tooltipContent.style.visibility="visible";
	},

	hideToolTip : function()
	{
		var tooltip = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP");
		var tooltipTitle = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE");
		var tooltipTitle1 = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1");
		var tooltipContent = document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT");

		if ( (typeof tooltip == "undefined")
		||  (typeof tooltipTitle == "undefined")
		||  (typeof tooltipTitle1 == "undefined")
		||  (typeof tooltipContent == "undefined") )
		{
			return;
		}
		tooltip.style.display 	= "none";
		tooltipTitle.style.visibility="hidden";
		tooltipTitle1.style.visibility="hidden";
		tooltipContent.style.visibility="hidden";
	},

	destroyToolTip : function (iconx) {
	    var tooltip = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP");
	    if (tooltip != null) {
	        tooltip.parentNode.removeChild(tooltip);
	    }
	    var tooltipTitle = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE");
	    if (tooltipTitle != null) {
	        tooltipTitle.parentNode.removeChild(tooltipTitle);
	    }
	    var tooltipTitle1 = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1");
	    if (tooltipTitle1 != null) {
	        tooltipTitle1.parentNode.removeChild(tooltipTitle1);
	    }
	    var tooltipContent = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT");
	    if (tooltipContent != null) {
	        tooltipContent.parentNode.removeChild(tooltipContent);
	    }
	},

	
	//TEMPLATE END
	
	getDir : function()
	{
		if (document.body.currentStyle)
		{
			return document.body.currentStyle["direction"];
		}
		else
		if (window.getComputedStyle)
		{
			return document.defaultView.getComputedStyle(document.body, null).getPropertyValue("direction");
		}
		else
		{
			return "ltr";
		}	
	},
	
	getPos : function(elem) 
	{	
		var pa = { x: 0, y: 0 },
			doc = elem && elem.ownerDocument;
		
		if (!doc) return pa;
		
		var docElem = doc.documentElement || document.body.parentNode || doc.body;
		var win = doc.defaultView || doc.parentWindow;
		
		var bbox = { top: 0, left: 0 };
		
		if (typeof elem.getBoundingClientRect !== "undefined") {
			bbox = elem.getBoundingClientRect();
		}

		var xscroll = win.pageXOffset || docElem.scrollLeft;
		var yscroll = win.pageYOffset || docElem.scrollTop;
		
		pa.y = bbox.top + yscroll - docElem.clientTop;
		pa.x = bbox.left + xscroll - docElem.clientLeft;
		
		return pa;
	},
	
	canEmbed : function()
	{
		var rv = -1; 

		if (navigator.appName != 'Microsoft Internet Explorer')
		{
			return true;
		}
		
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		{
			rv = parseFloat(RegExp.$1);
		}
		if (rv >= 8.0)
		{
			return true;
		}
		
		return false;
	},
	
	isPageOK : function()
	{
		if (typeof(window.top) != 'object')
		{
			if (window.parent != window)
			{
				return false;
			}
		}

		return true;
	},
	
	init : function()
	{
	    function guid_() {
	        function s4() {
	            return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
	        }
	        return s4() + s4() + s4() + +s4() +
              s4() + s4() + s4() + s4();
	    }

	    if (bd_nd_B937DB990D1548698380D65CF906E308.fInit) {
	        return;
	    }
	    bd_nd_B937DB990D1548698380D65CF906E308.fInit = true;
	    bd_nd_B937DB990D1548698380D65CF906E308.guid = "bd_nd_" + guid_();
		bd_nd_B937DB990D1548698380D65CF906E308.iconWait			= new String(); 
		bd_nd_B937DB990D1548698380D65CF906E308.iconOK			= new String(); 		
		bd_nd_B937DB990D1548698380D65CF906E308.iconNOK			= new String(); 
		bd_nd_B937DB990D1548698380D65CF906E308.iconWarn			= new String(); 
		bd_nd_B937DB990D1548698380D65CF906E308.iconERR			= new String(); 
			
		if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed())
		{
			bd_nd_B937DB990D1548698380D65CF906E308.iconWait		= "data:image/gif;base64,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"; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconOK		= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NkY5OTQ2MDVCQjExRTQ5NDZFQzJFNEUyMTZDMzFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY0NkY5OTQ3MDVCQjExRTQ5NDZFQzJFNEUyMTZDMzFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjQ2Rjk5NDQwNUJCMTFFNDk0NkVDMkU0RTIxNkMzMUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ2Rjk5NDUwNUJCMTFFNDk0NkVDMkU0RTIxNkMzMUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5fCW0OAAABA0lEQVR42mKs3y3JgAbUgTgNiO2B2AAqdgGIDwLxLCC+iayYCU1zERCfh9LGQMwMxcZochgGsAHxdiDuBWJOBtyAE6pmO1QP3IAuIPZgIB6A1LbDDNAF4hwG0kE+EGuBDEiG+hMvsFcqAmMkANKTzESM00EaHZVKgM5lwvAKSEQRn00wzQfv9THsv9eDboA0C7oIyBZkA/BoBnsDZMAjIFaBicAUgjSCAB7NIPAIZMAO9FhA1oBHMwjsZgQmZV1oCmMmMRr/ArEhKBAvA/F0MtLBFJBeWLwUQ71CLACpLUNOyr+A2BNq0Hc8Gr9D1XhC9WCkjD6Qv6D0BSTxC2hycAAQYADRUEMJSK61tQAAAABJRU5ErkJggg=="; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconNOK		= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwNjlBMDUxMDVCQzExRTRCODRCQjA4MzcwMjdBN0QyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwNjlBMDUyMDVCQzExRTRCODRCQjA4MzcwMjdBN0QyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDA2OUEwNEYwNUJDMTFFNEI4NEJCMDgzNzAyN0E3RDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDA2OUEwNTAwNUJDMTFFNEI4NEJCMDgzNzAyN0E3RDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7t3hOOAAAA9klEQVR42mL8Ly/PgAbUgTgNiO2B2AAqdgGIDwLxLCC+iayYEc2AIiBuAWJOBuzgOxDXAHEfugFsQLwRiD0YiAM7gNgfiH8xQQW6SNDMAFXbDnOBLpA+D8TMDKSBv0CsB3JBMobm/HwIxsWHAJCeZBasTmdiQtVQWMjAMHEiVq+ADFDEEO7vR2gEAZBmmBgqkGbC6cN//7Cz0bwBcsEjIFbBCANkZyO7BBU8YoHGaQ5GGKA7mwmrY3dTGo2GIGMvA/F0BtLBFJBemLuKoV5hICEpl4F9BhX4BcSeUIO+49H4HarGE6oHIzciZ2cntOy8D1t2BggwAAYUQTO55K4YAAAAAElFTkSuQmCC"; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconWarn		= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGQTREOEM3MDVCQzExRTRBNzY4REM4N0U0OEYxMDc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGQTREOEM4MDVCQzExRTRBNzY4REM4N0U0OEYxMDc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUZBNEQ4QzUwNUJDMTFFNEE3NjhEQzg3RTQ4RjEwNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUZBNEQ4QzYwNUJDMTFFNEE3NjhEQzg3RTQ4RjEwNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4JERssAAAA6UlEQVR42mJ8doABHagDcRoQ2wOxAVTsAhAfBOJZQHwTWTEjmgFFQNwCxJwM2MF3IK4B4j6YABOUZgPi7UDci0czA1SuF6qWDdmALiD2YCAegNS2w7ygC6TPAzEzuipJ+/9g+vlBRmyG/AViPZALkrFpJgKA9CQzkeh0DK+ADFCkwABpJgbKADPIgEcUGPAIZMAOXLKg0McRAzCwmwmaPP9ikwVFIywqcUTjXJABl4F4OhnOnwLSC8sLoGS5kYQoBXnbH4h/wWLhFxB7AnExNMMw4MlMxVC1v7DlRuTs7ISWnfdhy84AAQYAlfE1+SU4RUsAAAAASUVORK5CYII="; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconERR		= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4NkRFQTJDMDVCRjExRTQ4NDY2QUQ5OUY2Q0MxNzUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4NkRFQTJEMDVCRjExRTQ4NDY2QUQ5OUY2Q0MxNzUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjg2REVBMkEwNUJGMTFFNDg0NjZBRDk5RjZDQzE3NTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjg2REVBMkIwNUJGMTFFNDg0NjZBRDk5RjZDQzE3NTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71eHu/AAABKUlEQVR42mJ8doABHagDcRoQ2wOxAVTsAhAfBOJZQHwTWTEjmgFFQNwCxJwM2MF3IK4B4j6YABOUZgPi7UDci0czA1SuF6qWDdmALiD2gDuLkY2BV7GFQdL+PxiD2CAxJABS2w7zgi6QPg/EzDBZXsV2Bh65ChSrvzzqYPh8vxJZ6C8Q64FckIysGQS4JJPB9NuLzmCMLIYEQHqSWZCdDgMvj4mBaXYhDwYCwANkgCIuWSHd7Yjgf7EAmxJpJgYiwNcnfUD/12CTYga54BEQq2CTfX6QkZDZj0Au2IFLFhaNeMBuJmjy/MtAOgDpmQsy4DIQT8flBTzemALSCwvEYnxewQJAasuQk/IvIPaEGvQdj8bvUDWeUD0YuRE5OzuhZed92LIzQIABAM8kTACNpBrxAAAAAElFTkSuQmCC"; 
		}
		else
		{
			bd_nd_B937DB990D1548698380D65CF906E308.iconWait		= bd_nd_B937DB990D1548698380D65CF906E308.ICON_WAIT; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconOK		= bd_nd_B937DB990D1548698380D65CF906E308.ICON_OK; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconNOK		= bd_nd_B937DB990D1548698380D65CF906E308.ICON_NOK; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconWarn		= bd_nd_B937DB990D1548698380D65CF906E308.ICON_WARN; 
			bd_nd_B937DB990D1548698380D65CF906E308.iconERR		= bd_nd_B937DB990D1548698380D65CF906E308.ICON_ERR; 
		}

		bd_nd_B937DB990D1548698380D65CF906E308.imgIconWait		= document.createElement("img");
		bd_nd_B937DB990D1548698380D65CF906E308.imgIconWait.src = bd_nd_B937DB990D1548698380D65CF906E308.iconWait;

		bd_nd_B937DB990D1548698380D65CF906E308.dir					= bd_nd_B937DB990D1548698380D65CF906E308.getDir();
		if (window.XMLHttpRequest) 
		{      
			bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp 			= new XMLHttpRequest(); 
		}
		else 
		if (window.ActiveXObject)
		{  
			bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp 			= new ActiveXObject("Microsoft.XMLHTTP");
		}
	},
		
	handleResponse : function(xml)
	{
		var roottag = xml.getElementsByTagName("netdefender")[0];
		if (null == roottag)
		{
			return;
		}
		for (var i = 0; i < roottag.childNodes.length; i++)
		{
			if ("url" == roottag.childNodes[i].tagName)
			{
				var status = roottag.childNodes[i].getAttribute("status");
				if (null != status)
				{
					var result = 
					{
						url: "",
						status: -1000,
						rbl: 0
					};
				
					if (null != status)
					{
						status = parseInt(status);
						if (isNaN(status))
						{
							status = -1002;
						}
					}
					else
					{
						status = -1001;
					}
					var ok = 0;
					var urltag = roottag.childNodes[i];
					for (var j = 0; j < urltag.childNodes.length; j++)
					{
						if ("value" == urltag.childNodes[j].tagName)
						{
							var value = urltag.childNodes[j].childNodes[0].nodeValue;
							if (null != value)
							{
								result.url = value;
								ok++;
							}
						}
					}
					if (0 == status)
					{
						for (var j = 0; j < urltag.childNodes.length; j++)
						{
							if ("result" == urltag.childNodes[j].tagName)
							{
								if ("urlbl" == urltag.childNodes[j].getAttribute("type"))
								{
									var rbltag = urltag.childNodes[j];
									for (var k = 0; k < rbltag.childNodes.length; k++)
									{
										if ("value" == rbltag.childNodes[k].tagName)
										{
											var value = parseInt(rbltag.childNodes[k].childNodes[0].nodeValue);
											if (!isNaN(value))
											{
												result.rbl = value;
												ok++;
											}
											break;
										}
									}
								}
							}
						}
					}
					result.status = status;	
					if (2 > ok)
					{
						result.status = -1003;
					}
					for (var x = 0; x < bd_nd_B937DB990D1548698380D65CF906E308.links.length; x++)
					{
						if (bd_nd_B937DB990D1548698380D65CF906E308.STATUS_WAIT == bd_nd_B937DB990D1548698380D65CF906E308.links[x][1] && 
							 bd_nd_B937DB990D1548698380D65CF906E308.links[x][3] == result.url)
						{
							var icon_id	= bd_nd_B937DB990D1548698380D65CF906E308.ID_PREFIX + x;
							var icon		= document.getElementById(icon_id);
							if (null != icon)
							{
								icon.style.width	= "16px";
								icon.style.height	= "16px";
								icon.style.marginRight = "3px";
								if (0 != result.status)
								{
									icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconERR;
								}
								else
								{
									if (0 == result.rbl)
									{
										icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconOK;
									}
									else
									if (0 != (result.rbl & ~0x18))
									{
										icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconNOK;
									}
									else
									{
										icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconWarn;
									}
								}
							}
							bd_nd_B937DB990D1548698380D65CF906E308.links[x][1] = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY;
							bd_nd_B937DB990D1548698380D65CF906E308.links[x][2] = result;
						}
					}					
					
				}
			}
		}
	},

	getElementById: function (idx) {
	    if (window.top != window.self) {
	        return window.parent.document.getElementById(idx);
	    }
	    else {
	        return document.getElementById(idx);
	    }
	},

	getElementsByClassName: function (clx) {
	    if (window.top != window.self) {
	        return window.parent.document.getElementsByClassName(clx);
	    }
	    else {
	        return document.getElementsByClassName(clx);
	    }
	},

	getElementsByTagName: function (tagx) {
	    if (window.top != window.self) {
	        return window.parent.document.getElementsByTagName(tagx);
	    }
	    else {
	        return document.getElementsByTagName(tagx);
	    }
	},

	getElementByCtx : function(ctx) {
	    var all = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByTagName("a");
	    if (all == null) {
	        return null;
	    }
	    for (var i = 0; i < all.length; i++) {
	        var ctx2 = all[i].getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.CTX);
	        if ((ctx2 != null) && (ctx2 == ctx)) {
	            return all[i];
	        }
	    }
	    return null;
	},

	getElementsByURL: function (url) {
	    var all = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByClassName(bd_nd_B937DB990D1548698380D65CF906E308.CLASS);
	    if (all == null) {
	        return null;
	    }
	    var ret = new Array();
	    for (var i = 0; i < all.length; i++) {
	        var url2 = all[i].getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL);
	        if ((url2 != null) && (url2 == url)) {
	            ret.push(all[i]);
	        }
	    }
	    return ret;
	},

	getElementsByHost: function (url) {
	    var all = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByClassName(bd_nd_B937DB990D1548698380D65CF906E308.CLASS);
	    if (all == null) {
	        return null;
	    }
	    var parser = document.createElement("a");
	    parser.href = url;
	    var host1 = parser.host;
	    if ((host1 == null) || (typeof host1 == "undefined" ) || (host1 == "")) {
	        return null;
	    }
	    var ret = new Array();
	    for (var i = 0; i < all.length; i++) {
	        var url2 = all[i].getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL);
	        if (url2 != null) {
	            parser.href = url2;
	            var host2 = parser.host;
	            if ((host2 != null) && (host1 == host2)) {
	                ret.push(all[i]);
	            }
	        }
	    }
	    return ret;
	},

	showToolTip2: function (iconx) {
	    var anchor = iconx.parentNode;
	    if (anchor == null) {
	        return;
	    }
	    // scanstatus, result, x, y
	    var iconStatus = anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS);
	    if (iconStatus == null) {
	        return;
	    }
	    bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
	    bd_nd_B937DB990D1548698380D65CF906E308.createToolTip(iconx);
	    var tooltip = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP");
	    var tooltipImg = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG");
	    var tooltipTitle = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE");
	    var tooltipTitle1 = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE1");
	    var tooltipContent = iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT");

	    if ((iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ADDED) || (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_WAIT)) {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipWait;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.wait_content;
	    }
	    else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR) {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_content;
	    }
	    else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_OK) {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipOK;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.ok_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.ok_content;
	    }
	    else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_THREAT) {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipNOK;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.nok_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.nok_content;
	    }
	    else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_WARN) {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipWarn;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.warn_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.warn_content;
	    }
	    else {
	        tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipErr;
	        tooltipTitle1.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_title;
	        tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.err_content;
	    }

	    var p = bd_nd_B937DB990D1548698380D65CF906E308.getPos(iconx);
	    var x = p.x;
	    var y = p.y + 28;
	    tooltip.style.left = x + "px";
	    tooltip.style.top = y + "px";
	    tooltip.style.display = "block";
	    tooltipTitle.style.visibility = "visible";
	    tooltipTitle1.style.visibility = "visible";
	    tooltipContent.style.visibility = "visible";
	},

	onMouseOver2: function () {
	    //try {
	        var obj;
	        if (typeof event != "undefined") {
	            obj = event.srcElement ? event.srcElement : event.target;
	        }
	        else {
	            obj = this;
	        }
	        bd_nd_B937DB990D1548698380D65CF906E308.showToolTip2(obj);
	    //} catch (ex) { };
	},

	onMouseOut2: function () {
	    //try {
	        var obj;
	        if (typeof event != "undefined") {
	            obj = event.srcElement ? event.srcElement : event.target;
	        }
	        else {
	            obj = this;
	        }
	        bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(obj);
	    //} catch (ex) { };
	},

	onClickLink2: function (e) {
	    //try {
	        var obj;
	        if (typeof event != "undefined") {
	            obj = event.srcElement ? event.srcElement : event.target;
	        }
	        else {
	            obj = this;
	        }
	        if (typeof e != "undefined") {
	            e.preventDefault();
	            e.stopPropagation();
	        }
	        else if (typeof window.event != "undefined") {
	            window.event.returnValue = false;
	            window.event.cancelBubble = true;
	        }

	        if (obj == null) {
	            return;
	        }
	        bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(obj);
	        var anchor = obj.parentNode;
	        if (anchor == null) {
	            return;
	        }
	        // scanstatus, result, x, y
	        var url = anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL);

	        var flink = bd_nd_B937DB990D1548698380D65CF906E308.fraud_link;
	        var parser = document.createElement('a');
	        parser.href = flink;
	        if ((parser.host == null) || (parser.host == "")) {
	            flink = "http://trafficlight.bitdefender.com/info?url=";
	        }
	        var alink = escape(url);
	        var newlink = flink.replace("{URL}", alink);
	        window.open(newlink, "_blank");
	    //} catch (ex) { };
	},

	addLink2 : function(link, url)
	{
	    if (bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp == null) {
	        return 0;
	    }

	    if ((link == null) || (typeof link == "undefined")) {
	        return 0;
	    }
	    if (link.className == bd_nd_B937DB990D1548698380D65CF906E308.CLASS) {
	        return 0;
	    }
	    if ((url == null) || (typeof url != "undefined") || (url == "")) {
	        url = link.href;
	    }
	    if ((url == null) || (typeof url == "undefined") || (url == "")) {
	        return 0;
	    }

	    var flink = bd_nd_B937DB990D1548698380D65CF906E308.fraud_link;
	    var parser = link.ownerDocument.createElement('a');
	    parser.href = flink;
	    if (parser.host == null) {
	        flink = "http://trafficlight.bitdefender.com/info?url=";
	    }
	    var href = flink.replace("{URL}", escape(url));

	    var anchorId = link.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.CTX);
	    if (anchorId != null) {
	        var anchor = link.ownerDocument.getElementById(anchorId);
	        if (anchor == null) {
	            return 0;
	        }
	        var status = anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS);
	        if ((status != null)
                && ((status == bd_nd_B937DB990D1548698380D65CF906E308.ST_ADDED)
                || (status == bd_nd_B937DB990D1548698380D65CF906E308.ST_WAIT)
                || (status == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR))) {
	            anchor.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL, unescape(encodeURIComponent(url)));
	            //console.log("addLink2 (RE-send) : \'id=" + anchor.id + "\' url=\'" + anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL) + "\'");
	            return 1;
	        }
	        return 0;
	    }
	    var icon = link.ownerDocument.createElement("img");
	    icon.style.border = "0px";
	    icon.style.cursor = "pointer";
	    icon.style.display = "inline";
	    icon.style.marginRight = "3px";
	    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.imgIconWait.attributes.src.value;

	    var id = bd_nd_B937DB990D1548698380D65CF906E308.getId();
	    var tmpAnchor = link.ownerDocument.createElement("a");
	    tmpAnchor.href = href;
	    tmpAnchor.id = id;
	    tmpAnchor.className = bd_nd_B937DB990D1548698380D65CF906E308.CLASS;
	    tmpAnchor.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS, bd_nd_B937DB990D1548698380D65CF906E308.ST_ADDED);
	    tmpAnchor.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL, unescape(encodeURIComponent(url)));

	    tmpAnchor.appendChild(icon);
	    tmpAnchor.style.display = link.style.display; // "none";
	    tmpAnchor.style.visibility = link.style.visibility; // "hidden";
	    link.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.CTX, id);

	    link.parentNode.insertBefore(tmpAnchor, link);
	    if (window.addEventListener) {
	        icon.addEventListener("mouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver2, false);
	        icon.addEventListener("mouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut2, false);
	        icon.addEventListener("click", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink2, false);

	    }
	    else
        if (window.attachEvent) {
	            icon.attachEvent("onmouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver2);
	            icon.attachEvent("onmouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut2);
	            icon.attachEvent("onclick", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink2);
        }
	    //console.log("addLink2    (send) : \'id=" + tmpAnchor.id + "\' url=\'" + tmpAnchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL) + "\'");
	    return 1;
	},

	handleResponse2: function (xml) {
	    var roottag = xml.getElementsByTagName("netdefender")[0];
	    if (null == roottag) {
	        return;
	    }
	    var scanUrls = roottag.getElementsByTagName("url");
	    if ((scanUrls == null) || (scanUrls.length <= 0)) {
	        return;
	    }
	    var hosts = new Array(); // cumva ndsdk trunchiaza url-uri
	    for (var i = 0; i < scanUrls.length; i++) {
	        var url_node = scanUrls[i];
	        var scan =  {
                url: "",
                status: null,
                type: null,
                value: null,
                iconStatus: null
            };

	        var status = url_node.getAttribute("status");
	        if (status != null) {
	            scan.status = status;
	        }

	        var values = url_node.getElementsByTagName("value");
	        if (values != null) {
	            for (var v = 0; v < values.length; v++) {
	                var value = values[v];
	                for (var cn = 0; (value.childNodes != null) && (cn < value.childNodes.length) ; cn++) {
	                    if (value.childNodes[cn].nodeType == 4 /*cdata*/) {
	                        scan.url += value.childNodes[cn].nodeValue;
	                    }
	                    else if (value.childNodes[cn].nodeType == 3 /*text*/) {
	                        scan.value = value.childNodes[cn].nodeValue;
	                    }
	                }
                }
	        }
            var results = url_node.getElementsByTagName("result");
	        if ((results != null) && (results.length == 1)) {
	            var result = results[0];
	            var type = result.getAttribute("type");
	            if (type != null) {
	                scan.type = type;
	            }
	        }

	        var iconStatus = bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR;
	        if ((scan.status != null) && (scan.status == "0") && (scan.type != null) && (scan.type == "urlbl") && (scan.value != null) && (!isNaN(scan.value))) {
	            var nvalue = parseInt(scan.value);
	            if (0 == nvalue) {
	                iconStatus = bd_nd_B937DB990D1548698380D65CF906E308.ST_OK;
	            } else if (nvalue & ~0x8) {
	                iconStatus = bd_nd_B937DB990D1548698380D65CF906E308.ST_THREAT;
	            } else {
	                iconStatus = bd_nd_B937DB990D1548698380D65CF906E308.ST_WARN;
	            }
	        }
	        scan.iconStatus = iconStatus;
	        //console.log("handleResponse2: (" + scan.status + ", " + scan.type + ", " + scan.value + ", " + scan.iconStatus + ") url=\'" + scan.url + "\'");

	        if ((scan.url == null) || (scan.url == "")) {
	            continue;
	        }
	        var anchors = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByURL(scan.url);
	        if ((anchors == null) || (anchors.length == 0)) {
	            hosts.push(scan);
	            continue;
	        }

	        for (var a = 0; a < anchors.length; a++) {
	            var anchor = anchors[a];
	            anchor.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS, iconStatus);
	            //console.log("                 \'" + anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS) + "\' id=\'" + anchor.id + "\'");
	            var imgs = anchor.getElementsByTagName("img");
	            for (var b = 0; b < imgs.length; b++) {
	                var icon = imgs[b];
	                if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR) {
	                    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconERR;
	                }
	                else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_OK) {
	                    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconOK;
	                }
	                else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_THREAT) {
	                    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconNOK;
	                }
	                else if (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_WARN) {
	                    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconWarn;
	                }
	                else {
	                    icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconERR;
	                }
	            }
	        }
	    }

	    if (hosts.length > 0) {
	        for (var p = 0; p < hosts.length; p++) {
	            //console.log("          extra: (" + hosts[p].status + ", " + hosts[p].type + ", " + hosts[p].value + ", " + hosts[p].iconStatus + ") url=\'" + hosts[p].url + "\'");
	            var anchors = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByHost(hosts[p].url);
	            if (anchors != null) {
	                for (var a = 0; a < anchors.length; a++) {
	                    var anchor = anchors[a];
	                    var iconStatus = anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS);
	                    if ((iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ADDED)
                            || (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_WAIT)
                            || (iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR)) {
	                        anchor.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS, hosts[p].iconStatus);
	                        //console.log("                 \'" + anchor.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS) + "\' id=\'" + anchor.id + "\'");
	                        var imgs = anchor.getElementsByTagName("img");
	                        for (var b = 0; b < imgs.length; b++) {
	                            var icon = imgs[b];
	                            if (hosts[p].iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR) {
	                                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconERR;
	                            }
	                            else if (hosts[p].iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_OK) {
	                                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconOK;
	                            }
	                            else if (hosts[p].iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_THREAT) {
	                                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconNOK;
	                            }
	                            else if (hosts[p].iconStatus == bd_nd_B937DB990D1548698380D65CF906E308.ST_WARN) {
	                                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconWarn;
	                            }
	                            else {
	                                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconERR;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	},

	processLinks2: function () {
	    var aicons = bd_nd_B937DB990D1548698380D65CF906E308.getElementsByClassName(bd_nd_B937DB990D1548698380D65CF906E308.CLASS);
	    if ((aicons == null) || (typeof aicons == "undefined")) {
	        return;
	    }
	    var links = new Array();
	    for (var i = 0; i < aicons.length; i++) {
	        var fAdd = false;
	        var aicon = aicons[i];
	        var status = aicon.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS);
	        if ((status == null)
                || (status == bd_nd_B937DB990D1548698380D65CF906E308.ST_ADDED)
                || (status == bd_nd_B937DB990D1548698380D65CF906E308.ST_WAIT)
                || (status == bd_nd_B937DB990D1548698380D65CF906E308.ST_ERR)) {
	            fAdd = true;
	        }
	        var url = aicon.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.URL);
	        if ((url == null) || (url == "")) {
	            fAdd = false;
	        }
	        if (fAdd) {
	            aicon.setAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS, bd_nd_B937DB990D1548698380D65CF906E308.ST_WAIT);
	            //console.log("processLinks2: \'" + aicon.getAttribute(bd_nd_B937DB990D1548698380D65CF906E308.STATUS) + "\' id=\'" + aicon.id + "\'");
	            var anchor = bd_nd_B937DB990D1548698380D65CF906E308.getElementByCtx(aicon.id);
	            if ((anchor != null) && (anchor.style != "undefined") && (anchor.style.display != "undefined") && (anchor.style.visibility != "undefined")) {
	                aicon.style.display = anchor.style.display;
	                aicon.style.visibility = anchor.style.visibility;
	            }
	            var icon = aicon.childNodes[0];
	            icon.src = bd_nd_B937DB990D1548698380D65CF906E308.imgIconWait.attributes.src.value;

	            if (links.indexOf(url) < 0) {
	                //console.log("        url++: \'" + url + "\'");
	                links.push(url);
	            }
	        }

	    }

	    if (links.length > 0) {
	        bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.onreadystatechange = function () {
	            if (4 == bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.readyState) {
	                bd_nd_B937DB990D1548698380D65CF906E308.handleResponse2(bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.responseXML);
	            }
	        }
	        var sid = Math.random();
	        bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.open("GET", sid, true);
	        for (var k = 0; k < links.length; k++) {
	            bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader(bd_nd_B937DB990D1548698380D65CF906E308.HEADER_NAME + k, links[k]);
	        }
	        bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.send(null);
	    }
	},


	addLink : function(link, url)
	{
		if ("" == url || null == url)
		{
			url = link.href;
		}
		if (null == bd_nd_B937DB990D1548698380D65CF906E308.links)
		{
			bd_nd_B937DB990D1548698380D65CF906E308.links = new Array();
		}
		for (var i = 0; i < bd_nd_B937DB990D1548698380D65CF906E308.links.length; i++)
		{
			if (link == bd_nd_B937DB990D1548698380D65CF906E308.links[i][0])
			{
				return;
			}
		}		
		bd_nd_B937DB990D1548698380D65CF906E308.links.push(new Array(link, bd_nd_B937DB990D1548698380D65CF906E308.STATUS_NONE, 0, url, null));
	},
	

	processLinks : function()
	{
		if (null == bd_nd_B937DB990D1548698380D65CF906E308.links)
		{
			return;
		}
		for (var i = 0; i < bd_nd_B937DB990D1548698380D65CF906E308.links.length; i++)
		{
			if (bd_nd_B937DB990D1548698380D65CF906E308.STATUS_NONE == bd_nd_B937DB990D1548698380D65CF906E308.links[i][1])
			{
				var icon_id  		= bd_nd_B937DB990D1548698380D65CF906E308.ID_PREFIX + i;
				var icon			= null;
				
				icon = document.getElementById(icon_id);
				if (null == icon)
				{
					icon 				= document.createElement("img");
					icon.id 			= icon_id;
					icon.style.border	= "0px";
					icon.style.cursor	= "pointer";
					icon.style.display = "inline";
					icon.style.marginRight = "3px";
					
					//http://support.microsoft.com/kb/2688188
					icon.src			= bd_nd_B937DB990D1548698380D65CF906E308.imgIconWait.attributes.src.value;
					
					var flink = bd_nd_B937DB990D1548698380D65CF906E308.fraud_link;
					var parser = document.createElement('a');
					parser.href = flink;
					if (parser.host == null) {
					    flink = "http://trafficlight.bitdefender.com/info?url=";
					}
					var tmpAnchor = document.createElement("a");					
					tmpAnchor.href = flink.replace("{URL}", escape(bd_nd_B937DB990D1548698380D65CF906E308.links[i][3]));
					tmpAnchor.appendChild(icon);
					tmpAnchor.style.display  = bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.display;
					tmpAnchor.style.visibility = bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.visibility;
					
					bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].parentNode.insertBefore(tmpAnchor, bd_nd_B937DB990D1548698380D65CF906E308.links[i][0]);
					bd_nd_B937DB990D1548698380D65CF906E308.links[i][4] = tmpAnchor;
					
					bd_nd_B937DB990D1548698380D65CF906E308.links.push(new Array(tmpAnchor, bd_nd_B937DB990D1548698380D65CF906E308.STATUS_EXCLUDED, 0, null, null));

					if (window.addEventListener)
					{
						icon.addEventListener("mouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver, false);
						icon.addEventListener("mouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut, false);
						icon.addEventListener("click", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink, false);

					}
					else
					if (window.attachEvent)
					{
						icon.attachEvent("onmouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver);
						icon.attachEvent("onmouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut);
						icon.attachEvent("onclick", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink);
					}					
				}
				bd_nd_B937DB990D1548698380D65CF906E308.links[i][1] = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ADDED;
			}
			else
			{
				if (null != bd_nd_B937DB990D1548698380D65CF906E308.links[i][0] && null != bd_nd_B937DB990D1548698380D65CF906E308.links[i][4])
				{
					if (bd_nd_B937DB990D1548698380D65CF906E308.links[i][4].style.display  != bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.display)
					{
						bd_nd_B937DB990D1548698380D65CF906E308.links[i][4].style.display  = bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.display;
					}
					if (bd_nd_B937DB990D1548698380D65CF906E308.links[i][4].style.visibility != bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.visibility)
					{
						bd_nd_B937DB990D1548698380D65CF906E308.links[i][4].style.visibility = bd_nd_B937DB990D1548698380D65CF906E308.links[i][0].style.visibility;
					}
				}
			}
		}
		if (null == bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp)
		{
			return;
		}
		bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.onreadystatechange = function()
		{
			if (4 == bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.readyState)
			{
				bd_nd_B937DB990D1548698380D65CF906E308.handleResponse(bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.responseXML);
			}    
		}
		var links	= new Array();
		var sid		= Math.random();
		bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.open("GET", sid, true);
		for (var i = 0; i < bd_nd_B937DB990D1548698380D65CF906E308.links.length; i++)
		{
			if (bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ADDED == bd_nd_B937DB990D1548698380D65CF906E308.links[i][1])
			{
				var found = false;
				for (var j = 0; j < links.length; j++)
				{
					if (links[j] == bd_nd_B937DB990D1548698380D65CF906E308.links[i][3])
					{
						found = true;
						break;
					}
				}
				if (!found)
				{
					bd_nd_B937DB990D1548698380D65CF906E308.links[i][1] = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_WAIT;
					bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader(bd_nd_B937DB990D1548698380D65CF906E308.HEADER_NAME + i, bd_nd_B937DB990D1548698380D65CF906E308.links[i][3]);
					links.push(bd_nd_B937DB990D1548698380D65CF906E308.links[i][3]);
				}
			}
		}
		if (0 < links.length)
		{
			bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.send(null);
		}
	},
	
	onMouseOver : function()
	{
		var obj;
		if (typeof event != "undefined")
		{
			obj = event.srcElement?event.srcElement:event.target;
		}
		else
		{
			obj = this;
		}
		var idx = parseInt(obj.id.substr(bd_nd_B937DB990D1548698380D65CF906E308.ID_PREFIX.length));
		if (0 > idx || idx >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)
		{
			return;
		}
		var p = bd_nd_B937DB990D1548698380D65CF906E308.getPos(obj);
		bd_nd_B937DB990D1548698380D65CF906E308.showToolTip(bd_nd_B937DB990D1548698380D65CF906E308.links[idx][0].href, 
															bd_nd_B937DB990D1548698380D65CF906E308.links[idx][1], 
															bd_nd_B937DB990D1548698380D65CF906E308.links[idx][2], 
															p.x, p.y + 28);
	},

	onMouseOut : function()
	{
		var obj;
		if (typeof event != "undefined")
		{
			obj = event.srcElement?event.srcElement:event.target;
		}
		else
		{
			obj = this;
		}
		bd_nd_B937DB990D1548698380D65CF906E308.hideToolTip();
	},
	
		
	onClickLink : function(e)
	{
		var obj;
		if (typeof event != "undefined")
		{
			obj = event.srcElement?event.srcElement:event.target;
		}
		else
		{
			obj = this;
		}
		var idx = parseInt(obj.id.substr(bd_nd_B937DB990D1548698380D65CF906E308.ID_PREFIX.length));
		if (0 > idx || idx >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)
		{
			return;
		}	
		
		if (typeof e != "undefined")
		{
			e.preventDefault();
			e.stopPropagation();
		}
		else if (typeof window.event != "undefined")
		{
			window.event.returnValue = false;
			window.event.cancelBubble = true;
		}
		
		bd_nd_B937DB990D1548698380D65CF906E308.hideToolTip();
		
		var flink = bd_nd_B937DB990D1548698380D65CF906E308.fraud_link;
		var parser = document.createElement('a');
		parser.href = flink;
		if (parser.host == null) {
		    flink = "http://trafficlight.bitdefender.com/info?url=";
		}
		var alink = escape(bd_nd_B937DB990D1548698380D65CF906E308.links[idx][3]);
		var newlink = flink.replace("{URL}", alink);
		window.open(newlink, "_blank");
	},
	
	start : function()
	{
	    bd_nd_B937DB990D1548698380D65CF906E308.init();
		if (document.images)
		{
		    bd_nd_B937DB990D1548698380D65CF906E308.createToolTip(null);
		}
	}
};
