import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>CONTACT US</h4>
                        <ul className="list">
                            <li>Contact Hours:</li>
                            <li>09:00 AM to 05:00 PM</li>
                            <li>(AEST/AEDST)-MON to FRI</li>
                            <li>Phone:(04)983XXXXXXX</li>
                            <li>Email:Info@nk.com.au</li>
                            <li>Mailing Address:</li>
                            <li>PO Box XXXX, Hurstville, NSW 2220</li>

                        </ul>
                        

                    </div>
                    <div className="col">
                        <h4>SHOP</h4>
                        <ul className="list">
                            <li>NEW ARRIVALS</li>
                            <li>For HIM</li>
                            <li>For HER</li>
                            <li>For KIDS</li>
                            <li>SALE</li>

                        </ul>


                    </div>
                    <div className="col">
                        <h4>USEFUL DETAILS</h4>
                        <ul className="list">
                            <li>ABOUT US</li>
                            <li>We are 100% Australian Owned</li>
                            <li>FAQs</li>
                            <li>Blogs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>

                        </ul>


                    </div>
                </div>
                <hr />
                
                <div className="row1">
                    <p>&copy;{new Date().getFullYear()}-
                      All right reserved
                    </p>
                    <div >
                    <i class=" fab fa-facebook"></i>
                    <i class=" fab fa-instagram"></i>
                    <i class=" fab fa-twitter"></i>
                    <i class=" fab fa-whatsapp"></i>
                    </div>
                    

                    </div>
                    </div>

            
           
        </div>
    )
}
