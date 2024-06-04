ng build --base-href  ./

# Ruta de origen y destino
$source = "./dist/02-bases/browser"
$destination = "./docs/"

# Verificar si el directorio de destino existe, si no, crearlo
if (-Not (Test-Path -Path $destination)) {
    New-Item -ItemType Directory -Path $destination
}

# Copiar todos los archivos y subdirectorios recursivamente
Copy-Item -Path "$source\*" -Destination $destination -Recurse -Force
