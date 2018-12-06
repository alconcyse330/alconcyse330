var bd_nd_twitter_B937DB990D1548698380D65CF906E308 = 
{

	ANCHOR_CLASS_NAME	: "twitter-timeline-link",
	TIMEOUT				: 3000,

	updateLinks : function()
	{		
		var anchors = document.getElementsByTagName("a"); 
		if (null != anchors)
		{
			for (var i = 0; i < anchors.length; i++)
			{ 
				if (bd_nd_twitter_B937DB990D1548698380D65CF906E308.ANCHOR_CLASS_NAME == anchors[i].className)
				{
				    var fOk = 1;
				    var myParent = anchors[i].parentNode;
				    if ((null != myParent) && ("undefined" != myParent)) {

				        if (myParent.className.indexOf("rich-editor") >= 0)
				        {
				            fOk = 0;
				        }
				        else
				        {
				            var parent1 = myParent.parentNode;
				            if ((null != parent1) && ("undefined" != parent1) && (parent1.className.indexOf("rich-editor") >= 0))
				            {
				                fOk = 0;
				            }
				        }
				    }

				    if (Boolean(fOk))
				    {
                        
				        bd_nd_B937DB990D1548698380D65CF906E308.addLink(anchors[i], anchors[i].getAttribute("data-expanded-url"));
				    }
				}
			}
		}
		bd_nd_B937DB990D1548698380D65CF906E308.processLinks();
		setTimeout("bd_nd_twitter_B937DB990D1548698380D65CF906E308.updateLinks()", bd_nd_twitter_B937DB990D1548698380D65CF906E308.TIMEOUT);
	},
	
	twitterStart : function()
	{
		bd_nd_B937DB990D1548698380D65CF906E308.start();
		bd_nd_twitter_B937DB990D1548698380D65CF906E308.updateLinks();
	}


};

if (bd_nd_B937DB990D1548698380D65CF906E308.isPageOK())
{
	if (window.addEventListener)
	{
		window.addEventListener("load", bd_nd_twitter_B937DB990D1548698380D65CF906E308.twitterStart, false);
	}
	else
	if (window.attachEvent)
	{
		window.attachEvent("onload", bd_nd_twitter_B937DB990D1548698380D65CF906E308.twitterStart);
	}
}
