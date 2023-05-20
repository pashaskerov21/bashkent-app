import React, { useContext } from 'react'
import SectionTitle from '../SectionTitle'
import { MainContext } from '../../context/MainContext'
import CommentCard from './CommentCard'

function CommentSection() {
  const {commentArr,  filialArr} = useContext(MainContext)
  return (
    <section className="comment">
        <div className="container">
            <SectionTitle title='Rəylər'/>
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="comment-container">
                  {
                    commentArr.map(comment => (
                      <CommentCard key={comment.id} comment={comment}/>
                    ))
                  }
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <form action="#" className="form-general">
                  <SectionTitle title='Rəy yazın'/>
                  <input type="text" placeholder='Adınız *' />
                  <input type="email" placeholder='Email *' />
                  <select>
                    <option disabled defaultValue>Filialı seçin</option>
                    {
                      filialArr.map(filial => (
                        <option key={filial.id} value={filial.title}>{filial.title}</option>
                      ))
                    }
                  </select>
                  <textarea placeholder='Rəyiniz'></textarea>
                  <button type='submit' className='btn-general active'>Göndər</button>
                </form>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CommentSection
