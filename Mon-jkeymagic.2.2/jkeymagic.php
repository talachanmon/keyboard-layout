<?php
/*
Plugin Name: jKeyMagic
Plugin URI: http://ttkz.me/jkeymagic
Description: Add jKeyMagic to comment box. More info about KeyMagic (http://code.google.com/p/keymagic)
Author: Thant Thet Khin Zaw
Version: 2.1
Author URI: http://ttkz.me/
*/

$jkeymagic = new jkeymagic();
$jkeymagic->hook();

$default_available_keyboards = array (
    'Mon' => 'js/kb/Mon.js',
    'UniMon' => 'js/kb/UniMon.js',
    );

class jkeymagic {
    
    static $option_name = 'jkeymagic';
    
    public function hook() {
        add_action('init', array('jkeymagic', 'init'));
        add_action('wp_head', array('jkeymagic', 'wp_head'));
        add_action('wp_footer', array('jkeymagic', 'wp_footer'));
        
        add_action('admin_menu', array('jkeymagic', 'admin_menu'));
        add_action('admin_notices', array('jkeymagic', 'admin_notices'));

		if ( ! get_option(jkeymagic::$option_name) ) {
		    $options['show_powered'] = 'on';
		    $options['enabled_keyboards'] = array('Mon','UniMon');
		    add_option(jkeymagic::$option_name, $options );
		}
    }
    
    public static function admin_menu() {
		add_options_page('jKeyMagic', 'jKeyMagic', 8, 'jkeymagic', array('jkeymagic', 'options'));
	}
	
	public static function admin_notices() {
	    $option_page_url = menu_page_url( 'jkeymagic', false );
	    
        if (!strstr(parse_url($_SERVER["REQUEST_URI"], PHP_URL_QUERY), 'jkeymagic')) {
	        $options = get_option(jkeymagic::$option_name);
    	    $enabled_keyboards = $options['enabled_keyboards'];
    	    if (!$enabled_keyboards) {
    	        echo '<div class="updated fade"><p>You have not enabled keyboard layouts for <a href="'.$option_page_url.'">jKeyMagic</a>.</p></div>';
    	    }
        }
	}
	
	function data_save()
	{
		if(isset($_POST['submitter']))
		{
		    if ($_POST['show_powered']) $options['show_powered'] = $_POST['show_powered'];
			if ($_POST['keyboards']) {
			    $options['enabled_keyboards'] = $_POST['keyboards'];
			}
			
			if ( get_option(jkeymagic::$option_name) )
				update_option(jkeymagic::$option_name, $options);
			else
				add_option(jkeymagic::$option_name, $options );
		}
	}
	
	public static function isChecked($m) {
	    return $m ? 'checked' : '';
	}
	
	public static function options() {
	    global $default_available_keyboards;
	    
	    jkeymagic::data_save();
		$options = get_option(jkeymagic::$option_name);
		$enabled_keyboards = $options['enabled_keyboards'];
		if (!$enabled_keyboards) $enabled_keyboards = array();
        // $available_keyboards = $options['available_keyboards'];
		$available_keyboards = $default_available_keyboards;
	?>
	    <div class="wrap">
	        <h2>jKeyMagic</h2>
	        <div class="jkeymagic">
			<form method="post" name="jkeymagic_form">
			    <h3>Enabled Keyboard Layouts</h3>
			    <div id="layout_list">
			    <?php
			    foreach ($available_keyboards as $name => $path) {
			        $checked = jkeymagic::isChecked(in_array($name, $enabled_keyboards));
			        echo "<p><input $checked type=\"checkbox\" name=\"keyboards[]\" id=\"{$name}\" value=\"{$name}\"/>";
			        echo "<label for=\"{$name}\" ><b>{$name}</b></label>";
			        echo " ({$path})</p>";
			    }
			    ?>
			    </div>
			    <h3>Others</h3>
			    <p><input <?php echo jkeymagic::isChecked($options['show_powered'])  ?> type="checkbox" name="show_powered" id="show_powered"/>
			    <label for="show_powered" >Show 'Powered by jKeyMagic'</label></p>
			    <p><input type="submit" name="submitter" value="<?php esc_attr_e('Save Changes') ?>" class="button-primary" /></p>
		    </form>
		    </div>
	    </div>
	<?php
	}
    
    public static function init() {
       // register your script location, dependencies and version
       wp_register_script('jkeymagic', plugins_url( 'js/jkeymagic.js' , __FILE__ ));
       // enqueue the script
       wp_enqueue_script('jkeymagic');
	}
	
	public static function wp_head() {
	?>
	    <!-- jKeyMagic CSS START -->
	    <link rel="stylesheet" href="<?php echo plugins_url( 'css/jkeymagic.css' , __FILE__ ); ?>" type="text/css" media="screen" charset="utf-8">
	    <!-- jKeyMagic CSS END -->
	<?php
	}
	
	public static function print_path($path) {
	    echo '"' . plugins_url($path, __FILE__) . '"';
	}
	
	public static function wp_footer() {
	    global $default_available_keyboards;
	    
	    $options = get_option(jkeymagic::$option_name);
	    $enabled_keyboards = $options['enabled_keyboards'];
	    if (!$enabled_keyboards) $enabled_keyboards = array();
        // $available_keyboards = $options['available_keyboards'];
        $available_keyboards = $default_available_keyboards;
	?>
	    <!-- jKeyMagic START -->
	    <script type="text/javascript">
	    
	    if (JKME) {

        keyboards = [
            <?php
            $js_keyboards_array = array();
            
            foreach ($enabled_keyboards as $name) {
                $path = plugins_url($available_keyboards[$name], __FILE__);
            
                $js_keyboards_array[] = "[\"$path\", \"$name\"]";
            }
            
            echo implode(",\n", $js_keyboards_array);
            ?>
        ];

        for (var i in keyboards) {
        	keyboard = keyboards[i];
        	JKME.keyboard.addKeyboard(keyboard[0], keyboard[1]);
        }
        
        JKME.config.logoUrl = <?php jkeymagic::print_path('images/keymagic.png'); ?>;

        elements = document.getElementsByTagName('textarea');
        for (i = 0; i < elements.length; i++) {
          if (elements[i].readOnly == false)
            JKME.attach(elements[i]);
        }
        
        }

        </script>
        <?php if ($options['show_powered']) : ?>
        <div style="font-size:10px;position:relative;bottom:5px;text-align:right;">
            Powered by <a href='http://ttkz.me/jkeymagic/index.html'><font color="#ed145b">jKeyMagic</font></a>
        </div>
        <?php endif; ?>
        <!-- jKeyMagic END -->
	<?php
	}
}
?>