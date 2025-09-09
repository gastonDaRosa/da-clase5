package com.sem5.clase1.controlador;

import com.sem5.clase1.modelo.Contador;
import com.sem5.clase1.modelo.Respuesta;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/contador")

public class ControladorContador {
    
    private Contador contador = new Contador(0);
    
    @PostMapping("/vistaConectada")
    public List<Respuesta> vistaConectada() {
       return valorContador();
    }
    @PostMapping("/sumar")
    public List<Respuesta> sumar(){
        contador.sumar();
        return valorContador();
    }
    @PostMapping("/restar")
    public List<Respuesta> restar() {
        if(contador.restar()){
            return valorContador();
        }else return Respuesta.lista(new Respuesta("mensaje","No es posible restar"));
    }
    
    private List<Respuesta> valorContador() {
        return Respuesta.lista(new Respuesta("valor",contador.getValor()));
    }
    
}
