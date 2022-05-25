<?php 
define('DB_HOST', 'clouddb014.sql020:35657');
define('DB_USER', 'pbb_xlr8');
define('DB_PASS', '6DnK6cjf6MW39L7q');
define('DB_NAME', 'pbb_xlr8');
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

?>