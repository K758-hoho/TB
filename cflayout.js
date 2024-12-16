'use strict'
var comicfury = {"loggedin":true,"user":{"userid":116847,"username":"karin-kho","gender":"female","subscribed":false},"bookmark":"\/comics\/pl\/2223744\/"};

comicfury.thumbState = {
    'thumbnailBoxElem' : null,
    'lastThumbnailActiveTime' : 0,
    'currentlyHovering' : false,
    'thumbnailBoxActive' : false,
    'mouseMoveListenerAttached' : false,
    'currentViewportX' : 0,
    'currentViewportY' : 0,
    'supportsWebP' : null,
};

comicfury.supportsWebP = function()
{
    if(comicfury.thumbState.supportsWebP !== null)
    {
        return comicfury.thumbState.supportsWebP;
    }

    var webpImage = new Image();
    webpImage.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    webpImage.onload = webpImage.onerror = function() {
        comicfury.thumbState.supportsWebP = (webpImage.height > 0);
    };

    return !!comicfury.thumbState.supportsWebP;
}

comicfury.updateThumbnailBoxPosition = function(cursorViewportX, cursorViewportY)
{
    if(!comicfury.thumbState.thumbnailBoxElem)
    {
        return;
    }

    //offset of the box from the cursor
    var boxXOffset = 15;
    var boxYOffset = 10;

    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;

    var boxBounds = comicfury.thumbState.thumbnailBoxElem.getBoundingClientRect();
    var boxWidth = boxBounds.width;
    var boxHeight = boxBounds.height;

    if(cursorViewportX > (viewportWidth / 2) && boxWidth >= (viewportWidth - (cursorViewportX + boxXOffset)))
    {
        comicfury.thumbState.thumbnailBoxElem.style.left = (cursorViewportX - boxXOffset - boxWidth) + 'px';
    }
    else
    {
        comicfury.thumbState.thumbnailBoxElem.style.left = (cursorViewportX + boxXOffset) + 'px';
    }

    if(cursorViewportY > (viewportHeight / 2) && boxHeight >= (viewportHeight - (cursorViewportY + boxYOffset)))
    {
        comicfury.thumbState.thumbnailBoxElem.style.top = (cursorViewportY - boxYOffset - boxHeight) + 'px';

    }
    else
    {
        comicfury.thumbState.thumbnailBoxElem.style.top = (cursorViewportY + boxYOffset) + 'px';
    }
}

comicfury.showThumbnailBox = function(thumbnailURL, thumbnailWidth, thumbnailHeight)
{
    if(!comicfury.thumbState.thumbnailBoxElem)
    {
        return;
    }

    comicfury.thumbState.thumbnailBoxActive = true;

    comicfury.thumbState.thumbnailBoxElem.innerHTML = '';
    var imageElem = document.createElement('img');
    imageElem.src = thumbnailURL;
    imageElem.width = thumbnailWidth;
    imageElem.height = thumbnailHeight;
    //to overwrite any css rules, especially ones that apply to all images
    imageElem.style.height = 'auto';
    imageElem.style.maxHeight = '45vh';

    imageElem.style.width = (thumbnailWidth / 2)+'px';
    //to make the image take up correct space before loading, we cannot just use "auto" for width, hence this workaround to
    //make sure the aspect ratio is always retained correctly
    imageElem.style.maxWidth = 'min(40vw, calc('+imageElem.style.maxHeight+' * '+(thumbnailWidth / thumbnailHeight)+'))';

    comicfury.thumbState.thumbnailBoxElem.appendChild(imageElem);

    comicfury.thumbState.thumbnailBoxElem.style.position = 'fixed';
    comicfury.thumbState.thumbnailBoxElem.style.opacity = '1';
}

