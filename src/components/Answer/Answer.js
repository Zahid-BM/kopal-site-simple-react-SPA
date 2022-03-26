import React from 'react';

const Answer = () => {
    return (

        <div className="container my-5">
            <h2 className="fw-bolder text-center text-secondary">Q & A for Bonus Marks</h2>
            <div className="row ">
                <div className="col-12 ">
                    <div className="accordion w-100 " id="accordionExample">

                        <div className="accordion-item my-2 ">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button bg-success text-white fw-bold " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    How does react work??
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-secondary text-white">
                                    <p> Basically JavaScript is a single threaded interpreted programming language. It
                                        has only a single call stack. That means it is not like other compiled language
                                        that we need to write a full a-z code to execute. JavaScript indeed can process
                                        and run small small code command and for this JavaScript implicitly interprets
                                        the small code commands to run using just in time (JIT) compiler process. It
                                        uses google's V8 engine to execute the codes in chrome and node.js. From 2015
                                        JavaScript V8 engine using Turbo Fan technology to process the code even more
                                        faster than ever. In short, JavaScript runs the written codes in 4 steps. 1.
                                        Checks any syntactic errors or not in the written codes. 2. If no syntax error
                                        then it creates a special data structure called Abstract Syntax tree. 3. Then
                                        JavaScript converts the codes into machine readable codes via JIT process called
                                        byte codes. 4. Then finally runs the byte codes in system or engine . Most
                                        importantly notable that JavaScript has a run time model to execute the codes
                                        named event loop.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne1">
                                <button className="accordion-button bg-success text-white fw-bold " type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true"
                                    aria-controls="collapseOne1">
                                    What are the differences between props and state?
                                </button>
                            </h2>
                            <div id="collapseOne1" className="accordion-collapse collapse show"
                                aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-secondary text-white">
                                    <p> Local and session storage are almost same but this is identical. When browser
                                        uses storage for a session only then it is called a session storage and when
                                        browser uses the storage to store data for a certain period of time or longer
                                        time then it is called a local storage. Session storage data is vanished
                                        immediately after ending the session but local storage data doesn't vanish even
                                        after ending the session. Local storage data stays as long as that is not erased
                                        by user. Saving user’s address is a good instance for a local storage data. As
                                        long as this saved in the local storage user doesn’t need to re-type the address
                                        each time. On the other hand, opening a new page in the new tab of a web browser
                                        is a good example for session storage. Importantly notable that local and
                                        session storage data can not be sent to the server but coockies data can be sent
                                        to server even as coockies data saved in the local storage.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    );
};

export default Answer;