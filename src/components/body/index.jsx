import React from 'react'
import '../body'

export default function index() {
    
    function primaryRequest() {
        var um = document.querySelector("#pergunta")
        var dois = document.querySelector("#resposta")
        const valor = fetch('https://opentdb.com/api.php?amount=30&category=19').then(lasanha =>{
        
            lasanha.json().then(lasanha=>{

                console.log(lasanha.category)

                um.innerHTML = `${results.category.correct_answer}`
                dois.innerHTML = `${results.category.correct_answer}`
            })
        })
    }
primaryRequest()
    return (
        <div>
            <label id="pergunta">Era pra retornar os dados da API :)</label> <p></p>
            <label id="resposta">Não deu tempo de acabar :(</label>
        </div>
    )
}

