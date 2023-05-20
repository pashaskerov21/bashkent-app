import React, { createContext } from 'react'
import { blogArr } from './data/BlogData'
import { commentArr } from './data/CommentData'
import { filialArr } from './data/FilialData'
import { galleryPhotoArr } from './data/GalleryData'
import { galleryVideoArr } from './data/GalleryData'
import { partnerArr } from './data/PartnerData'
import { pageLinkArr } from './data/PageLinkData'
import { foodCategories } from './data/FoodData'
import { restoranMenuArr,deliveryMenuArr } from './data/MenuData'
import { bannerImgArr } from './data/BannerData'


export const MainContext = createContext()

function MainProvider({children}) {
    
  return (
    <MainContext.Provider value={{bannerImgArr,pageLinkArr,foodCategories,blogArr,commentArr,filialArr,galleryPhotoArr,galleryVideoArr,partnerArr,restoranMenuArr,deliveryMenuArr}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainProvider
