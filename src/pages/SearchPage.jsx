import React from "react";
import Search from './Search';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./SearchPage.css"
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { ListItemSecondaryAction } from "@mui/material";

function SearchPage() {

  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);


  console.log(term);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">

              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <FeedIcon />
                <Link to="/all">News</Link>
              </div>

              <div className="searchPage__option">
                <CropOriginalIcon />
                <Link to="/all">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <FmdGoodIcon />
                <Link to="/all">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {
        term && (

          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
            </p>

            {
              data?.items.map((item) => (
                <div className="searchPage__result">
                  <a href={item.link} className="searchPage__resultLink">

                   {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.cse_image[0]?.src}className="searchPage__resultImage" />
              )}


                    {item.displayLink}
                  </a>

                  <a href={item.link} className="searchPage__resultTitle">
                    <h2>{item.title}</h2>
                  </a>
                  <p className="searchPage__resultdescription">
                   {item.snippet}
                  </p>
                </div>
              ) )
        }
          </div>
        )
      }
    </div>
  )
}

export default SearchPage
