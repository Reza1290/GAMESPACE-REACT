<?php
if ($_GET['surah'] > 0 || $_GET['surah'] < 115) {

    $page = $_GET['surah'];
}
function get_CURL($url)
{

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);

    curl_close($curl);

    return json_decode($result, true);
}
$url = 'https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/';
$url2 = 'https://raw.githubusercontent.com/iqbalsyamhad/Al-Quran-JSON-Indonesia-Kemenag/master/Surat/';
$url3 = 'https://api.npoint.io/99c279bb173a6e28359c/surat/';

$curlDaftar = get_CURL("{$url}{$page}");
$curlSURAH = get_CURL("{$url2}{$page}");
$bacaan = get_CURL("{$url3}{$page}");

$surah = $curlDaftar;
$surah2 = $curlSURAH;
?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="styles.css">
    <link rel="preload" href="https://litequran.net/assets/fonts/LPMQ.woff2" as="font" type="font/woff2" crossorigin>
    <title>Alquraan</title>
</head>

<body id="body">

    <nav class="navbar navbar-expand-lg bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand m-1" href=""><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="gg" width="50px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" value="all_menu">
                        <a class="nav-link active" aria-current="page" href="http://localhost/rest-api/movie/">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="m-5 justify-content-center">
            <h3 class="text-center">Surah <?= $surah['name']; ?></h3>
            <hr>

            <div class="container-fluid">
                <?php for($i = 0; $i < $surah['number_of_ayah'] ; ++$i){?>
                <div class="row">
                    <div class="col-md-2 text-start m-2">
                        <h3 style="font-family: 'Courier New', Courier, monospace; font-weight:700;"><?= $surah['verses'][$i]['number']; ?></h3>
                    </div>
                    <div class="col text-end">
                        <h1 class="" style="font-family: 'impact'; font-weight:light;"><?= $surah2['data'][$i]['aya_text']; ?></h1>
                    </div>
                </div>
                <div class="row">
                <div class="col text-start">
                        <p style="font-family: 'Times New Roman', Times, serif;"><?= $bacaan[$i]['tr']; ?></p>
                    </div>
                </div>
                <?php }; ?>
            </div>
        </div>





















        <!-- Optional JavaScript; choose one of the two! -->

        <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
        <script src=""></script>
</body>

</html>