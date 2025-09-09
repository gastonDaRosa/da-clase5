package com.sem5.clase1.modelo;

public class Contador {
    private int valor;

    public Contador() {
        this.valor = 0;
    }

    public Contador(int valor) {
        this.valor = valor;
    }

    public int getValor() {
        return valor;
    }

    public void sumar(){
        this.valor += 1;
    }

    public boolean restar(){
        if(this.valor > 0){
            this.valor -= 1;
            return true;
        }
        return false;
    }
    

}
