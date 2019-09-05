# Testing 101

**Regla de oro:** Diseñar test para que sean:

- Sencillos
- Cortos
- Libres de abstracción
- Agradables a la vista

## 1. Consejos generales

### 1.1. Nombrar los test

Hay que decir:

- **Qué** se testea
- Bajo qué circunstancias y **escenario**
- Cuál es el **resultado** esperado

> [Ejemplo 01](/01.js)

### 1.2. Mantener una estructura AAA

- _**A**rrange_
- _**A**ct_
- _**A**ssert_

> [Ejemplo 02](/02.js)

### 1.3. Usar datos que se asemejen a la realidad

Muchas veces nos encontraremos con que en producción aparece bugs a raíz de los casos más extremos. Por lo que nuestros tests serán más efectivos si intentamos tener en cuenta esto.

> No es lo mismo hacer un test que compruebe que el valor de un _input_ es `Richard`, que `DROP TABLE` o `@3e2ddsf.##`

### 1.4. Probar cuantas posibilidades se nos ocurran usando diferentes combinaciones

- Solemos testear lo que sabemos
- Lo difícil es ver las combinaciones poco comunes.

Dado que somos nosotros mismos los que sacamos el test del código que creamos, muchas veces no vemos todas las posibles opciones que puede haber a la hora de testearlo y simplemente testeamos unas pocas combinaciones que van a pasar.  

> Por ello, sería bueno que testearamos no sólo casos extremos, sino numerosas variaciones.

### 1.5. Testear errores

- Métodos y _asserts_ que sirven para testear errores -> usénlos

> [Ejemplo 03](03.js)

### 1.6. TDD: Test-Driven Development

![tdd-lifecycle](img/tdd.png)

_Convertir requisitos en tests._

Beneficios:

- Tests generalmente pequeños
- Ayudan a concentrarse
- Código más limpio
- Es más fácil hacer refactor
- Tests mejor documentados
- Sirven de documentación

## 2. Front End Testing

### 2.1. Separen tests de la interfaz y estilo de la lógica

- UI -> chatarra a la hora de testear
- Si testeamos UI, el mínimo cambio puede romper el test, por lo que hay que tener cuidado

> Hay que testear la UI también, pero con cuidado y sin volverse locos.

### 2.2. Intentar testear componentes

- Si se puede, extraer el componente, renderizarlo solo y luego testear (cuidado con componentes grandes)
- Usen herramientas como _Lighthouse_
- !E2E && Separen tests del front de los del back
- Cuidado con los E2E -> Se tarda en configurarlos y se rompen con facilidad
  