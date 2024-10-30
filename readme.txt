=== Plugin Name ===
Contributors: hawkwood
Tags: exceprt, less, plugin, post
Donate link: http://www.hawkwood.com/wp-donate.php
Requires at least: 2.5
Tested up to: 2.7
Stable tag: 1.0.2

This Plugin removes all content before the <!--less--> tag when viewing the post by itself, but shows that text on multi-post pages.

== Description ==

The <!--less--> tag is the opposite of the <!--more--> tag. Where the <!--more--> tag hides all content that follows it when viewing the post on multi-post pages, the <!--less--> tag shows content preceding the tag when viewing the post on multi-post pages and hides that content (with the exception of a <p> if necessary) when viewing the whole post.  This gives a way of adding content for an excerpt in the Visual Editor without having to use the Excerpt box.  When used in conjunction with the <!--more--> tag, it gives greater flexiblity to create an dynamic excerpt without having to repeat content in the Excerpt box.

Note on "Requires at least": The Visual Editor button works with TinyMCE version 3.x, which is in Wordpress 2.5.  So the main functionality may work in previous versions, but the <!--less--> tag will have to be manually entered in the Code Editor.

== Installation ==

1. Copy 'less' folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. When editing a post, click the Less button in the Visual Editor, or insert <!--less--> in the code where you want it.

== Frequently Asked Questions ==

= When would I use this? =

One example of a time to use this is if you have a gallery in your post.  You may not want the full gallery on multi-post pages, but one image for those pages would be nice.  Conversely, once viewing the whole post, that introduction image would now get in the way, and would be better off gone.