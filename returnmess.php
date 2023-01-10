<html id="html">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body id="body">
<?php 
$connection = mysqli_connect('localhost', 'root', 'root', 'messages');
$sql = "SELECT * FROM `messages` ORDER BY `id`";
$all_mess = mysqli_query($connection, $sql);
while (($the_mess = mysqli_fetch_assoc($all_mess))) {
    echo '<p>' . $the_mess['text'] . '</p>';
}
?>
</body>
<script>
    var body = document.querySelector("body");
    body.scrollTop = body.scrollHeight;
</script>
</html>