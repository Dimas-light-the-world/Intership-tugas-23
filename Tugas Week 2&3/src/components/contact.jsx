import React from 'react';

const Contact = () => {
    const getElement = (identifier = "") => document.querySelector(identifier);

    const verifySubmission = (event) => {
        event.preventDefault(); // Prevent the default form submission

        let subjectElement = getElement("input[name='subject']").value; // Change selector to match input name
        let messageElement = getElement("textarea").value;
        let nameElement = getElement("input[name='name']").value; // Change selector to match input name
        let emailElement = getElement("input[name='email']").value;

        if (subjectElement && messageElement && nameElement && emailElement) {
            let body = encodeURIComponent("From: " + nameElement + "\nEmail: " + emailElement + "\n\n" + messageElement);
            window.location.href = "mailto:dimas.ahmad41@ui.ac.id?subject=" + subjectElement + "&body=" + body;
        } else {
            alert("Please fill in all required fields.");
        }
    };

    return (
        <section id="contact">
            <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
                <form method='POST' onSubmit={verifySubmission} className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                        <p className='text-[#ccd6f6] py-4'>// Submit the form below to mail me - dimas.ahmad41@ui.ac.id</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Subject' name='subject' required /> {/* Added subject input */}
                    <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;