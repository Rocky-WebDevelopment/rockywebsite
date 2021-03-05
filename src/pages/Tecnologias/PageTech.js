import React from 'react'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import { Link } from 'react-router-dom'

function Tecnologias() {
    return (
        <div>
            <ServicesBanner
                img="ImgTI"
            />

            <div className="container">
                <h1>Tecnologias</h1>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, harum </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
            
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, harum </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
            
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, harum </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
            
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, harum </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
                
                
                <section className="btn-container">

                    <Link to={"/services/tecnologias/webanalytics"}>Web Analytics</Link>
                    <Link to={"/services/tecnologias/webdev"}>Web Development</Link>
                            
                </section>
            </div>
        </div>
    )
}

export default Tecnologias
