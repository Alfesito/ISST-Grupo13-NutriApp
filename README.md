# Url con HTTPS en firefox en local:

[https://localhost:443/](https://localhost:443/)

# Comando para correr Spring Boot
    - MAC: 
        
        $ ./mvnw clean install spring-boot:run -DskipTests=true

    - Windows:
        
        $ .\mvnw clean install spring-boot:run -DskipTests=true

# Pasos para clonar el repositorio con la rama master:

        $ git clone https://github.com/Alfesito/ISST-Grupo13-NutriApp.git
        $ git checkout master   -> Cambiar a la rama master

# Pasos para subir al repositorio
    
        $ git add .
        $ git commit -m "ejemplo commit"
        $ git push -u origin master

## Para ver en que branch trabajamos y cambiar:

        $ git branch    -> Ver branch
        $ git checkout <branch>         -> Cambiar de branch

# Uso de springdoc-openapi-ui  

Esta biblioteca genera documentación sobre su API-REST automáticamente, en la dirección:
        https://localhost/swagger-ui/index.html
