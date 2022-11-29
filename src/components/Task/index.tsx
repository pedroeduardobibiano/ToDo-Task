import styles from './tasks.module.css'

export function Task(){
    return(
        <section>
            <header>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>10</span>
                </div>

                <div>
                    <p>Concluídas</p>
                    <span>2 de 10</span>
                </div>
            </header>
        </section>
    )
}