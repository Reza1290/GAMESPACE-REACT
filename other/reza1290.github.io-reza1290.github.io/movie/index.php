<?php
function get_CURLYT($url)
{

  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $result = curl_exec($curl);

  curl_close($curl);

  return json_decode($result, true);
}

$curlDaftar = get_CURLYT('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json')

?>
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <title>Alquraan</title>
</head>

<body>

  <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container">
      <a class="navbar-brand m-1" href=""><img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="gg" width="50px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" value="all_menu">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container m-5">
    <h3 class="text-center">Pencarian</h3>
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="d-flex">
          <input class="form-control" id="search-input" type="search" placeholder="Pencarian Film">
          <button class="btn btn-outline-dark" type="submit" id="search-button">Cari</button>
        </div>
      </div>
    </div>


    <hr>

    <div class="container-fluid">
      <div class="row" id="movie-list">
        <?php foreach ($curlDaftar as $data) { ?>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title"><?php echo $data['number_of_surah'] . ". " . $data['name'] ?></h5>
                <p class="card-text"><?php echo $data['name_translations']['ar']; ?><br><?= $data['name_translations']['en']; ?><br><?= $data['name_translations']['id']; ?><br>
                  <?= "Jumlah Ayat : " . $data['number_of_ayah']; ?><br>
                  <?= "Diturunkan di " . $data['place']; ?><br>
                </p>
                <audio controls id="murotal<?= $data['number_of_surah']; ?>" src="<?= $data['recitation']; ?>" preload="auto" style="display: none;"></audio>
                <button onclick="document.getElementById('murotal<?= $data['number_of_surah']; ?>').play();" class="btn btn-danger">
                  Play
                </button>
                <button onclick="document.getElementById('murotal<?= $data['number_of_surah']; ?>').load();" class="btn btn-danger">
                  Stop
                </button>

                <a href="http://localhost/rest-api/movie/ayat.php?surah=<?= $data['number_of_surah']; ?>.json" id="detail" class="btn btn-primary">Lihat</a>
              </div>
            </div>
          </div>
        <?php }; ?>
      </div>
    </div>



    <!-- Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
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