import React from 'react'
import SectionTitle from '../SectionTitle'

function ContactSection() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <form action="#" className="form-general">
              <SectionTitle title='Əlaqə' />
              <input type="text" placeholder='Adınız *' />
              <input type="text" placeholder='Soyadınız *' />
              <input type="email" placeholder='Email *' />
              <input type="number" placeholder='Nömrə *' />
              <input type="text" placeholder='Başlıq *' />
              <textarea placeholder='Mesajınız'></textarea>
              <button type='submit' className='btn-general active'>Göndər</button>
            </form>
          </div>
          <div className="col-12 col-xl-6">
            <div className='map'>
              <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1UQoB2Xo9DSiKrUx5V290Dxzny7WCIB0&ehbc=2E312F"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
