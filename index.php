<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>MessPHP</title>
    <script src="jQuery/jquery-3.6.3.js"></script>
</head>

<?php
$connection = mysqli_connect('localhost', 'root', 'root', 'messages');

if ($connection == false) {
    echo ('<script> console.log("Connection faild") </script>');
} else {
    echo ('<script> console.log("All`s good!") </script>');
}
?>

<body>
    <main>
        <div id="messages">
            <iframe src="returnmess.php" frameborder="0"
            onload="IFR = this; setTimeout('IFR.src = IFR.src', 5000)"></iframe>
        </div>
        <form action="index.php" method="get" id="form">
            <textarea type="text" name="text" placeholder="Введіть..."></textarea>
            <!-- <button type="reset" id="reset" onclick="this.form.reset();"></button> -->
            <button type="submit" name="send_mess" id="button">
                <span class="material-symbols-outlined">
                    send
                </span>
            </button>
        </form>
    </main>
<?php 
if (isset($_GET['send_mess'])) {
    
    if ($text != NULL) {
        $text = $_POST['text'];
        $sql = "INSERT INTO `messages` (`text`) VALUES ('$text')";
        $new_mess = mysqli_query($connection, $sql);
    }
}
?>

</body>
<script src="main.js"></script>
</html>