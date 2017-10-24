<?php

/*
 * UDWBase: WOWDB Web Interface
 *
 * © UDW 2009-2011
 *
 * Released under the terms and conditions of the
 * GNU General Public License (http://gnu.org).
 *
 */

require_once 'configs/config.php';

// Import configuration and directory
global $cwd;
global $UDWBaseconf;

$cwd = str_replace("\\", "/", getcwd());

// Load the Smarty library
require_once $cwd . '/includes/Smarty/libs/Smarty.class.php';

class Smarty_UDWBase extends Smarty {

    /**
     *
     * @global type $cwd
     * @global type $UDWBaseconf 
     */
    function Smarty_UDWBase() {
        global $cwd;
        global $UDWBaseconf;
        $this->Smarty();

        // Configure the directories containing templates, cache, and configuration
        $this->template_dir = $cwd . '/templates/' . $UDWBaseconf['udwbase']['template'] . '/';
        $this->compile_dir = $cwd . '/.cache/templates/' . $UDWBaseconf['udwbase']['template'] . '/';
        $this->config_dir = $cwd . '/configs/';
        $this->cache_dir = $cwd . '/.cache/';
        
        // Set debugging mode
        $this->debugging = $UDWBaseconf['debug'];
        
        // Template separators
        $this->left_delimiter = '{';
        $this->right_delimiter = '}';
        
        // Disable full caching
        $this->caching = false;
        
        // Name of the site
        $this->assign('app_name', $UDWBaseconf['udwbase']['name']);
    }

    /**
     *
     * @param type $name
     * @param string $val 
     */
    function uDebug($name, $val='') {
        if (!$val)
            $val = 'unset';
        $this->append($name, $val);
    }

}