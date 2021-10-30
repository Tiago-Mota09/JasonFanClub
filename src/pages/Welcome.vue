<template>
  <div class="container-wel">
    <header>
      <router-link to="/">
        <Menu @click="openMenu" />
        <img src="../assets/menu.png" alt="" class="menu" />
      </router-link>
      <h1 class="jason">Jason Voorhees</h1>
      <img src="../assets/calendar.png" alt="" class="calendar" />
    </header>

    <div class="principal">
      <img src="../assets/axe.png" alt="" class="axe-machete-wel" />
      <img src="../assets/friday.png" alt="" class="friday-wel" />
      <img src="../assets/machete.png" alt="" class="axe-machete-wel" />
    </div>
    <!-- =================================FOTOS PAISAGEM=================================================== -->
    <div class="cont-paisagem">
      <div class="foto-icon">
        <img src="../assets/foto1.jpg" alt="Jason foto 1" class="paisagem" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-iconDir">
        <img src="../assets/foto2.jpg" alt="Jason foto 2" class="paisagemDir" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-icon">
        <img src="../assets/foto3.jpg" alt="Jason foto 3" class="paisagem" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-iconDir">
        <img src="../assets/foto4.jpg" alt="Jason foto 4" class="paisagemDir" />
        <i class="material-icons">favorite share</i>
      </div>
    </div>
    <!-- =================================FOTOS RETRATO=================================================== -->
    <div class="cont-retrato">
      <div class="foto-iconR">
        <img src="../assets/foto5.jpg" alt="Jason foto 5" class="retrato" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-iconR">
        <img src="../assets/foto6.jpg" alt="Jason foto 6" class="retrato" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-iconR">
        <img src="../assets/foto7.jpg" alt="Jason foto 7" class="retrato" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-iconR">
        <img src="../assets/foto8.jpg" alt="Halloween" class="retrato" />
        <i class="material-icons">favorite share</i>
      </div>
    </div>
    <!-- ===============================ÚLTIMAS FOTOS=================================================== -->
    <div class="last-photos">
      <div class="foto-icon">
        <img src="../assets/gif.gif" alt="Halloween" class="gif" />
        <i class="material-icons">favorite share</i>
      </div>
      <div class="foto-icon">
        <img src="../assets/mask.jpg" alt="Halloween" class="gifmask" />
        <i class="material-icons">favorite share</i>
      </div>
    </div>
  </div>
</template>
<!-- =====================================CSS=================================================== -->
<style>
@font-face {
  font-family: "SomethingStrange-vjYD";
  src: url("fonts/SomethingStrange-vjYD.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.container-wel {
  background: linear-gradient(rgb(180, 93, 93), rgb(56, 49, 49));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;
}
/*=====================================BARRA WELCOME==============================================*/
header {
  height: 90px;
  width: 98.7%;
  background: linear-gradient(rgb(228, 81, 81), rgb(0, 0, 0));
  box-shadow: 0 10px 5px rgb(51, 35, 35);
  border-radius: 5px;
  margin: 10px 10px 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.jason {
  font-family: "SomethingStrange-vjYD", Times, serif;
  font-size: 3em;
  color: white;
  letter-spacing: 6px;
}
.menu {
  box-shadow: none;
  width: 40px;
}
.calendar {
  box-shadow: none;
  margin-right: 0px;
}
/* ===============================FRIDAY======================================= */

.principal {
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
  margin-bottom: 10px;
}
.friday-wel {
  width: 250px;
}
.axe-machete-wel {
  width: 100px;
  height: 100px;
  margin-right: 5px;
}
.friday-wel {
  width: 300px;
  height: 100px;
}
/* ==============================CONTEÚDO======================================== */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0 auto;
}

.cont-paisagem {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 55px 0 0px;
}
.paisagem {
  width: 690px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.849);
  margin: 10px 0 0 30px;
}
.paisagemDir {
  width: 690px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.849);
}
.foto-iconDir {
  display: flex;
  flex-direction: column;
  width: 690px;
  align-items: flex-start;
  margin-left: 60px;
}
.cont-retrato {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 25px 0 0px;
}
.retrato {
  width: 330px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.849);
  margin: 0 auto;
}
.foto-iconR {
  display: flex;
  flex-direction: column;
  width: 360px;
  align-items: flex-start;
}

.foto-icon {
  display: flex;
  flex-direction: column;
  width: 690px;
  align-items: flex-start;
}

.material-icons {
  color: rgb(160, 120, 120);
  margin-left: 15px;
}
.last-photos {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 10px 55px 0 0px;
}
.gif {
  width: 690px;
  height: 400px;
  border-radius: 10px;
}
.gifmask {
  width: 690px;
  height: 400px;
  border-radius: 10px;
  margin-left: 30px;
}
</style>
