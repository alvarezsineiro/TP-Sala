<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\UploadedFileInterface as UploadedFile;

require './composer/vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './clases/jugadorApi.php';
require_once './clases/MWparaCORS.php';

//use Slim\Http\Request;
//use Slim\Http\Response;
//use Slim\Http\UploadedFile;

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);



/*LLAMADA A METODOS DE INSTANCIA DE LA CLASE vehiculoApi*/
$app->group('/vehiculo', function () {
 
  $this->get('/', \vehiculoApi::class . ':traerTodos');
 
  $this->get('/{modelo}', \vehiculoApi::class . ':traerUno');

  $this->post('/', \vehiculoApi::class . ':CargarUno');

  //$this->delete('/', \vehiculoApi::class . ':BorrarUno');
  $this->delete('/{id}', \vehiculoApi::class . ':BorrarUno');

  $this->put('/', \vehiculoApi::class . ':ModificarUno');
     
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');




$app->group('/usuario', function () {

  $this->post('/', \jugadorApi::class . ':CargarUno');
  $this->post('/entrar', \jugadorApi::class . ':ControlarUno');
  $this->get('/', \jugadorApi::class . ':traerTodos');

  $this->get('/piedrapapeltijera', \jugadorApi::class . ':TraerTodosPiedra');
  $this->get('/anagrama', \jugadorApi::class . ':TraerTodosAnagrama');
  $this->get('/agilidad', \jugadorApi::class . ':TraerTodosAgilidad');
  $this->get('/adivina', \jugadorApi::class . ':TraerTodosAdivina');
  $this->get('/mijuego', \jugadorApi::class . ':TraerTodosMiJuego');
  
  $this->post('/resultado', \jugadorApi::class . ':ModificarUno');
     
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');








/* llamada a metodos de instancias de nexo fogo*/


$app->group('/nexofoto', function () {
 
  $this->post('/',function(Request $request, Response $response) {
        
        $objDelaRespuesta= new stdclass(); 
        //$archivos = $request->getParsedBody();
        $archivos = $request->getUploadedFiles();
        var_dump($archivos);
        $destino="./fotos/";
        //var_dump($destino);
        //var_dump($archivos['example1']);
        if(isset($archivos['file']))
        {
            $nombreAnterior=$archivos['file']->getClientFilename();
            //$objDelaRespuesta->nombreAnterior = $nombreAnterior;
            $extension= explode(".", $nombreAnterior)  ;
            //var_dump($nombreAnterior);
            $extension=array_reverse($extension);
            $archivos['file']->moveTo($destino.$extension[1].".".$extension[0]);
        } 
        
        $objDelaRespuesta->archivos = $archivos;
        //$objDelaRespuesta->respuesta="Se guardo foto.";   
        return $response->withJson($objDelaRespuesta, 200);   
       }); 
     
})->add(\MWparaCORS::class . ':HabilitarCORSTodos');


$app->run();