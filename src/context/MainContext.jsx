import React, { createContext } from 'react'
import { blogArr } from './data/BlogData'
import { commentArr } from './data/CommentData'
import { filialArr } from './data/FilialData'
import { galleryData } from './data/GalleryData'
import { partnerArr } from './data/PartnerData'
import { pageLinkArr } from './data/PageLinkData'
import { foodCategories, foodArr } from './data/FoodData'
import { menuData } from './data/MenuData'
import { bannerImgArr } from './data/BannerData'


export const MainContext = createContext()

function MainProvider({children}) {
    
  return (
    <MainContext.Provider value={{bannerImgArr,pageLinkArr,foodCategories, foodArr,blogArr,commentArr,filialArr,galleryData,partnerArr,menuData}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainProvider
