<?php
require_once 'jugador.php';
require_once 'IApiUsable.php';
//use Slim\Http\Request;
//use Slim\Http\Response;
//use Slim\Http\UploadedFile;

class jugadorApi extends jugador implements IApiUsable
{
 	public function TraerUno($request, $response, $args) {
     	$modelo=$args['modelo'];
        $elVehiculo=vehiculo::TraerUnVehiculo($modelo);
        if(!$elVehiculo)
        {
            $objDelaRespuesta= new stdclass();
            $objDelaRespuesta->error="No esta el Vehiculo";
            $NuevaRespuesta = $response->withJson($objDelaRespuesta, 500); 
        }else
        {
            $NuevaRespuesta = $response->withJson($elVehiculo, 200); 
        }     
        return $NuevaRespuesta;
    }
  



    public function TraerTodosPiedra($request, $response, $args) {
        $todosLosjugadores=jugador::Traer1();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }
    public function TraerTodosAnagrama($request, $response, $args) {
        $todosLosjugadores=jugador::Traer2();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }
    public function TraerTodosAgilidad($request, $response, $args) {
        $todosLosjugadores=jugador::Traer3();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }
    public function TraerTodosAdivina($request, $response, $args) {
        $todosLosjugadores=jugador::Traer4();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }
    public function TraerTodosMiJuego($request, $response, $args) {
        $todosLosjugadores=jugador::Traer5();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }



  public function TraerTodos($request, $response, $args) {
        $todosLosjugadores=jugador::TraerTodosUsuarios();
     	$newresponse = $response->withJson($todosLosjugadores, 200);  
    	return $newresponse;
    }

  public function CargarUno($request, $response, $args) {
         
        $flag=true;
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();
        $mail = $ArrayDeParametros['mail']; 
        $clave = $ArrayDeParametros['clave'];
        
        
        $mijugador = new jugador();
        $mijugador->mail=$mail;
        $mijugador->clave=$clave;
        
        $todosLosjugadores=jugador::TraerTodosUsuarios();
        foreach ($todosLosjugadores as $key => $value) {
            if ($value->mail==$mijugador->mail) 
            {
                $objDelaRespuesta->respuesta="Jugador ya existente";
                $flag=false;
            }
        }
        if ($flag==true) {
            $mijugador->InsertarUsuario();
            $mijugador->InsertarAnagrama();
            $mijugador->InsertarAgilidad();
            $mijugador->InsertarAdivina();
            $mijugador->InsertarMiJuego();
            $mijugador->InsertarPiedraPapelTijera();
            $objDelaRespuesta->respuesta="Se guardo el jugador.";  
        }
         
        return $response->withJson($objDelaRespuesta, 200);
    }

    public function ControlarUno($request, $response, $args) {
         
        $flag=true;
        $objDelaRespuesta= new stdclass();

        $ArrayDeParametros = $request->getParsedBody();
        $mail = $ArrayDeParametros['mail']; 
        $clave = $ArrayDeParametros['clave'];
        
        
        $mijugador = new jugador();
        $mijugador->mail=$mail;
        $mijugador->clave=$clave;
        
        $todosLosjugadores=jugador::TraerTodosUsuarios();
        foreach ($todosLosjugadores as $key => $value) {
            if (($value->mail==$mijugador->mail)&&($value->clave==$mijugador->clave)) 
            {
                $objDelaRespuesta->respuesta="Jugador registrado";
                $flag=false;
            }
            if (($value->mail==$mijugador->mail)&&($value->clave!=$mijugador->clave)) 
            {
                $objDelaRespuesta->respuesta="Contraseña erronea";
                $flag=false;
            }
            
        }
        if ($flag==true) {

            $objDelaRespuesta->respuesta="Jugador no registrado.";  
        }
         
        return $response->withJson($objDelaRespuesta, 200);
    }

    public function ModificarUno($request, $response, $args) {
        //$response->getBody()->write("<h1>Modificar  uno</h1>");
        $ArrayDeParametros = $request->getParsedBody();
       //var_dump($ArrayDeParametros);    	
       $mijugador = new jugador();
       $mijugador->mail=$ArrayDeParametros['mail'];
      
       $juego=$ArrayDeParametros['juego'];
       $gpe=$ArrayDeParametros['gpe'];
     
        if ($juego=="piedrapapeltijera") 
        {
            $resultado =$mijugador->Modificar1($gpe);
            $objDelaRespuesta= new stdclass();
         //var_dump($resultado);
            $objDelaRespuesta->resultado=$resultado;
             $objDelaRespuesta->tarea="modificar";
        }
        if ($juego=="anagrama") 
        {
            $resultado =$mijugador->Modificar2($gpe);
            $objDelaRespuesta= new stdclass();
         //var_dump($resultado);
            $objDelaRespuesta->resultado=$resultado;
             $objDelaRespuesta->tarea="modificar";
        }
        if ($juego=="adivina") 
        {
            $resultado =$mijugador->Modificar3($gpe);
            $objDelaRespuesta= new stdclass();
         //var_dump($resultado);
            $objDelaRespuesta->resultado=$resultado;
             $objDelaRespuesta->tarea="modificar";
        }
        if ($juego=="agilidad") 
        {
            $resultado =$mijugador->Modificar4($gpe);
            $objDelaRespuesta= new stdclass();
         //var_dump($resultado);
            $objDelaRespuesta->resultado=$resultado;
             $objDelaRespuesta->tarea="modificar";
        }
        if ($juego=="mijuego") 
        {
            $resultado =$mijugador->Modificar5($gpe);
            $objDelaRespuesta= new stdclass();
         //var_dump($resultado);
            $objDelaRespuesta->resultado=$resultado;
             $objDelaRespuesta->tarea="modificar";
        }
         
       return $response->withJson($objDelaRespuesta, 200);		
   }




      public function BorrarUno($request, $response, $args) {
      $id=$args['id'];

     	$vehiculo= new vehiculo();
     	$vehiculo->id=$id;
     	$cantidadDeBorrados=$vehiculo->BorrarVehiculo();

     	$objDelaRespuesta= new stdclass();
	    $objDelaRespuesta->cantidad=$cantidadDeBorrados;
	    if($cantidadDeBorrados>0)
	    	{
	    		 $objDelaRespuesta->resultado="algo borro!!!";
	    	}
	    	else
	    	{
	    		$objDelaRespuesta->resultado="no Borro nada!!!";
	    	}
	    $newResponse = $response->withJson($objDelaRespuesta, 200);  
      	return $newResponse;
    }
     











    
  
}