
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBl1CQhjAOZZkiirBJxeqbKJE2qUOjO0Hc",
    authDomain: "borbamartim-cd-351f6.firebaseapp.com",
    databaseURL: "https://borbamartim-cd-351f6.firebaseio.com",
    storageBucket: "borbamartim-cd-351f6.appspot.com",
    messagingSenderId: "294439374886"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('borbamartim-cd-351f6');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}
