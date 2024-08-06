# Tanzu Node.js Application Deployment Guide

Este documento describe los pasos para realizar cambios en tu aplicación Node.js y desplegarla en un clúster de Tanzu.

## Prerrequisitos

- Docker instalado y configurado.
- Tanzu CLI instalado y configurado.
- Clúster de Kubernetes configurado.

## Pasos para realizar cambios y desplegar

### 1. Realiza los cambios en tu aplicación

Modifica tu código fuente en el archivo correspondiente (por ejemplo, `index.js`).

```javascript
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is the main page!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### 2. Construye la nueva imagen de Docker
Ejecuta el siguiente comando para construir la nueva imagen de Docker:

docker build -t localhost:5000/tanzuapp:latest .

### 3. Empuja la nueva imagen al registro local
Ejecuta el siguiente comando para empujar la imagen al registro local:

docker push localhost:5000/tanzuapp:latest

### 4. Elimina el despliegue existente en Kubernetes
Ejecuta el siguiente comando para eliminar el despliegue existente:

kubectl delete deployment tanzuapp

### 5. Aplica nuevamente el despliegue
Ejecuta el siguiente comando para aplicar el despliegue:

kubectl apply -f deployment.yaml

### 6. Verifica el estado de los pods
Ejecuta el siguiente comando para verificar el estado de los pods:

kubectl get pods

### 7. Describe el nuevo pod para revisar eventos y errores
Ejecuta el siguiente comando para describir el nuevo pod y revisar eventos y errores:

kubectl describe pod nombredelnuevopod

### 8. Accede a tu aplicación
Abre tu navegador web y accede a tu aplicación en el puerto especificado:

http://localhost:31000/ //// o el que configures ///// curl http://localhost:31000/



