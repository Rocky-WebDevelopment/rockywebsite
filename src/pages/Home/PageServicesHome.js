import React from 'react'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import imageHome from '../../assets/midia digital@2x.png'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

function PageServicesHome() {
    return (
        <div>
            <ServicesBanner
                img="ImgMidias"
            />

            <div class="container">
                <div class="content">
                    <div class="image">
                        <img src={imageHome} alt="Gráficos de Mídias"/>
                    </div>
                    <div class="text">
                        <h1>Home Services</h1>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, harum </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam suscipit a voluptatum id eius vel explicabo officia fugiat, ipsa, unde similique quia repudiandae. Iste unde repudiandae illo modi in?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi nisi nihil perferendis vero voluptas illo, possimus magni quaerat eaque omnis dolores tenetur iusto quod vel perspiciatis doloremque in et.</p>
                    
                    </div>
                </div>

                <div class="more">
                    <Link to={'/services/midias/'} className="link-ref">Entenda</Link>
                </div>
            </div>
            

        </div>
    )
}

export default PageServicesHome
