import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2 className='text-primary text-center fw-bold my-5'>Blogs Page</h2>

            <div className=' w-50 justify-content-center mx-auto blog'>
                <h3><b>Question 1</b>: What is the difference between authorization and authentication ?</h3>
                <p><b>Answer</b>: Authentication is visible to and partially changeable by the user. Authorization isn't visible to or changeable by the user. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>

                <h3><b>Question 2</b>: Why are you using firebase ?</h3>
                <p><b>Answer</b>: Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>

                <h3><b>Question 2.1</b>: What other options do you have to implement authentication ?</h3>
                <p><b>Answer</b>: Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

                <h3><b>Question 3</b>: </h3>
                <p><b>Answer</b>: Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google's infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
        </div>
    );
};

export default Blogs;