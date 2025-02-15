
import Maincartpage from "../components/Addtocart/Maincartpage";

import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

import Footer from "./Footer";

import { CheckOut } from "./CheckOut";

import { MenAccessoris } from "./Menproduct/MenAcceseoris";
import { MenAutumn } from "./Menproduct/MenAutumn";
import { MenBrand } from "./Menproduct/MenBrand";
import { MenCloathing } from "./Menproduct/MenClothing";
import { MenDresses } from "./Menproduct/MenDresses";
import { MenFaceBody } from "./Menproduct/MenFaceBody";
import { MenGifting } from "./Menproduct/MenGifting";
import { MenMarketPlace } from "./Menproduct/MenMarket";
import { MenNewIn } from "./Menproduct/MenNewIn";
import { MenOulet } from "./Menproduct/MenOutLet";
import { MenSale } from "./Menproduct/MenSale";
import { MenShoes } from "./Menproduct/MenShoes";
import { MenSportWear } from "./Menproduct/MenSportwear";
import { MenTopShop } from "./Menproduct/MenTopShop";
import SigninandSignup from "./Signin&Signup";

import WomenPage from "./WomenPage";
import MenPage from "./MenPage";

import SinglePageProduct from "./SinglePageProduct";

import { WomenAccessoris } from "./womenProduct/WomenAcceseoris";
import { WomenAutumn } from "./womenProduct/WomenAutumn";
import { WomenBrand } from "./womenProduct/WomenBrand";
import { WomenCloathing } from "./womenProduct/WomenClothing";
import { WomenDresses } from "./womenProduct/WomenDresses";
import { WomenFaceBody } from "./womenProduct/WomenFaceBody";
import { WomenGifting } from "./womenProduct/WomenGifting";
import { WomenMarketPlace } from "./womenProduct/WomenMarket";
import { WomenNewIn } from "./womenProduct/WomenNewIn";
import { WomenOulet } from "./womenProduct/WomenOutLet";
import { WomenSale } from "./womenProduct/WomenSale";
import { WomenShoes } from "./womenProduct/WomenShoes";
import { WomenSportWear } from "./womenProduct/WomenSportwear";
import { WomenTopShop } from "./womenProduct/WomenTopShop";
import { SearchPage } from "./SearchPage";
import { RequireAuth } from "../components/RequiredAuth";

export const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SigninandSignup />} />
        <Route path="/signin" element={<SigninandSignup />} />

        <Route path="/womenhome" element={<WomenPage />} />

        <Route path="/" element={<WomenPage />} />
        <Route path="/checkout" element={<RequireAuth><CheckOut /></RequireAuth>} />
        {/* <Route path="/wishlist" element={<CheckOut />} /> */}

        <Route path="/womentopshop" element={<RequireAuth><WomenTopShop /></RequireAuth>} />
        <Route path="/womensale" element={<RequireAuth><WomenSale /></RequireAuth>} />
        <Route path="/womenbrand" element={<RequireAuth><WomenBrand /></RequireAuth>} />
        <Route path="/womenoutlet" element={<RequireAuth><WomenOulet /></RequireAuth>} />
        <Route path="/womenmarketplace" element={<WomenMarketPlace />} />
        <Route path="/womenfacebody" element={<WomenFaceBody />} />
        <Route path="/womennewin" element={<WomenNewIn />} />
        <Route path="/womenclothing" element={<WomenCloathing />} />
        <Route path="/womendresses" element={<WomenDresses />} />
        <Route path="/womenshoe" element={<WomenShoes />} />
        <Route path="/womensportwear" element={<WomenSportWear />} />
        <Route path="/womenaccessories" element={<WomenAccessoris />} />
        <Route path="/womenautumn" element={<WomenAutumn />} />
        <Route path="/womengifting" element={<WomenGifting />} />
        <Route path="/menhome" element={<MenPage />} />

        <Route path="/mensale" element={<RequireAuth><MenSale /></RequireAuth>} />
        <Route path="/mentopshop" element={<MenTopShop />} />
        <Route path="/menbrand" element={<MenBrand />} />
        <Route path="/menoutlet" element={<MenOulet />} />
        <Route path="/menmarketplace" element={<MenMarketPlace />} />
        <Route path="/menfacebody" element={<MenFaceBody />} />
        <Route path="/mennewin" element={<MenNewIn />} />
        <Route path="/menclothing" element={<MenCloathing />} />
        <Route path="/mendresses" element={<MenDresses />} />
        <Route path="/menshoe" element={<MenShoes />} />
        <Route path="/mensportwear" element={<MenSportWear />} />
        <Route path="/menaccessories" element={<MenAccessoris />} />
        <Route path="/menautumn" element={<MenAutumn />} />
        <Route path="/mengifting" element={<MenGifting />} />
        <Route path="/productdetails/:id" element={<RequireAuth><SinglePageProduct /></RequireAuth>} />
           <Route path="/cart" element={<Maincartpage/>}></Route>
           <Route path="/searchproduct" element={<SearchPage />}></Route>
           
      </Routes>
<Footer />

      
    </Box>

  );
};