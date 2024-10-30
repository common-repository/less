<?php
/*
Plugin Name: Less
Plugin URI: http://blog.hawkwood.com/archives/47
Description: This Plugin removes all content before the <!--less--> tag when viewing the post by itself.
Author: Justin Hawkwood</a>
Author URI: http://blog.hawkwood.com/
Version: 1.0.2
*/

add_filter('the_content', 'less', 10);

function less($content)
{
	// are we looking at the post by itself?
	if (is_single()) {
		$less_tag = '<!--less-->';
		//- TODO: reverse search to look for multiple less_tags. How is would work:  Bgn --- Ls Txt Ls ---- Ls Txt End
		$loc = strpos($content, $less_tag);
		
		if($loc !== FALSE) {
			// look for an unclosed <p> tag
			$removedText = substr($content, 0, $loc);
			$lastOpen = strrpos($removedText, '<p');
			$lastClose = strrpos($removedText, '</p');
			$content = substr($content, ($loc + 11));
			if ((($lastOpen !== false) && ($lastClose === false)) || ($lastOpen > $lastClose))
				$content = substr($removedText, $lastOpen, (strpos($removedText, '>', $lastOpen) + 1 - $lastOpen)) . $content;
//			$content = '<!-- less-debug:' . strlen($removedText) . " $lastOpen $lastClose ".'  -->'.$content;
		}
	} else {
//*
		$content = str_replace('<p><!--less--></p>', '', $content);
		$content = eregi_replace('(<br />[[:space:]]*)*<!--less-->([[:space:]]*<br />)*', '', $content);
/*		$content = str_replace('<br />
<!--less--><br />', '', $content);
		$content = str_replace('<!--less--><br />', '', $content);
		$content = str_replace('<br />
<!--less-->', '', $content);
		$content = str_replace('<!--less-->', '', $content);
// */
	}
	return $content;
}

define('LESSFOLDER', dirname(plugin_basename(__FILE__)));
define('LESS_URLPATH', get_option('siteurl').'/wp-content/plugins/' . LESSFOLDER .'/');

// TODO: Figure out this language stuff.
// Load language
/*
function less_init ()
{
	load_plugin_textdomain('Less','wp-content/plugins/' . LESSFOLDER.'/lang');
}
*/

// Load tinymce button 
//if (IS_WP25)
//	include_once (dirname (__FILE__)."/tinymce3/tinymce.php");
//else

include_once (dirname (__FILE__)."/tinymce/tinymce.php");

// load language file
//add_action('init', 'less_init');

?>