<?

header("Content-Type: text/html; charset=utf-8");



if ($_GET['Result'] == 'success') $mes = '<p class="valid">Payment Successful</p>';



if ($_GET['Result'] == 'failed') $mes = '<p class="invalid">Payment Failed</p>';

else $mes = 'Payment Successful'



?>



<html lang="en" class="success-html">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>First Baptist Church of Odessa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./src/styles/style.css">
</head>
<body class="success-body">
  <header class="success-header"></header>
  <main class="success-main">
    <div class="success-icon">
      <img src="./src/styles/images/success-icon.svg" alt="success-icon">
    </div>
    <div class="success-text"><? echo $mes;?></div>
    <a href="http://<? echo $_SERVER['HTTP_HOST']; ?>" class="back-home__button">Back Home</a>
  </main>
</body>
</html>