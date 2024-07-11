import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchBannerInfoAction, fetchRecommendAction } from "./store";

function Banner({ bannerInfo,recommend, fetchBannerInfo, fetchRecommendInfo }) {
  useEffect(() => {
    fetchBannerInfo();
    fetchRecommendInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div style={{ textAlign: "center", height: "30px" }}>{bannerInfo}</div>
    <div style={{ textAlign: "center", height: "20px",color:'lightgray' }}>{recommend}</div>
    </>
    
  );
}

function mapStateToProps({ banner: {bannerInfo,recommend} }) {
  return {
    bannerInfo,
    recommend
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBannerInfo: () => {
      dispatch(fetchBannerInfoAction());
    },
    fetchRecommendInfo: ()=>{
      dispatch(fetchRecommendAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
