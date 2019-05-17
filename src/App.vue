<template>
  <div>
    <div class="col-lg-7">
      <table class="table">
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Artista</th>
          <th>Acordes</th>
          <!--<th>editar</th>
          <th>borrar</th>-->
        </tr>

        <tr v-for='partitura in partituras'>
          <td>{{ partitura.id }}</td>
          <td>{{ partitura.titulo }}</td>
          <td>{{ partitura.artista }}</td>
          <td>{{ partitura.acordes }}</td>
          <!--<td><span class='update btn btn-warning' :id='{{ partitura.id }}'>Editar</span></td>
          <td><span class='delete btn btn-danger' :id='{{ partitura.id }}'>Borrar</span></td>-->
        </tr>
      </table>
    </div>

    <div class="col-lg-5 pull-right">
      <form action="http://localhost:8888/ApiRestFul/api.php/partitura" id="form" method="POST" name="formulario" data-partitura="0">
        <input id="titulo_form" type="text" name="titulo" v-model="titulo" placeholder="Titulo" class="form-control" /></br>
        <input id="artista_form" type="text" name="artista" v-model="artista" placeholder="Artista" class="form-control" /></br>
        <input id="acordes_form" type="text" name="acordes" v-model="acordes" placeholder="Acordes" class="form-control" /></br>
        <textarea id="texto_form" name="texto" v-model="texto" class="form-control" placeholder="Partitura con acordes"></textarea></br>
        <input type="submit" class="form-control" value="Enviar"></br>
        <input id="boton_borrar" type="button" class="form-control black" value="Borrar">
      </form>
    </div>
  </div>
</template>

<style>
  :root {
    text-align: center;
  }

  h1 {
    font-family: Montserrat, Impact, sans-serif;
    font-size: 72px;
  }
</style>
