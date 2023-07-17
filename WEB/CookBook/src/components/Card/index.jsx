export default function Card() {
    return (
        <div className="card flex flex-col justify-between bg-slate-300 rounded-2xl w-3/5 text-neutral-900 shadow-lg shadow-black">
            <h1 className="my-8">NOME DA RECEITA</h1>
            <p><strong>INGREDIENTES:</strong></p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui unde optio, 
                sint maiores quidem nam quam. Libero, quam necessitatibus! Maiores rem quaerat commodi 
                qui, non odio, nobis, soluta beatae corporis iure repudiandae quis provident quod. 
                Molestias autem necessitatibus voluptatem nihil ducimus? Alias minus corporis eum 
                quae quod in molestiae.
            </p>
            <p><strong>MODO DE PREPARO:</strong></p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui unde optio, 
                sint maiores quidem nam quam. Libero, quam necessitatibus! Maiores rem quaerat commodi 
                qui, non odio, nobis, soluta beatae corporis iure repudiandae quis provident quod. 
                Molestias autem necessitatibus voluptatem nihil ducimus? Alias minus corporis eum 
                quae quod in molestiae.
            </p>
            <br />
            <hr/>
            <button onClick={() => window.print()} type='submit'>Favoritar</button>
            <button onClick={() => window.print()} type='submit'>Imprimir</button>
        </div>
    )
}