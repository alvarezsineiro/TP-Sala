<?php
class jugador
{
	public $id;
 	public $mail;
  	public $clave;
  	public $ganadas;
    public $perdidas;
    public $empatadas;

    public static function Traer1()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, ganadas, perdidas,empatadas from piedrapapeltijera order by ganadas DESC");
            $consulta->execute();
            	
			return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
    }
    public static function Traer2()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, ganadas, perdidas from anagrama order by ganadas DESC");
            $consulta->execute();
            	
			return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
    }
    public static function Traer3()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, ganadas, perdidas from agilidad order by ganadas DESC");
            $consulta->execute();
            	
			return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
    }
    public static function Traer4()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, ganadas, perdidas from adivina order by ganadas DESC");
            $consulta->execute();
            	
			return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
    }
    public static function Traer5()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, ganadas, perdidas from mijuego order by ganadas DESC");
            $consulta->execute();
            	
			return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
	}












    public function InsertarPiedraPapelTijera()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into piedrapapeltijera (mail,ganadas,perdidas,empatadas) values(:mail,:ganadas,:perdidas,:empatadas)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',0, PDO::PARAM_INT);
                $consulta->bindValue(':perdidas',0, PDO::PARAM_INT);
                $consulta->bindValue(':empatadas',0, PDO::PARAM_INT);
				
				$consulta->execute();		
     }
     public function InsertarAnagrama()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into anagrama (mail,ganadas,perdidas) values(:mail,:ganadas,:perdidas)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',0, PDO::PARAM_INT);
                $consulta->bindValue(':perdidas',0, PDO::PARAM_INT);
               
				
				$consulta->execute();		
     }
     public function InsertarAgilidad()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into agilidad (mail,ganadas,perdidas) values(:mail,:ganadas,:perdidas)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',0, PDO::PARAM_INT);
                $consulta->bindValue(':perdidas',0, PDO::PARAM_INT);
           
				
				$consulta->execute();		
     }
     public function InsertarAdivina()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into adivina (mail,ganadas,perdidas) values(:mail,:ganadas,:perdidas)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',0, PDO::PARAM_INT);
                $consulta->bindValue(':perdidas',0, PDO::PARAM_INT);
             
				
				$consulta->execute();		
     }
     public function InsertarMiJuego()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into mijuego (mail,ganadas,perdidas) values(:mail,:ganadas,:perdidas)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',0, PDO::PARAM_INT);
                $consulta->bindValue(':perdidas',0, PDO::PARAM_INT);
           
				
				$consulta->execute();		
     }







	 public function InsertarUsuario()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (mail,clave) values(:mail,:clave)");
				$consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
				$consulta->bindValue(':clave',$this->clave, PDO::PARAM_STR);
				
				$consulta->execute();		
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
     }
     

     public static function TraerTodosUsuarios()
     {
             $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
             $consulta =$objetoAccesoDato->RetornarConsulta("select id, mail, clave from usuarios");
             $consulta->execute();			
             return $consulta->fetchAll(PDO::FETCH_CLASS, "jugador");		
     }


     public function Modificar1($gpe)
	 {
            
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from piedrapapeltijera where mail = :mail ");
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
			$consulta->execute();
            $jugador= $consulta->fetchObject('jugador');
            
            if ($gpe==0) {
                $total=$jugador->perdidas+1;
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update piedrapapeltijera 
				set perdidas=:perdidas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':perdidas',$total, PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
           if ($gpe==1) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update piedrapapeltijera 
				set ganadas=:ganadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',($jugador->ganadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
            if ($gpe==2) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update piedrapapeltijera 
				set empatadas=:empatadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':empatadas',($jugador->empatadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
			
			
			return $retorno;
	 }

     public function Modificar2($gpe)
	 {
            
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from anagrama where mail = :mail ");
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
			$consulta->execute();
            $jugador= $consulta->fetchObject('jugador');
            
            if ($gpe==0) {
                $total=$jugador->perdidas+1;
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update anagrama 
				set perdidas=:perdidas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':perdidas',$total, PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
           if ($gpe==1) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update anagrama 
				set ganadas=:ganadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',($jugador->ganadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }	
			
			return $retorno;
     }
     public function Modificar3($gpe)
	 {
            
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from adivina where mail = :mail ");
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
			$consulta->execute();
            $jugador= $consulta->fetchObject('jugador');
            
            if ($gpe==0) {
                $total=$jugador->perdidas+1;
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update adivina 
				set perdidas=:perdidas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':perdidas',$total, PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
           if ($gpe==1) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update adivina 
				set ganadas=:ganadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',($jugador->ganadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }	
			
			return $retorno;
     }

     public function Modificar4($gpe)
	 {
            
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from agilidad where mail = :mail ");
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
			$consulta->execute();
            $jugador= $consulta->fetchObject('jugador');
            
            if ($gpe==0) {
                $total=$jugador->perdidas+1;
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update agilidad 
				set perdidas=:perdidas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':perdidas',$total, PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
           if ($gpe==1) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update agilidad 
				set ganadas=:ganadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',($jugador->ganadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }	
			
			return $retorno;
     }
     public function Modificar5($gpe)
	 {
            
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from mijuego where mail = :mail ");
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
			$consulta->execute();
            $jugador= $consulta->fetchObject('jugador');
            
            if ($gpe==0) {
                $total=$jugador->perdidas+1;
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update mijuego 
				set perdidas=:perdidas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':perdidas',$total, PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }
           if ($gpe==1) {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			    $consulta =$objetoAccesoDato->RetornarConsulta("
				update mijuego 
				set ganadas=:ganadas
				
				WHERE mail=:mail");
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':ganadas',($jugador->ganadas+1), PDO::PARAM_INT);
			
			$retorno= $consulta->execute();
            }	
			
			return $retorno;
     }
     



  	public function BorrarVehiculo()
	 {
	 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				delete 
				from vehiculo 				
				WHERE id=:id");	
				$consulta->bindValue(':id',$this->id, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
	 }

	public function mostrarDatos()
	{
	  	return "Metodo mostar:".$this->modelo."  ".$this->tipo."  ".$this->anio;
	}

}