comicfury.thumbnailMouseOver = function(event, thumbBoxId, thumbnailData)
{
    if(!comicfury.supportsWebP())
    {
        return;
    }

    var thumbnailURL = thumbnailData.url;
    var thumbnailWidth = thumbnailData.width;
    var thumbnailHeight = thumbnailData.height;
    //if there's no thumbnail (html embeds, or just not yet generated)
    if(!thumbnailURL)
    {
        return;
    }

    //this sets comicfury.thumbState.thumbnailBoxElem to null, so it has to happen here
    if(comicfury.thumbState.thumbnailBoxActive)
    {
        comicfury.thumbnailMouseOut();
    }

    var thumbBoxElem = document.getElementById(thumbBoxId);
    if(!thumbBoxElem)
    {
        return;
    }

    comicfury.thumbState.thumbnailBoxElem = thumbBoxElem;

    comicfury.thumbState.currentlyHovering = true;

    if(!comicfury.thumbState.mouseMoveListenerAttached)
    {
        comicfury.thumbState.mouseMoveListenerAttached = true;

        document.addEventListener('mousemove', function(e) {
            comicfury.thumbState.currentViewportX = e.clientX;
            comicfury.thumbState.currentViewportY = e.clientY;

            if(!comicfury.thumbState.thumbnailBoxElem)
            {
                return;
            }

            comicfury.updateThumbnailBoxPosition(e.clientX, e.clientY);
        });
    }


    if((Date.now() - comicfury.thumbState.lastThumbnailActiveTime) < 600)
    {
        comicfury.showThumbnailBox(thumbnailURL, thumbnailWidth, thumbnailHeight);
        return;
    }


    //if we aren't already showing a comic link, make sure the mouse stays over the link for a bit before showing the preview,
    //to make sure the user isn't just moving their mouse from place a to place b over the links. Once a thumbnail is visible,
    //we want things to be seamless as you go down the list from one to another.
    setTimeout(function() {
        if(!comicfury.thumbState.currentlyHovering)
        {
            return;
        }
        var previousHoverTarget = event.target;

        var currentHoverTarget = document.elementFromPoint(comicfury.thumbState.currentViewportX, comicfury.thumbState.currentViewportY);

        if(!currentHoverTarget)
        {
            return;
        }

        if(currentHoverTarget === previousHoverTarget)
        {
            comicfury.showThumbnailBox(thumbnailURL, thumbnailWidth, thumbnailHeight);
            comicfury.updateThumbnailBoxPosition(comicfury.thumbState.currentViewportX, comicfury.thumbState.currentViewportY);
        }
    }, 200);
}

comicfury.thumbnailMouseOut = function(event)
{
    if(!comicfury.supportsWebP())
    {
        return;
    }

    comicfury.thumbState.currentlyHovering = false;

    if(comicfury.thumbState.thumbnailBoxElem)
    {
        comicfury.thumbState.thumbnailBoxElem.style.opacity = '0';
    }
    comicfury.thumbState.thumbnailBoxElem = null;

    if(comicfury.thumbState.thumbnailBoxActive)
    {
        comicfury.thumbState.lastThumbnailActiveTime = Date.now();
    }

    comicfury.thumbState.thumbnailBoxActive = false;
}

function jumpTo(place) {
	window.location = place;
}

function savePlace(saveLink,comicid) {
	var img = new Image();
	img.onload= function() {
		if(typeof customOnSave == 'function') {
			customOnSave(saveLink);
		} else saveLink.innerHTML = 'Saved';
	};
	img.src = "https:\/\/comicfury.com\/" + "wcactions.php?action=jsaddbookmark&cid=" + escape(comicid);
    localStorage.setItem('comic-bookmark', comicid);
}

function loadPlace() {
	if(comicfury.bookmark)
    {
        jumpTo(comicfury.bookmark);
    }
}

function cfWindow(e, link, name) {
    if(name === undefined)
    {
        var name = '_blank';
    }

    e.preventDefault();

    var height = 360;
    var width = 600;
    var leftPos = window.top.outerWidth / 2 + window.top.screenX - (width / 2);
    var topPos = window.top.outerHeight / 2 + window.top.screenY - (height / 2);

	window.open(link, name, 'menubar=no,toolbar=no,width=' + width + ',height=' + height + ',left=' + leftPos + ',top=' + topPos);
}

