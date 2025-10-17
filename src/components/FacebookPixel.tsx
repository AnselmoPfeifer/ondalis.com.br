import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const FacebookPixel = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? "";
    if (pixelId) {
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
  }, []);
  return null;
};

export default FacebookPixel;
