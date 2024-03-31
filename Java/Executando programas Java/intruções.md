public class {nome do arquivo} {
    public static void main(string[] args){  <!-- aréa necessária para que o arquivo seja executado -->
        System.out.println("Mensagem a ser enviada!")
    }
}

Terminal

- javac src/*.java -d target  <!-- compilador - é necessário executar toda vez que o código for alterado -->
- java -cp target {nome do arquivo}  <!-- executar -->