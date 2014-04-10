alert("init.js loaded.");

function onStart() {
	// TODO : Add your Initilize code here
    
    // include file
    var arrPathToIncluded = new Array();
    arrPathToIncluded.push('app/Controller.js');
    
    sf.core.loadJS(arrPathToIncluded, function(){ 
        Controller.initialize([{
                name:"Latest Blogs",
                url:"http://projectcamelotportal.com/blog?format=feed&type=rss"
            },{
                name:"Interviews",
                url:"http://projectcamelotportal.com/component/k2/content/152-video-interviews-and-presentations-by-name?format=feed"
            },{
                name:"Guest Blogs",
                url:"XML/category3.xml"
            }]);
        Controller.start(Controller.categoryData[0]);
    });
}

function onDestroy () {
	// stop your XHR or Ajax operation and put codes to distroy your application here
}


