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
                                    <p> React is the most famous JavaScript library/framework for it’s faster and smoother web applications experiences. React brings this revolutionary faster and smoother user-experience indeed with it’s special work process. React uses diff algorithm where basically react saves a soft copy of browser’s DOM and when it runs the code then easily it compares with the saved soft copy of the DOM and compile the codes exactly where requires. This soft copy of browser’s DOM is known as a Virtual DOM. Another thing to note, when we write code in react JSX then react uses babel transpiler to compile codes into react format.Alongside, react uses fiber architecture too. React's hooks are another fantastic thing that gives user experience at the boss level. </p>
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
                                    <p> The most notable differences between props and state is that props is  read only  and that means props value can not be changed. It’s immutable. On the other hand, state can be modified. Another thing is props is used to pass data from one component to other as arguments but state holds the data of the components. Props can easily accessed by child component but state data can’t be accessed by it’s child. Props receives data as object and state can hold all types of data. We can do destructering with props data but state doesn’t require this type of destructuring. But important is to note that props and state both are regarded as object in reactjs and both can hold default values too.</p>
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