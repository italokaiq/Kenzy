export const Task = () => {

    const handleSubmit = () => {
        const newTask = document.querySelector("h1")
    }

    return (
        <main>
            <div>
                <h1>Inserir tarefa</h1>
            </div>
            <div>
                <input type="text" placeholder="Digitar o título da tarefa" />
                <select name="" id="">
                    <option value="" disabled selected>Selecionar tipo</option>
                    <option value="normal">Normal</option>
                    <option value="importante">Importante</option>
                    <option value="urgente">Urgente</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>Adicionar Tarefa</button>
            </div>
        </main>
    )
}