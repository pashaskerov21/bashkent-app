import React, { useContext, useEffect } from 'react'
import Layout from './Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../context/MainContext';
import GalleryPhotos from '../components/gallery/GalleryPhotos';

function FilialDetail() {
    const { filialPath } = useParams();
    const { filialArr } = useContext(MainContext);
    const navigate = useNavigate();
    const filial = filialArr.find((filial) => filial.path === filialPath);
    useEffect(() => {
        if (!filial) {
            navigate('/404')
        }
    }, [filial, navigate])

    return (
        <Layout>
            <section className="filial-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div className="filial-img">
                                <img src={filial?.image} alt="filial" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="content">
                                <h1 className="title">{filial?.title}</h1>
                                <div className="text">
                                    <p>{filial?.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryPhotos />
        </Layout>
    )
}

export default FilialDetail
