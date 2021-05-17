# Visual Regression Testing usando Resemble 

# Pasos para poder usar la herramienta de comparacion creada con ResembleJs

### Prerequisitos
- Estar en un directorió donde desee trabajar. 
- Descargar nodeJs en la versión v12.16.1 , descargar según sistema operativo [Node](https://nodejs.org/es/download/).  
- Clonar repo : git clone https://github.com/p-guillen/resembleJs-cypress.git.
- El analizador en ResembleJS se debe ejecutar desde Sistemas Operativos basados en Linux.

### Pasos para usar la herramienta

- Instalar dependecias : npm install.
```
npm install.
```

- Ejecutar las pruebas : 
```
npx cypress run --spec cypress\integration\color-pallete\color-pallete-changes.spec.js --headless
```

### Resulados de las pruebas : 


- Dentro del folder que se definio con el nombre dentro de: color-pallete>color-pallete-changes.spec.js>7.2.0, automaticamente se generaran las imagenes de resultados dentro de folders nuevos:

    * NoChange,Change_cypress_paso_1
    * NoChange,Change_cypress_paso_2
