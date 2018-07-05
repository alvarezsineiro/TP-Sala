<?php 

interface IApiUsable{ 
	
   	public function TraerUno($request, $response, $args); 
	public function TraerTodos($request, $response, $args); //
	public function TraerTodosPiedra($request, $response, $args);
	public function TraerTodosAnagrama($request, $response, $args);
	public function TraerTodosMiJuego($request, $response, $args);
	public function TraerTodosAgilidad($request, $response, $args);
	public function TraerTodosAdivina($request, $response, $args);
	
	public function CargarUno($request, $response, $args);
	public function ControlarUno($request, $response, $args);
   	public function BorrarUno($request, $response, $args);//
   	public function ModificarUno($request, $response, $args);

}