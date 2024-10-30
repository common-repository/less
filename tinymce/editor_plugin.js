/**
 * Less plugin.
 */

(function() {
	var DOM = tinymce.DOM;

	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('less');

	tinymce.create('tinymce.plugins.Less', {
		init : function(ed, url) {
			var lessHTML = '<img src="' + url + '/img/trans.gif" class="mceless mceItemNoResize" title="Less..." />'; // '+ed.getLang('wordpress.wp_more_alt')+'
			// Register commands
			ed.addCommand('mceLess', function() {
				ed.execCommand('mceInsertContent', 0, lessHTML);
			});
			
			// Register buttons
			ed.addButton('Less', {
				title : 'less.desc',
				image : url + '/img/less.gif',
				cmd : 'mceLess'
			});

			// Add listeners to handle less break
			this._handleLessBreak(ed, url);

		},

		getInfo : function() {
			return {
				longname : 'Less Plugin',
				author : 'Justin Hawkwood',
				authorurl : 'http://www.hawkwood.com',
				infourl : 'http://www.hawkwood.com',
				version : '1.0'
			};
		},

		// Internal functions


		_handleLessBreak : function(ed, url) {
			var lessHTML = '<img src="' + url + '/img/trans.gif" alt="$1" class="mceless mceItemNoResize" title="Less..." />';

			// Load plugin specific CSS into editor
			ed.onInit.add(function() {
				ed.dom.loadCSS(url + '/css/content.css');
			});

			// Display lessbreak instead if img in element path
			ed.onPostRender.add(function() {
				if (ed.theme.onResolveName) {
					ed.theme.onResolveName.add(function(th, o) {
						if (o.node.nodeName == 'IMG') {
							if ( ed.dom.hasClass(o.node, 'mceless') )
								o.name = 'less';
						}

					});
				}
			});

			// Replace lessbreak with images
			ed.onBeforeSetContent.add(function(ed, o) {
				o.content = o.content.replace(/<!--less-->/g, lessHTML);
			});

			// Replace images with lessbreak
			ed.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = o.content.replace(/<img[^>]+>/g, function(im) {
						if (im.indexOf('class="mceless') !== -1) 
							im = '<!--less-->';

						return im;
					});
			});

			// Set active buttons if user selected pagebreak or less break
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('Less', n.nodeName === 'IMG' && ed.dom.hasClass(n, 'mceless'));
			}); 
		}
	});
	// Register plugin
	tinymce.PluginManager.add('Less', tinymce.plugins.Less); // */
})();
