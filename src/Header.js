import React from 'react'

function Header() {

  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src='./images/UNCOR.jpeg' class="d-block w-100" alt="UNC OR Staff Thanksgiving 2020" />
            </div>
        <div class="carousel-item">
                <img src="./images/glacierBridge.jpeg" class="d-block w-100" alt="Glacier National Park 2022" />
            </div>
        </div>
            <div class="carousel-item">
                <img src="./images/templeOfTheMoon.jpeg" class="d-block w-100" alt="Temple of The Moon 2022" />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Header