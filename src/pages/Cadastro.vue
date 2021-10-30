<template>
  <div class="container-cad">
    <div class="nav-cad">
      <h1>Bem vindo ao fã-clube</h1>
    </div>
    <div class="principal-cad">
      <img src="../assets/axe.png" alt="" class="axe-machete-cad" />
      <img src="../assets/friday.png" alt="" class="friday-cad" />
      <img src="../assets/machete.png" alt="" class="axe-machete-cad" />
    </div>

    <a class="links" id="paralogin"></a>

    <div class="content-cad">
      <div id="cadastro">
        <form method="post" action="">
          <img src="../assets/mask.png" alt="" style="box-shadow:none" />
          <h1>Cadastro</h1>

          <p>
            <label for="nome_cad">Nome</label>
            <input
              id="nome_cad"
              name="nome_cad"
              required="required"
              type="text"
              placeholder="Tiago Mota"
              v-model="nome"
            />
          </p>

          <p>
            <label for="email_cad">E-mail</label>
            <input
              id="email_cad"
              name="email_cad"
              required="required"
              type="email"
              placeholder="tiago@gmail.com"
              v-model="email"
            />
          </p>

          <p>
            <label for="senha_cad">Senha</label>
            <input
              id="senha_cad"
              name="senha_cad"
              required="required"
              type="password"
              placeholder="123"
              v-model="password"
            />
          </p>

          <p>
            <router-link to="/">
              <input type="submit" value="Cadastrar" />
            </router-link>
          </p>

          <p class="link">
            Já tem conta?
            <router-link to="/"> Ir para Login </router-link>
          </p>
        </form>
      </div>
    </div>
    <footer>
      <span class="material-icons" style="color:white">
        phone mail_outline chat
      </span>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      const { data } = await axios.put("https://localhost:5001/", {
        nome: this.nome,
        email: this.email,
        password: this.password,
      });

      //validar usuario existe
      if (data.length === 0) {
        alert("Usuário ou senha incorretos");
      } else {
        this.$router.push({ name: "welcome" });
      }
    },
  },
};
</script>

<style>
.container-cad {
  background: linear-gradient(rgb(48, 49, 61), rgb(0, 0, 0));
}

/*===========================NAVY======================================================= */
.nav-cad {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0011ff;
  height: 90px;
  width: 100%;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin: 0 0 20px;
}

/*======================= FRIDAY======================================================= */
.principal-cad {
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
  margin-bottom: 15px;
}
.axe-machete-cad {
  width: 100px;
  height: 100px;
  margin: 0 5px 0 0px;
}
.friday-cad {
  width: 300px;
  height: 100px;
}
/*======================= CADASTRO======================================================= */
h1 {
  font-size: 40px;
  color: #ffffff;
  padding: 2px 0 10px 0;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
}
h1:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
}

label {
  color: #ffffff;
  position: relative;
}
.content-cad {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 560px;
  margin: 10px auto;
  position: relative;
}

p {
  margin-bottom: 15px;
}

/* placeholder */
::-webkit-input-placeholder {
  color: #bebcbc;
  font-style: italic;
}

/*estilo dos input,  menos o checkbox */
input:not([type="checkbox"]) {
  width: 95%;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"] {
  width: 95% !important;
  cursor: pointer;
  background: #000000;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #0011ff;
  margin-bottom: 3px;

  -webkit-border-radius: 5px;
  border-radius: 5px;

  transition: all 0.2s linear;
}

/*estilo do botão submit no hover */
input[type="submit"]:hover {
  color: #fff;
  background: #656fff;
  border: 1px solid #0011ff;
}
input {
  outline: none;
}

.link {
  position: absolute;
  background: #001aff;
  color: #ffffff;
  left: 0px;
  height: 55px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;

  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 4px 4px;
}

.link a {
  font-weight: bold;
  background: #f5e5f3;
  padding: 6px;
  color: #0011ff;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #0011ff;
  -webkit-border-radius: 4px;
  border-radius: 4px;

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.link a:hover {
  color: #fff;
  background: #656fff;
  border: 1px solid #0011ff;
}

img {
  width: 50px;
  height: 50px;
  box-shadow: none;
}

#cadastro {
  position: absolute;
  top: 0px;
  width: 88%;
  padding: 18px 6% 55px 6%;
  margin: 0 0 0px 0;
  background: linear-gradient(rgb(3, 0, 49), rgb(4, 0, 255));
  border: 0px solid #0011ff;
  /* box-shadow: 10px 15px 10px #acdbb3; */

  border-radius: 5px;

  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
img {
  width: 50px;
  height: 50px;
}

footer {
  background-color: #0011ff;
  height: 66px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Efeito ao clicar no botão ( Ir para Login ) */
#paracadastro:target ~ .content #cadastro,
#paralogin:target ~ .content #login {
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

/* Efeito ao clicar no botão ( Cadastre-se ) */
#registro:target ~ .content #login,
#paralogin:target ~ .content #cadastro {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

/*fadeInLeft*/
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/*fadeOutLeft*/
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>
