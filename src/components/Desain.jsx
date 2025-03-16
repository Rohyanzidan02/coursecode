import React from 'react'
import backend from '../asset/coding.gif'

function Desain() {
  return (
    <section id="courses">
            <div class="kolom">
                {/* <p class="deskripsi">You Will Need This</p> */}
                <h2>graphic designer</h2>
                <p>Dalam course  ini akan ada matari dan praktek yang menjelaskan tentang Desain grafis dari nol serta fungsi tools nya
                  terdapat vidio materi, code dan beberapa soal   </p>
                <p>Materi ajar : Dasar corel, Ai, Photoshoop, coreldraw</p>
                <p><a href="" class="tbl-biru">IKUTI COURSE</a></p>
            </div>
            <img src={backend}/>
        </section>
  )
}

export default Desain