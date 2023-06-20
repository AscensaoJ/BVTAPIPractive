const quiz = ReactDOM.createRoot(document.getElementById('quiz'));

function AnswerPage(que, cor){
    return (
        <table>
            <tbody>
                <tr>
                    <td>{que[0]}</td>
                    <td>{cor[0]}</td>
                </tr>
                <tr>
                    <td>{que[1]}</td>
                    <td>{cor[1]}</td>
                </tr>
                <tr>
                    <td>{que[2]}</td>
                    <td>{cor[2]}</td>
                </tr>
                <tr>
                    <td>{que[3]}</td>
                    <td>{cor[3]}</td>
                </tr>
                <tr>
                    <td>{que[4]}</td>
                    <td>{cor[4]}</td>
                </tr>
                <tr>
                    <td>{que[5]}</td>
                    <td>{cor[5]}</td>
                </tr>
                <tr>
                    <td>{que[6]}</td>
                    <td>{cor[6]}</td>
                </tr>
                <tr>
                    <td>{que[7]}</td>
                    <td>{cor[7]}</td>
                </tr>
                <tr>
                    <td>{que[8]}</td>
                    <td>{cor[8]}</td>
                </tr>
                <tr>
                    <td>{que[9]}</td>
                    <td>{cor[9]}</td>
                </tr>
                <tr>
                    <td>{que[10]}</td>
                    <td>{cor[10]}</td>
                </tr>
                <tr>
                    <td>{que[11]}</td>
                    <td>{cor[11]}</td>
                </tr>
                <tr>
                    <td>{que[12]}</td>
                    <td>{cor[12]}</td>
                </tr>
                <tr>
                    <td>{que[13]}</td>
                    <td>{cor[13]}</td>
                </tr>
                <tr>
                    <td>{que[14]}</td>
                    <td>{cor[14]}</td>
                </tr>
                <tr id='lastRow'>
                    <td>{que[15]}</td>
                    <td>{cor[15]}</td>
                </tr>
            </tbody>
        </table>
    )
}

function QueFormat(question, answers){
    return (
        <div id='container'>
            <p id='question'>{question}</p>
            <div className='btn-grp'>
                <div className='sub-grp'>
                    <button id='0' className='answers btn' value='0' onClick={e => checkAnswer(e.target.value)}>{answers[0]}</button>
                    <button id='1' className='answers btn' value='1' onClick={e => checkAnswer(e.target.value)}>{answers[1]}</button>
                </div>
                <div className='sub-grp'>
                    <button id='2' className='answers btn' value='2' onClick={e => checkAnswer(e.target.value)}>{answers[2]}</button>
                    <button id='3' className='answers btn' value='3' onClick={e => checkAnswer(e.target.value)}>{answers[3]}</button>
                </div>
            </div>
        </div>
    );
}

function StartQuiz(){
    return (
        <div id='container'>
            <button id='starter' className='btn' onClick={e => writeQuestion()}>Start Quiz</button>
        </div>
    )
}







