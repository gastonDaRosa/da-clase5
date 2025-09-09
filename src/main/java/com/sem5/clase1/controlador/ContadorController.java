package com.sem5.clase1.controlador;

import com.sem5.clase1.modelo.Contador;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contador")
public class ContadorController {

    private Contador contador = new Contador();  // Instanciamos la clase Contador

    // Obtener el valor del contador
    @GetMapping
    public int obtenerValorContador() {
        return contador.getValor();
    }

    // Incrementar el contador
    @PostMapping("/sumar")
    public void incrementarContador() {
        contador.sumar();
    }

    // Decrementar el contador
    @PostMapping("/restar")
    public void decrementarContador() {
        contador.restar();
    }
}