function rateWindow(e, link, requestData) {
    return cfWindow(e, link);
}

function commentWindow(e, link, useTitle, requestData) {
    var fullLink = link;

    if(useTitle === false)
    {
        fullLink += '&notitle';
    }

	return cfWindow(e, fullLink);
}

function showCommentActionForm(event, requestData) {
    event.preventDefault();

    var escapeHTML = function(rawText) {
        return rawText.
                replace(/&/g, '&amp;').
                replace(/</g, '&lt;').
                replace(/>/g, '&gt;').
                replace(/"/g, '&quot;').
                replace(/'/g, '&#039;');
    };

    var placeholderElem = document.getElementById('comment-form-' + requestData.commentid);

    if(placeholderElem === null)
    {
        commentWindow(event, requestData.windowURL);
        return;
    }

    if(placeholderElem.getAttribute('data-open-form') === requestData.type)
    {
        placeholderElem.setAttribute('data-open-form', '');
        placeholderElem.innerHTML = '';
        return;
    }
    else
    {
        placeholderElem.setAttribute('data-open-form', requestData.type);
    }

    var frameHeight = 290;

    if(requestData.type === 'delete')
    {
        frameHeight = 235;
    }


    placeholderElem.innerHTML = '<iframe src="' + escapeHTML(requestData.inlineURL) + '" ' +
                                'style="width:100% !important;height:' + frameHeight + 'px !important;border:0;"' +
                                '></iframe>';

}

function activateKeyboardNavigation(prevLink, nextLink, prevKey, nextKey)
{
    window.addEventListener('keyup', function (e) {
        if(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
        {
            return;
        }

        var targetTag = e.target.tagName.toUpperCase();
        if(
            targetTag === 'TEXTAREA'
            || (targetTag === 'INPUT' && e.target.type === 'text')
            || (targetTag === 'INPUT' && e.target.type === 'password')
            || (targetTag === 'INPUT' && e.target.type === 'radio')
        )
        {
            return;
        }

        if(e.key == nextKey && nextLink)
        {
            e.preventDefault();
            window.location = nextLink;
        }
        else if(e.key == prevKey && prevLink)
        {
            e.preventDefault();
            window.location = prevLink;
        }
    });
}

function appendStyle() {
	var addcss = document.createElement('style');
	addcss.type = 'text/css';

    
	var addstyles = '.cce:not(.cce116847) { display:none !important; }';
    

    

	if (addcss.styleSheet) addcss.styleSheet.cssText = addstyles;
	else addcss.appendChild(document.createTextNode(addstyles));

	document.getElementsByTagName("head")[0].appendChild(addcss);
}

(function() {
    window.addEventListener('message', function(event) {
        if(event.origin !== "https:\/\/comicfury.com"  && event.origin !== "https:\/\/webcomic.ws")
        {
            return;
        }

        if(!event.data.action)
        {
            return;
        }

        switch(event.data.action)
        {
            case 'newcomment':
                if(!event.data.commentid)
                {
                    return;
                }

                if(event.data.isreply)
                {
                    return;
                }

                window.location = '#comment-' + event.data.commentid;
                window.location.reload(true);
            break;

            case 'deletecomment':
                if(!event.data.commentid)
                {
                    return;
                }

                var commentId = parseInt(event.data.commentid);

                if(commentId <= 0)
                {
                    return;
                }

                var commentBoxId = 'comment-' + commentId;
                var commentBoxElem = document.getElementById(commentBoxId);
                if(commentBoxElem === null)
                {
                    return;
                }

                commentBoxElem.remove();
            break;
        }
    });

    appendStyle();

    var lsBookmark = localStorage.getItem('comic-bookmark');
    if(lsBookmark && !comicfury.bookmark)
    {
        comicfury.bookmark = '/comics/pl/' + lsBookmark;
    }

    //since this is asynchronous, we call it here to get the correct result the first time we actually need it
    comicfury.supportsWebP();
})();