<?php
# Nexss PROGRAMMER 2.0.0 - PHP
# Default template for JSON Data
# STDIN
$NexssStdin = fgets(STDIN);
$parsedJson = json_decode($NexssStdin,true);

# Modify Data
# $parsedJson["phpOutput"] = "Hello from PHP! " . (string)phpversion() ;
$parsedJson["test"] = "test";
$NexssStdout = json_encode($parsedJson);

# STDOUT
fwrite(STDOUT, $NexssStdout);
