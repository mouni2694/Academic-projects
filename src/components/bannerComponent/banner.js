import React from "react";
import "./banner.css"
import banner from "./image/banner.png";

function BannerComponent(){
    return(
        <div class="card mb-3">
            <img src= {banner} class="card-img-top" alt="..."/>
                <div>
                    <h1 className = "main-heading">
                        <span className = "title">Project Overview:</span> Academic MCA Platform</h1>
                </div>
                <div class = "card">
                
                <div class="card-body">

                    

                  <h5 class="title">Comprehensive Academic Management:</h5>
                  <p class="card-text">Develop a sytem that efficiently manages academic information
                  including student records, courses, and faculty details.</p>
                  
                </div>
                </div>
                <div class = "card">

                
                <div class="card-body">

                  <h5 class="title">Dynamic Content Delivery:</h5>
                  <p class="card-text">Implement a dynamic content delivery system to enhance the learning experience. Explore interactive multimedia content, quizzes, 
                  and real-world case studies to make the platform engaging.</p>
                  
                </div>
                </div>

                <div class = "card">

                <div class="card-body">

                  <h5 class="title">User-Friendly Interface:</h5>
                  <p class="card-text">Design an intuitive and user-friendly interface for both students and faculty members. Prioritize accessibility and
                   responsiveness for a seamless experience across devices. </p>
                  
                </div>
                </div>
        
                <div class="card">
                    <div class="card-body">
                        <h5 class="title">Collaboration and Communication:</h5>
                        <p class="card-text">Integrate communication tools to facilitate collaboration between students and faculty. Explore discussion forums, messaging systems, and collaborative project spaces.

</p>
                        
                    </div>
  
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="title">Performance Analytics:</h5>
                        <p class="card-text">Implement performance analytics to track student progress and provide valuable insights for educators. Develop dashboards for both students and faculty to monitor academic performance.</p>
                        
                    </div>
  
                </div>
        </div>
    )

}
export default BannerComponent;