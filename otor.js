//Never
function handleError(code: number, message: string): never {
  //Proceso de codigo aqui
  //Se genera un mensaje
  throw new Error(`${message}. Code: ${code}`);
}
try {
  handleError(404, "Not Found");
} catch (error) {}
