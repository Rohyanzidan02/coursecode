import React from 'react'
import backend from '../asset/coding.gif'

function Desain() {
  return (
    <section id="courses">
            <div class="kolom">
                {/* <p class="deskripsi">You Will Need This</p> */}
                <h2>graphic designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt voluptatibus possimus blanditiis reiciendis. Qui, facilis! Delectus exercitationem dolores sapiente?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt voluptatibus possimus blanditiis reiciendis. Qui, facilis! Delectus exercitationem dolores sapiente?</p>
                <p><a href="" class="tbl-biru">Pelajari Lebih Lanjut</a></p>
            </div>
            <img src={backend}/>
        </section>
  )
}

export default Desain