<?

switch(@$_GET["for"]) {
case "nmail":
	echo "<script>location.href='mailto:nibble.ds\x40gmail.com';history.go(-1);</script>";
	break;
case "mail":
	echo "<script>location.href='mailto:pancake\x40nopcode.org';history.go(-1);</script>";
	break;
case "list":
	header("Location: http://lists\x2enopcode\x2eorg/listinfo\x2ecgi/radare-nopcode.org");
	break;
}

?>
