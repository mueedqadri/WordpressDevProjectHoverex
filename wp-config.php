<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_develop' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'tM-w)Ucl_M`OodBZR+ES2q;]p Y<PLi@m}?$wctePEGowe3(dK[DS,gm$zbLc:,{' );
define( 'SECURE_AUTH_KEY',   'w$L^w~#J7~fBpMg^`@(nMG6ye <m b~T7Mo%sZ4P==qi`vEHU88#[^#|X/%gc|8K' );
define( 'LOGGED_IN_KEY',     '<c89Ib/=Ce6VoTQ`oNDW l{c`rf]$4-[1Y3#l&_$k;:,&+@PrW+ZgzCuK#jJLtj$' );
define( 'NONCE_KEY',         'JX;5J#g-~^fib{}@XIF2SfT~)a|dF(Z8!hU4#=);MOrXm7P amz;dNR{(3}S3^yu' );
define( 'AUTH_SALT',         '[xHQ<[?Xtrbdfo:>y|50[m7q#d,4r6J.O IcZVau,p[vPQ/BMWZ&@bh3p;wD+s#%' );
define( 'SECURE_AUTH_SALT',  'd5#|zz75Sc-[be/2<Ui2!LNS&rvO[.bZ4{Eu-B@9u@QoJ4HhjEOklrXW9N--tVvv' );
define( 'LOGGED_IN_SALT',    'jKg+j;91ptD`#/xVM?t*yez6-^b~=eC@W6JqC VxcB=?co%*xu{hc%EOR1NgLer@' );
define( 'NONCE_SALT',        'I!_dlpP)}4^3>qe}V2QFshOX/CDHom$DDG*r/1g( Z|-Rz67C6]e%G=Pq7j60iIS' );
define( 'WP_CACHE_KEY_SALT', 'ofZk[W_7lt6AnAmCo2Gq;6/-~RnL^[EH5`().W/fr/ EPV1M,$HeZ;Rql3/zD3!w' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';



ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
define( 'WP_DEBUG_LOG', false );
define( 'SCRIPT_DEBUG', false );
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
