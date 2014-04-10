project-camelot
===============

Project Camelot open source repository

To install release file for Samsung Smart TV:

Requirements:

Smart TV SDK.

Info and Guide:
http://www.samsungdforum.com/Guide/art00013/index.html

(Note: "<type>user</type>" are already incorporated into build for developer testing)

1. Set up /widgetlist.xml and /widget/ (directory) in your webserver root location.
2. Put downloaded .zip into your "/widget/" folder
3. Put the following in your widgetlist.xml:

  <?xml version='1.0' encoding='UTF-8' standalone='no'?>
  <rsp stat='ok'>
  <list>
  <widget id='PCnews'>
  <title>PC News</title>
  <compression size='815816' type='zip'/>
  <description>PC1</description>
  <download>http://(your-server-ip)/Widget/PCnews_0.100_America.zip</download>
  </widget>
  </list>
  </rsp>
  
4. On your Samsung Smart TV, login as: 'develop' . Enter no password and click login
  
5. (if 2013 model or newer see below) 
  Follow instructions on this page: http://www.samsungdforum.com/Guide/art00013/index.html#Installing-an-Application
  
  
6. Or on 2013 TV's or newer go into your app hub, show all apps, settings, IP Settings (upper right corner).

7. Type in your servers IP, click OK when finished.

8. Click Start app sync, and the apps should install. If it does not work please follow links above for more information
  about testing and SDK.
  
9. If all is working, have fun! Feel free to keep developing these builds and join the project!


